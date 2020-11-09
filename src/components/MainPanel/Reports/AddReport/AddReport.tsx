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

import {ChipsInputOption} from "@vkontakte/vkui/dist/components/ChipsInput/ChipsInput";
import ChipsSelect from "@vkontakte/vkui/dist/es6/components/ChipsSelect/ChipsSelect";

import ProductItem from './ProductItem';
import PlatformItem from './PlatformItem';
import OsItem from './OsItem';
import TitleItem from './TitleItem';
import DeviceItem from './DeviceItem';
import StepsItem from './StepsItem';
import ResultItem from './ResultItem';
import OresultItem from './OResultItem';
import TagsItem from './TagsItem';
import PriorityItem from './PriorityItem';

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
    product: FormItemText,
    platform: FormItemArray,
    osnameAndroid: FormItemArray,
    osnameIOS: FormItemArray,
    title: FormItemText,
    device: FormItemText,
    steps: FormItemText,
    result: FormItemText,
    oresult: FormItemText,
    tags: FormItemArray,
    priority: FormItemText,
    files: FormItemArray,
    hideFiles: FormItemBoolean,
    type: FormItemText
  }
}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        product: {
          value: '',
          rules: {
            required: true
          }
        },
        platform: {
          value: [],
          rules: {
            required: true
          }
        },
        osnameAndroid: {
          value: [],
          rules: {
            required: true
          }
        },
        osnameIOS: {
          value: [],
          rules: {
            required: true
          }
        },
        title: {
          value: '',
          rules: {
            required: true,
            minLength: 5,
            maxLength: 10
          }
        },
        device: {
          value: '',
          rules: {
            required: true,
            minLength: 5,
            maxLength: 10
          }
        },
        steps: {
          value: '',
          rules: {
            required: true,
            minLength: 5,
            maxLength: 10
          }
        },
        result: {
          value: '',
          rules: {
            required: true,
            minLength: 5,
            maxLength: 10
          }
        },
        oresult: {
          value: '',
          rules: {
            required: true,
            minLength: 5,
            maxLength: 10
          }
        },
        tags: {
          value: [],
          rules: {
            required: true
          }
        },
        priority: {
          value: '',
          rules: {
            required: true
          }
        },
        files: {
          value: []
        },
        hideFiles: {
          value: false
        },
        type: {
          value: '',
          rules: {
            required: true
          }
        }
      }
    }
  }

  handleFormChange = (name: string, value: string | Array<string | ChipsInputOption | ReactText>) => {
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

  handleFormChangeWithoutValidation = (name: string, value: string | Array<string> | Array<ChipsInputOption> | boolean) => {
    const { form } = this.state;
    const newForm = { ...form };

    newForm[name].value = value;
    newForm[name].error = '';

    this.setState({
      form: newForm
    });
  }

  sendForm = async () => {
    const { form } = this.state;
    const { type, changePanel, changeActive } = this.props;
    let newForm = { ...form };

    // Все обязательные поля которые нужны в форме
    const requiredItems = [
      'product',
      'platform',
      'title',
      'steps',
      'result',
      'oresult',
      'tags',
      'priority',
      'type'
    ];

    // Проверяем нужны ли Версии Android/iOS
    if (newForm.platform.value.indexOf('Android') !== -1) {
      requiredItems.push('osnameAndroid');
    }

    if (newForm.platform.value.indexOf('iOS') !== -1) {
      requiredItems.push('osnameIOS');
    }

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
        await axios.post('/report', {
          product: newForm.product.value,
          platform: newForm.platform.value,
          osnameAndroid: newForm.platform.value.indexOf('Android') !== -1 ? newForm.osnameAndroid.value : null,
          osnameIOS: newForm.platform.value.indexOf('iOS') !== -1 ? newForm.osnameIOS.value : null,
          title: newForm.title.value,
          steps: newForm.steps.value,
          result: newForm.result.value,
          oresult: newForm.oresult.value,
          tags: newForm.tags.value,
          priority: newForm.priority.value,
          type: newForm.type.value
        });

        if (type === 'component') {
          // Совершаем переход между контентом
          changeActive('reports');
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
      form: newForm
    });
  }

  render() {
    const { form } = this.state;
    const {
      product,
      platform,
      osnameAndroid,
      osnameIOS,
      title,
      device,
      steps,
      result,
      oresult,
      tags,
      priority,
      files,
      hideFiles,
      type
    } = form;

    return (
      <FormLayout>
        <ProductItem
          item={product}
          onValueChange={(value) => this.handleFormChange('product', value)}
        />
        <TitleItem
          item={title}
          onValueChange={(value) => this.handleFormChange('title', value)}
        />
        {/*TODO: Реализовать девайсы когда для них будет база, закос на v2*/}
        {/*<DeviceItem*/}
        {/*  item={device}*/}
        {/*  onValueChange={(value) => this.handleFormChange('device', value)}*/}
        {/*/>*/}
        <PlatformItem
          item={platform}
          onValueChange={(value) => this.handleFormChange('platform', value)}
        />
        {/*Проверяем есть ли в платформе iOS*/}
        {platform.value.indexOf('iOS') !== -1 && (
          <OsItem
            type="iOS"
            item={osnameIOS}
            onValueChange={(value) => this.handleFormChange('osnameIOS', value)}
          />
        )}
        {/*Проверяем есть ли в платформе Android*/}
        {platform.value.indexOf('Android') !== -1 && (
          <OsItem
            type="Android"
            item={osnameAndroid}
            onValueChange={(value) => this.handleFormChange('osnameAndroid', value)}
          />
        )}
        <StepsItem
          item={steps}
          onValueChange={(value) => this.handleFormChange('steps', value)}
        />
        <ResultItem
          item={result}
          onValueChange={(value) => this.handleFormChange('result', value)}
        />
        <OresultItem
          item={oresult}
          onValueChange={(value) => this.handleFormChange('oresult', value)}
        />
        {/*TODO: Реализовать добавление файлов, включая валидацию на сервере*/}
        {/*<FilesItem*/}
        {/*  item={files}*/}
        {/*  onValueChange={(value) => this.handleFormChange('files', value)}*/}
        {/*/>*/}
        {/*<Checkbox*/}
        {/*  checked={hideFiles.value}*/}
        {/*  onChange={(e) => this.handleFormChangeWithoutValidation('hideFiles', e.target.checked)}*/}
        {/*>*/}
        {/*  Скрыть документы из публичного доступа*/}
        {/*</Checkbox>*/}
        <TagsItem
          item={tags}
          onValueChange={(value) => this.handleFormChange('tags', value)}
        />
        <TroubleType
          item={type}
          onValueChange={(value) => this.handleFormChange('type', value)}
        />
        <PriorityItem
          item={priority}
          onValueChange={(value) => this.handleFormChange('priority', value)}
        />
        <FormItem>
          <Button size="m" onClick={this.sendForm}>Создать отчёт</Button>
        </FormItem>
      </FormLayout>
    );
  }
}
