import React, {ReactText} from 'react';
import axios from 'axios';
import {
  FormLayout,
  Button,
  FormItem
} from "@vkontakte/vkui";

import {ChipsInputOption} from "@vkontakte/vkui/dist/components/ChipsInput/ChipsInput";

import ProductItem from './ProductItemContainer';
import PlatformItem from './PlatformItem';
import OsItem from './OsItem';
import TitleItem from './TitleItem';
import StepsItem from './StepsItem';
import ResultItem from './ResultItem';
import OresultItem from './OResultItem';
import TagsItem from './TagsItem';
import PriorityItem from './PriorityItem';
import TroubleTypeItem from "./TroubleTypeItem";
import {AppReducerIterface} from "src/store/app/reducers";


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

interface IProps extends AppReducerIterface {}

interface IState {
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

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
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
          maxLength: 250
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
          maxLength: 1000
        }
      },
      result: {
        value: '',
        rules: {
          required: true,
          minLength: 5,
          maxLength: 1000
        }
      },
      oresult: {
        value: '',
        rules: {
          required: true,
          minLength: 5,
          maxLength: 1000
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

  componentDidMount() {
    const { panelData } = this.props;
    const { product } = this.state;

    if (panelData) {
      this.setState({
        product: {
          ...product.rules,
          error: '',
          value: panelData
        }
      });
    }
  }

  handleFormChange = (name: string, value: string | Array<string | ChipsInputOption | ReactText>) => {
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

  handleFormChangeWithoutValidation = (name: string, value: string | Array<string> | Array<ChipsInputOption> | boolean) => {
    const newItem = { ...this.state[name] };

    newItem.value = value;
    newItem.error = '';

    this.setState({
      ...this.state,
      [name]: newItem
    });
  }

  sendForm = async () => {
    const { changePanel } = this.props;
    let newForm = { ...this.state };

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
        await axios.post('/report', {
          productId: newForm.product.value,
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

        changePanel('main');

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
    } = this.state;

    return (
      <FormLayout>
        <ProductItem
          item={product}
          onValueChange={(value) => this.handleFormChange('product', value)}
        />
        <TagsItem
          item={tags}
          onValueChange={(value) => this.handleFormChange('tags', value)}
        />
        <TroubleTypeItem
          item={type}
          onValueChange={(value) => this.handleFormChange('type', value)}
        />
        <PriorityItem
          item={priority}
          onValueChange={(value) => this.handleFormChange('priority', value)}
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
        <FormItem>
          <Button size="m" onClick={this.sendForm}>Создать отчёт</Button>
        </FormItem>
      </FormLayout>
    );
  }
}
