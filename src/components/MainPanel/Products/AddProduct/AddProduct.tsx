import React, {ReactText} from 'react';
import axios from 'axios';
import {
  FormLayout,
  FormLayoutGroup,
  Select,
  Input,
  List,
  Cell,
  Textarea,
  Button,
  Checkbox,
  Chip,
  FormItem,
  Div
} from "@vkontakte/vkui";

import TitleItem from './TitleItem';
import DescItem from './DescItem';
import TypeItem from './TypeItem';

import isset from 'src/functions/isset';
import FilesItem from "src/components/MainPanel/Reports/AddReport/FilesItem";
import TroubleType from "src/components/MainPanel/Reports/AddReport/TroubleType";

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
  type: 'component' | 'panel'
}

interface IState {
  form: {
    title: FormItemText,
    desc: FormItemText,
    type: FormItemText
  }
}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        title: {
          value: '',
          rules: {
            required: true,
            minLength: 5,
            maxLength: 10
          }
        },
        desc: {
          value: '',
          rules: {
            required: true,
            minLength: 5,
            maxLength: 10
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
  }

  handleFormChange = (name: string, value: string ) => { 
    const { form } = this.state;
    const newForm = { ...form };

    newForm[name].value = value;
    newForm[name].error = '';

    if(newForm[name].rules) {
      if (newForm[name].rules.required && (value.length === 0)) {
        newForm[name].error = 'Это обязательное поле для заполения';
      }

      if(newForm[name].rules.minLength && (value.length < newForm[name].rules.minLength)) {
        newForm[name].error = `Минимальная длина ${newForm[name].rules.minLength} символов`;
      }

      if(newForm[name].rules.maxLength && (value.length > newForm[name].rules.maxLength)) {
        newForm[name].error = `Максимальная длина ${newForm[name].rules.maxLength} символов`;
      }
    }

    this.setState({
      form: newForm
    });
  }

  render() {
    const { form } = this.state;
    const {
      title,
      desc,
      type
    } = form;

    return (
      <FormLayout>
        <TitleItem
          item={title}
          onValueChange={(value) => this.handleFormChange('title', value)}
        />
        <DescItem
          item={desc}
          onValueChange={(value) => this.handleFormChange('desc', value)}
        />
      </FormLayout>
    );
  }
}
