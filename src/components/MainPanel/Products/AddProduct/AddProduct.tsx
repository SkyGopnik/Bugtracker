import React from 'react';
import axios from 'axios';
import {
  FormLayout,
  FormItem,
  Button
} from "@vkontakte/vkui";

import TitleItem from './TitleItem';
import DescItem from './DescItem';
import TypeItem from './TypeItem';

interface FormItem {
  error?: string,
  rules?: {
    minLength?: number,
    maxLength?: number,
    required?: boolean
  }
}

export interface FormItemText extends FormItem {
  value: string
}

interface IProps {
  type: 'component' | 'panel',
  changeActive(name: string)
}

interface IState {
  title: FormItemText,
  desc: FormItemText,
  type: FormItemText
}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      title: {
        value: '',
        rules: {
          required: true,
          minLength: 5,
          maxLength: 250
        }
      },
      desc: {
        value: '',
        rules: {
          required: true,
          minLength: 5,
          maxLength: 1000
        }
      },
      type: {
        value: '',
        rules: {
          required: true,
          minLength: 5,
          maxLength: 10
        }
      }
    }
  }

  handleFormChange = (name: string, value: string ) => {
    const newItem = { ...this.state[name] };

    newItem.value = value;
    newItem.error = '';

    if(newItem.rules) {
      if (newItem.rules.required && (value.length === 0)) {
        newItem.error = 'Это обязательное поле для заполения';
      }

      if(newItem.rules.minLength && (value.length < newItem.rules.minLength)) {
        newItem.error = `Минимальная длина ${newItem.rules.minLength} символов`;
      }

      if(newItem.rules.maxLength && (value.length > newItem.rules.maxLength)) {
        newItem.error = `Максимальная длина ${newItem.rules.maxLength} символов`;
      }
    }

    this.setState({
      ...this.state,
      [name]: newItem
    });
  }

  sendForm = async () => {
    const { type, changeActive } = this.props;
    let newForm = { ...this.state };

    // Все обязательные поля которые нужны в форме
    const requiredItems = [
      'title',
      'type',
      'desc'
    ];

    // Проверяем все обязательные поля на заполнение
    let isErrors = false;

    requiredItems.forEach((name) => {
      if(newForm[name].rules) {
        if (newForm[name].rules.required && (newForm[name].value.length === 0)) {
          isErrors = true;
          newForm[name].error = 'Это обязательное поле для заполения';
        }
      }
    });

    if (!isErrors) {
      try {
        // Отправляем запрос к API
        await axios.post('/product', {
          title: newForm.title.value,
          description: newForm.desc.value,
          type: newForm.type.value
        });

        if (type === 'component') {
          // Совершаем переход между контентом
          changeActive('products');
        } else if (type === 'panel') {
          // Совершаем переход между панелями
          // changePanel();
        }

        // Завершаем функцию, чтобы не вызывать ошибок из за unmount
        return;
      } catch (e) {
        console.log(e);
      }
    } else {
      // Поднимаем контент вверх, чтобы пользователь проверил форму на ошибки
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    this.setState({
      ...newForm
    });
  }

  render() {
    const {
      title,
      desc,
      type
    } = this.state;

    return (
      <FormLayout>
        <TitleItem
          item={title}
          onValueChange={(value) => this.handleFormChange('title', value)}
        />
        <TypeItem
          item={type}
          onValueChange={(value) => this.handleFormChange('type', value)}
        />
        <DescItem
          item={desc}
          onValueChange={(value) => this.handleFormChange('desc', value)}
        />
        {/*<FormItem>*/}
        {/*  <Button*/}
        {/*    size="l"*/}
        {/*    stretched*/}
        {/*    mode="secondary"*/}
        {/*    onClick={() => console.log('Button photo onclick')}*/}
        {/*  >*/}
        {/*    Добавить изображение*/}
        {/*  </Button>*/}
        {/*</FormItem>*/}
        <FormItem>
          <Button
            size="l"
            stretched
            onClick={this.sendForm}
          >
            Создать продукт
          </Button>
        </FormItem>
      </FormLayout>
    );
  }
}
