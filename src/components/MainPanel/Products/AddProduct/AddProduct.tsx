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
// TODO: Избавится от this.state.form и оставить все данные в this.state для оптимиизации

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

export interface FormItemArray extends FormItem {
  value: Array<string>
}

export interface FormItemBoolean extends FormItem {
  value?: boolean
}

interface IProps {
  type: 'component' | 'panel',
  view: string,
  panel: string,
  changeView(view: string),
  changePanel(panel: string),
  changeViewAndPanel(view: string, panel: string),
  changeActive(name: string)
}

interface IState {
  form: {
    name: FormItemText,
    version: FormItemArray,
    desc: FormItemArray,
    type: FormItemArray
  }
}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: {
          value: '',
          rules: {
            required: true
          }
        },
        version: {
          value: [],
          rules: {
            required: true
          }
        },
        desc: {
          value: [],
          rules: {
            required: true
          }
        },
        type: {
          value: [],
          rules: {
            required: true
          }
        }
      }
    }
  }

  render() {
    const { form } = this.state;
    const {
      name,
      version,
      desc,
      type
    } = form;

    return (
      <FormLayout>
        <TitleItem/>
      </FormLayout>
    );
  }
}
