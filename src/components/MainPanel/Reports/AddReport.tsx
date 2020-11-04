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

interface FormItem { 
  value: string,
  error?: string
}

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

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        product: {
          value: ''
        },
        platform: {
          value: ''
        },
        osname: {
          value: ''
        },
        title: {
          value: ''
        },
        device: {
          value: ''
        },
        steps: {
          value: ''
        },
        result: {
          value: ''
        },
        oresult: {
          value: ''
        },
        tags: {
          value: ''
        },
        type: {
          value: ''
        },
        priority: {
          value: ''
        }
      }
    }

  }

  handleInputChange = (e) => {
    const { form } = this.state
    const { value, name } = e.currentTarget;
    const newForm = { ...form };

    newForm[name].value = value;

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
        <FormItem top="Название">
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
                description="Windovs 10"
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
        <FormItem top="Шаги воспроизведения">
        <Textarea
            name="steps"
            value={steps.value}
            onChange={this.handleInputChange}
            placeholder="1. Откройте раздел &#10;2. Активируйте поле ввода &#10;3."
        />
        </FormItem>
        <FormItem top="Фактический результат">
        <Textarea
            name="result"
            value={result.value}
            onChange={this.handleInputChange}
            placeholder="Когда я совершаю действие А, происходит Б"
        />
        </FormItem>
        <FormItem top="Ожидаемый результат">
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
