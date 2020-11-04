import React from 'react';
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
  FormItem
} from "@vkontakte/vkui";

import isset from 'src/functions/isset';
import { FormItem } from './AddReport';

interface IProps {
  onValueChange(value: string),
  item: FormItem
}

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        product: {
          value: '',
          rules: {
            required: true
          }
        }
    }
  }
}

  handleInputChange = (e) => {
    const { form } = this.state
    const { value, name } = e.currentTarget;
    const newForm = { ...form };

    newForm[name].value = value;

    if(newForm[name].rules) {
      if(newForm[name].rules.minLength && (value.length < newForm[name].rules.minLength)) {
        newForm[name].error = `Минимальная длина ${newForm[name].rules.minLength} символов`;
      }
        if(newForm[name].rules.maxLength && (value.length > newForm[name].rules.maxLength)) {
          newForm[name].error = `Максимальная длина ${newForm[name].rules.maxLength} символов`;
      }

    this.setState({
      form: newForm
    });
  }
}

  handleSelectChange = ({ name, value }) => {
    const { form } = this.state
    const newForm = { ...form };

    newForm[name].value = value;
    console.log(name);
    console.log(value);
    this.setState({
      form: newForm
    });
  }

  render() {
    const { form } = this.state;
    const { 
      product
    } = form;

    return (
        <FormItem top="Выберите продукт">
          <Select
            name="product" 
            value={product.value}
            onChange={this.handleSelectChange}
            placeholder="Выберите продукт"
          >
            {['Одноклассники для Android', 'Одноклассники для IOS','Одноклассники для Web','CooK','Мечты','Отзывы'].map((text, index) => (
            <option key={index} value={text}>{text}</option>
            ))}
        </Select>
        </FormItem>
    );
  }
}
