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
  Chip
} from "@vkontakte/vkui";

import Icon28Camera from '@vkontakte/icons/dist/28/camera';
import Icon28Document from '@vkontakte/icons/dist/28/document';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <FormLayout>
        <Select
            placeholder="Выберите продукт"
        >
            <option value="0">Одноклассники для Android</option>
            <option value="1">Одноклассники для IOS</option>
            <option value="2">Одноклассники для Web</option>
            <option value="3">CooK</option>
            <option value="4">Мечты</option>
            <option value="5">Отзывы</option>
        </Select>
        <FormLayoutGroup>
          <Select placeholder="Выберите платформы">
            <option value="0">Android</option>
            <option value="1">IOS</option>
            <option value="2">Windows</option>
            <option value="3">MacOS</option>
            <option value="4">Linux</option>
            <option value="5">Windows Phone</option>
          </Select>
          <div>
            <Chip
              value="1"
              removable={false}
            />
            <Chip
              value="2"
              removable
            />
          </div>
        </FormLayoutGroup>
        <Select
            placeholder="Выберите версию ОС"
        >
            <option value="0">4.4</option>
            <option value="1">5</option>
            <option value="2">6</option>
            <option value="3">7</option>
            <option value="4">9</option>
            <option value="5">10</option>
        </Select>
        <Input
            type="email"
            placeholder="Коротко опишите суть бага"
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
        <Textarea
            placeholder="1. Откройте раздел &#10;2. Активируйте поле ввода &#10;3."
        />
        <Textarea
            placeholder="Когда я совершаю действие А, происходит Б"
        />
        <Textarea
            placeholder="Когда я совершаю действие А, должно происходить В"
        />
        <div style={{display: 'flex'}}>
            <Button
                before={<Icon28Camera />}
                size="l"
                stretched
                mode="secondary"
                style={{ marginRight: 8 }}
            >
                Скриншот
            </Button>
            <Button
                before={<Icon28Document />}
                size="l"
                stretched
                mode="secondary"
            >
                Документ
            </Button>
        </div>
        <Checkbox>Скрыть документы из публичного доступа</Checkbox>
        <Select
            placeholder="Выберите теги"
        >
            <option value="0">Дизайн</option>
            <option value="1">Лента</option>
            <option value="2">Стена</option>
            <option value="3">Профиль</option>
            <option value="4">Фотографи</option>
            <option value="5">Видеозаписи</option>
        </Select>
        <Select
            placeholder="Выберите тип проблемы"
        >
            <option value="0">Падение приложения</option>
            <option value="1">Зависание приложения</option>
            <option value="2">Неработающая функциональность</option>
            <option value="3">Потеря данных</option>
            <option value="4">Производительность</option>
            <option value="5">Косметическое несоответствие</option>
            <option value="6">Ошибки в тексте</option>
            <option value="7">Пожелание</option>
        </Select>
        <Select
            placeholder="Выберите приоритет"
        >
            <option value="0">Низкий</option>
            <option value="1">Средний</option>
            <option value="2">Высокий</option>
            <option value="3">Критический</option>
            <option value="4">Уязвимост</option>
        </Select>
        <Button size="l">Создать отчёт</Button>
      </FormLayout>
    );
  }
}
