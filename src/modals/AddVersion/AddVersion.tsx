import React from 'react';
import axios from "axios";
import {
  Button,
  ModalCard,
  FormLayout,
  FormItem
} from '@vkontakte/vkui';

import TitleItem from './TitleItem';
import DescriptionItem from "./DescriptionItem";

import styles from './AddVersion.scss';

import {AppReducerIterface} from "src/store/app/reducers";
import {ProductReducerIterface} from "src/store/productList/reducers";

export interface FormItem {
  value: string,
  error?: string,
  rules?: {
    minLength?: number,
    maxLength?: number,
    required?: boolean
  }
}

interface IProps extends AppReducerIterface, ProductReducerIterface {
  id: string
}

interface IState {
  title: FormItem,
  description: FormItem
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
      description: {
        value: '',
        rules: {
          required: true,
          minLength: 5,
          maxLength: 1000
        }
      }
    };
  }

  componentDidMount() {
    console.log(this.props.modalData);
  }

  handleFormChange = (name: string, value: string) => {
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
    const {
      modalData,
      changeModal,
      getProductVersions
    } = this.props;
    let newForm = { ...this.state };

    // Все обязательные поля которые нужны в форме
    const requiredItems = [
      'title',
      'description'
    ];

    // Проверяем все обязательные поля на заполнение
    let isErrors = false;

    requiredItems.forEach((name) => {
      if (newForm[name].error !== '') {
        isErrors = true;
      }

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
        await axios.post('/product/version', {
          productId: modalData,
          title: newForm.title.value,
          description: newForm.description.value
        });

        changeModal(null);
        getProductVersions(modalData);

        // Завершаем функцию, чтобы не вызывать ошибок из за unmount
        return;
      } catch (e) {
        console.log(e);
      }
    }

    this.setState({
      ...newForm
    });
  }

  render() {
    const { title, description } = this.state;

    return (
      <ModalCard
        className={styles.addVersion}
        header="Добавление версии"
        subheader="Не забудьте сначала выпустить версию в продакшен, а только потом в Баг-трекер."
        actions={
          <Button
            size="l"
            mode="primary"
            onClick={this.sendForm}
          >
            Добавить
          </Button>
        }
      >
        <FormLayout>
          <TitleItem
            item={title}
            onValueChange={(value) => this.handleFormChange('title', value)}
          />
          <DescriptionItem
            item={description}
            onValueChange={(value) => this.handleFormChange('description', value)}
          />
        </FormLayout>
      </ModalCard>
    );
  }
}
