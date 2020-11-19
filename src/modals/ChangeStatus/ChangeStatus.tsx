import React from 'react';
import axios from "axios";
import {
  Button,
  ModalCard,
  FormLayout,
  FormItem
} from '@vkontakte/vkui';

import StatusItem from "./StatusItem";
import CommentItem from "./CommentItem";

import {AppReducerIterface} from "src/store/app/reducers";
import {ReportReducerIterface} from "src/store/reportList/reducers";

import styles from './ChangeStatus.scss';

export interface FormItem {
  value: string,
  error?: string,
  rules?: {
    minLength?: number,
    maxLength?: number,
    required?: boolean
  }
}

interface IProps extends AppReducerIterface, ReportReducerIterface {
  id: string
}

interface IState {
  status: FormItem,
  comment: FormItem
}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      status: {
        value: '',
        rules: {
          required: true
        }
      },
      comment: {
        value: '',
        rules: {
          required: true,
          minLength: 5,
          maxLength: 250
        }
      }
    };
  }

  handleFormChange = (name: string, value: string) => {
    const newItem = { ...this.state[name] };

    newItem.value = value;
    newItem.error = '';

    if(newItem.rules) {
      if(newItem.rules.minLength && (value.length < newItem.rules.minLength)) {
        newItem.error = `Минимальная длина ${newItem.rules.minLength} символов`;
      }

      if(newItem.rules.maxLength && (value.length > newItem.rules.maxLength)) {
        newItem.error = `Максимальная длина ${newItem.rules.maxLength} символов`;
      }

      if (newItem.rules.required && (value.length === 0)) {
        newItem.error = 'Это обязательное поле для заполения';
      }
    }

    this.setState({
      ...this.state,
      [name]: newItem
    });
  }

  sendForm = async () => {
    const {
      panelData,
      changeModal,
      getReport
    } = this.props;
    let newForm = { ...this.state };

    // Все обязательные поля которые нужны в форме
    const requiredItems = [
      'status',
      'comment'
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
        await axios.post('/report/status', {
          reportId: panelData,
          status: newForm.status.value,
          comment: newForm.comment.value
        });

        changeModal(null);
        getReport(panelData);

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
    const { status, comment } = this.state;

    return (
      <ModalCard
        className={styles.changeStatus}
        header="Изменение статуса"
        subheader="Не забудьте, что статусы лучше выставлять после выпуска новой версии"
        actions={
          <Button
            size="l"
            mode="primary"
            onClick={this.sendForm}
          >
            Изменить
          </Button>
        }
      >
        <FormLayout>
          <StatusItem
            item={status}
            onValueChange={(value) => this.handleFormChange('status', value)}
          />
          <CommentItem
            item={comment}
            onValueChange={(value) => this.handleFormChange('comment', value)}
          />
        </FormLayout>
      </ModalCard>
    );
  }
}
