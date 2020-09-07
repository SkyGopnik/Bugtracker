import React from 'react';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  Input,
  FormLayout,
  platform,
  IOS,
  Group,
  Header,
  Cell,
  Switch,
  Radio,
  Div,
  Button
} from '@vkontakte/vkui';

import Icon24Back from '@vkontakte/icons/dist/24/back';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28BugOutline from '@vkontakte/icons/dist/28/bug_outline';

const osname = platform();

export default class extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { id } = this.props;

    return (
      <Panel id={id}>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={() => window.history.back()}>
              {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderButton>
          }
        >
          Настройки
        </PanelHeader>

        <Group header={<Header mode="secondary">Адрес профиля</Header>} description="Имя, которое будет использоваться в ссылке на профиль. Например, vk.com/reviews/#User">
          <FormLayout>
            <Input
              type="text"
              placeholder="Например, User"
              bottom="Ваш номер профиля – N."
            />
          </FormLayout>
        </Group>
        <Group header={<Header mode="secondary">Уведомления</Header>}>
          <Cell
            asideContent={<Switch />}
            description="Уведомлять об взаимодействии с отзывами"
            multiline
          >
              Уведомления
          </Cell>
          <Cell
            asideContent={<Switch />}
            description="Уведомлять об одобрении отзыва"
            multiline
          >
              Одобрение
          </Cell>
          <Cell
            asideContent={<Switch />}
            description="Уведомлять об отклонении отзыва"
            multiline
          >
              Отклонение
          </Cell>
          <Cell
            asideContent={<Switch />}
            description="Уведомлять о том, что отзыв отправлен на рассмотрение"
            multiline
          >
              Рассмотрение
          </Cell>
          <Cell
            asideContent={<Switch />}
            description="Уведомлять о том, что кто-то оставил комментарий под отзывом"
            multiline
          >
              Комментарии
          </Cell>
          <Cell
            asideContent={<Switch />}
            description="Уведомлять о том, что кто-то оставил лайк под отзывом"
            multiline
          >
              Лайки
          </Cell>
          <Cell
            asideContent={<Switch />}
            description="Уведомлять о том, что кто-то подписался на Вас"
            multiline
          >
              Подписчики
          </Cell>
          <Cell
            asideContent={<Switch />}
            description="Уведомлять о том, что кто-то поделился Вашим отзывом"
            multiline
          >
              Репосты
          </Cell>
          <Cell
            asideContent={<Switch />}
            description="Уведомлять о том, что Вы получили новое достижение"
            multiline
          >
              Достижения
          </Cell>
          <Cell
            asideContent={<Switch />}
            description="Уведомлять о том, что Вы получили значок"
            multiline
          >
              Значки
          </Cell>
        </Group>
        <Group header={<Header mode="secondary">Тема</Header>} description="Цветовое оформление нашего приложения">
          <Radio name="radio" value="bright_light" description="Определять автоматически в зависимости от темы приложения ВКонтакте">Автоматическая</Radio>
          <Radio name="radio" value="bright_light">Светлая</Radio>
          <Radio name="radio" value="space_gray">Темная</Radio>
        </Group>
        <Group header={<Header mode="secondary">Специальные возможности</Header>} description="Программа-отладчик, для проверки и отладки выполняемых файлов">
          <Cell before={<Icon28BugOutline />} asideContent={<Switch />}>Debug</Cell>
        </Group>
        <Group>
          <Div>
            <Button size="xl" mode="commerce">Сохранить</Button>
          </Div>
        </Group>
      </Panel>
    );
  }
}
