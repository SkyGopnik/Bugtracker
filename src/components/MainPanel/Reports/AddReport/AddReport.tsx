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

import ProductItem from './ProductItem';

import isset from 'src/functions/isset';

export interface FormItem {
  value: string,
  error?: string,
  rules?: {
    minLength?: number,
    maxLength?: number,
    required?: boolean
  }
}

interface IProps {}

interface IState {
  form: {
    product: FormItem,
    platform: FormItem,
    osname: FormItem,
    title: FormItem,
    device: FormItem,
    steps: FormItem,
    result: FormItem,
    oresult: FormItem,
    tags: FormItem,
    type: FormItem,
    priority: FormItem
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
          value: '',
          rules: {
            required: true
          }
        },
        osname: {
          value: '',
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
        },
        priority: {
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
    }

    this.setState({
      form: newForm
    });
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

  handleFormChange = (name: string, value: string) => {
    const { form } = this.state
    const newForm = { ...form };

    newForm[name].value = value;

    this.setState({
      form: newForm
    });
  }

  render() {
    const { form } = this.state;
    const {
      product,
      platform,
      osname,
      title,
      device,
      steps,
      result,
      oresult,
      tags,
      type,
      priority
    } = form;

    return (
      <FormLayout>
        <ProductItem
          item={product}
          onValueChange={(value) => this.handleFormChange('product', value)}
        />
        <FormItem top="Выберите платформы">
          <FormLayoutGroup>
            <Select
            placeholder="Выберите платформы"
            name="platform"
            value={platform.value}
            onChange={this.handleSelectChange}
            >
                          {['Android', 'iOS','Windows','MacOS','Linux','Windows Phone'].map((text, index) => (
            <option key={index} value={text}>{text}</option>
            ))}
            </Select>
        </FormLayoutGroup>
        </FormItem>
        <FormItem top="Выберте версию ОС">
          <Select
            name="osname"
            value={osname.value}
            onChange={this.handleSelectChange}
            placeholder="Выберите версию ОС"
          >
            {['4.4', '5','6','7','8','9','10'].map((text, index) => (
            <option key={index} value={text}>{text}</option>
            ))}
          </Select>
        </FormItem>
        <FormItem
          top="Название"
          status={isset(title.error) ? (title.error ? 'error' : 'valid') : 'default'}
          bottom={title.error ? title.error : ''}
          >
          <Input
            name="title"
            value={title.value}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Коротко опишите суть бага"
          />
        </FormItem>
          <List>
            <Cell
                description="Android 10.0 Q"
                selectable
            >
                <div>Samsung Galaxy Note 9</div>
                <div className="model-device">SM-N960FZKD</div>
            </Cell>
            <Cell
                description="Windows 10"
                selectable
            >
                <div>Lenovo</div>
                <div className="model-device">Y510P</div>
            </Cell>
            <Cell
                description="IOS 14"
                selectable
            >
                <div>Apple IPhone 6s</div>
                <div className="model-device">6s</div>
            </Cell>
          </List>
        <FormItem
          top="Шаги воспроизведения"
          status={isset(steps.error) ? (steps.error ? 'error' : 'valid') : 'default'}
          bottom={steps.error ? steps.error : ''}
        >
        <Textarea
            name="steps"
            value={steps.value}
            onChange={this.handleInputChange}
            placeholder="1. Откройте раздел &#10;2. Активируйте поле ввода &#10;3."
        />
        </FormItem>
        <FormItem
          top="Фактический результат"
          status={isset(result.error) ? (result.error ? 'error' : 'valid') : 'default'}
          bottom={result.error ? result.error : ''}
          >
        <Textarea
            name="result"
            value={result.value}
            onChange={this.handleInputChange}
            placeholder="Когда я совершаю действие А, происходит Б"
        />
        </FormItem>
        <FormItem
          top="Ожидаемый результат"
          status={isset(oresult.error) ? (oresult.error ? 'error' : 'valid') : 'default'}
          bottom={oresult.error ? oresult.error : ''}
          >
        <Textarea
            name="oresult"
            value={oresult.value}
            onChange={this.handleInputChange}
            placeholder="Когда я совершаю действие А, должно происходить В"
        />
        </FormItem>
        {/*<div style={{display: 'flex'}}>*/}
        {/*    <Button*/}
        {/*        before={<Icon28Camera />}*/}
        {/*        size="l"*/}
        {/*        stretched*/}
        {/*        mode="secondary"*/}
        {/*        style={{ marginRight: 8 }}*/}
        {/*    >*/}
        {/*        Скриншот*/}
        {/*    </Button>*/}
        {/*    <Button*/}
        {/*        before={<Icon28Document />}*/}
        {/*        size="l"*/}
        {/*        stretched*/}
        {/*        mode="secondary"*/}
        {/*    >*/}
        {/*        Документ*/}
        {/*    </Button>*/}
        {/*</div>*/}
        <Checkbox>Скрыть документы из публичного доступа</Checkbox>
        <FormItem top="Теги, к которым имеет отношение баг">
        <Select
            name="platform"
            value="platform.value"
            onChange={this.handleSelectChange}
            placeholder="Выберите теги"
        >
            {['Дизайн', 'Лента','Стена','Профиль','Фотографии','Видеозаписи'].map((text, index) => (
            <option key={index} value={text}>{text}</option>
            ))}
        </Select>
        </FormItem>
        <FormItem top="Тип, к которому относится баг">
        <Select
            name="platform"
            value="platform.value"
            onChange={this.handleSelectChange}
            placeholder="Выберите тип проблемы"
        >
            {['Падение приложения', 'Зависание приложения','Неработающая функциональность','Потеря данных','Производительность','Косметическое несоответствие','Ошибки в тексте','Пожелание'].map((text, index) => (
            <option key={index} value={text}>{text}</option>
            ))}
        </Select>
        </FormItem>
        <FormItem top="Приоритет проблемы">
        <Select
            name="platform"
            value="platform.value"
            onChange={this.handleSelectChange}
            placeholder="Выберите приоритет"
        >
                      {['Низкий', 'Средний','Высокий','Критический','Уязвимость'].map((text, index) => (
            <option key={index} value={text}>{text}</option>
            ))}
        </Select>
        </FormItem>
        <FormItem>
        <Button size="m">Создать отчёт</Button>
        </FormItem>
      </FormLayout>
    );
  }
}
