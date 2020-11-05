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
import PlatformItem from './PlatformItem';
import OsItem from './OsItem';
import TitleItem from './TitleItem';
import DeviceItem from './DeviceItem';
import StepsItem from './StepsItem';
import ResultItem from './ResultItem';
import OresultItem from './OResultItem';
import TagsItem from './TagsItem';
import TypeItem from './TypeItem';
import PriorityItem from './PriorityItem';

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
        <PlatformItem
          item={platform}
          onValueChange={(value) => this.handleFormChange('platform', value)}
        />
        <OsItem
          item={osname}
          onValueChange={(value) => this.handleFormChange('osname', value)}
        />
        <TitleItem
        item={title}
        onValueChange={(value) => this.handleFormChange('title', value)}
        />
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
        <TagsItem
          item={tags}
          onValueChange={(value) => this.handleFormChange('tags', value)}
        />
        <TypeItem
          item={type}
          onValueChange={(value) => this.handleFormChange('type', value)}
        />
        <PriorityItem
          item={priority}
          onValueChange={(value) => this.handleFormChange('priority', value)}
        />
        <FormItem>
        <Button size="m">Создать отчёт</Button>
        </FormItem>
      </FormLayout>
    );
  }
}
