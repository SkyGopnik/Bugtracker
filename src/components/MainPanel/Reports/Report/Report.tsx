import React from 'react';
import {
  Div,
  Title,
  Separator,
  Group,
  Header,
  SimpleCell
} from "@vkontakte/vkui";

interface IProps {}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    
    return (
      <>
      <Div>
        <Title level="2" weight="semibold" style={{ marginBottom: 16 }}>Тут название</Title>
        <Title level="5" weight="regular" style={{ marginBottom: 16, color: 'var(--text_subhead)' }}>Шаги воспроизведения</Title>
        <Title level="5" weight="regular" style={{ marginBottom: 16 }}>1. Открываем сервис. <br/> 2. Заходим в рецепт. <br/> 3. Заходим в лалалалала</Title>
        <Title level="5" weight="regular" style={{ marginBottom: 16, color: 'var(--text_subhead)' }}>Фактический результат.</Title>
        <Title level="5" weight="regular" style={{ marginBottom: 16 }}>Краш.</Title>
        <Title level="5" weight="regular" style={{ marginBottom: 16, color: 'var(--text_subhead)' }}>Ожидаемый результат.</Title>
        <Title level="5" weight="regular" style={{ marginBottom: 16 }}>Краша нет.</Title>
        <Separator wide />
      </Div>
      <Group>
              <SimpleCell expandable indicator={<Title level="4" weight="regular" style={{ color: '#2787F5', marginBottom: 16 }}>CooK</Title>} style={{ fontSize: '12pt', color: 'var(--text_subhead)' }}>Продукт</SimpleCell>
              <SimpleCell expandable indicator={<Title level="4" weight="regular" style={{ color: '#2787F5', marginBottom: 16 }}>9.9.9.9.9</Title>} style={{ fontSize: '12pt', color: 'var(--text_subhead)' }}>Версия продукта</SimpleCell>
              <SimpleCell expandable indicator={<Title level="4" weight="regular" style={{ color: '#2787F5', marginBottom: 16 }}>лалалалала</Title>} style={{ fontSize: '12pt', color: 'var(--text_subhead)' }}>Платформы</SimpleCell>
              <SimpleCell expandable indicator={<Title level="4" weight="regular" style={{ color: '#2787F5', marginBottom: 16 }}>лалалала</Title>} style={{ fontSize: '12pt', color: 'var(--text_subhead)' }}>Версии ОС</SimpleCell>
              <SimpleCell expandable indicator={<Title level="4" weight="regular" style={{ color: '#2787F5', marginBottom: 16 }}>лалалалалала</Title>} style={{ fontSize: '12pt', color: 'var(--text_subhead)' }}>Теги</SimpleCell>
              <SimpleCell expandable indicator={<Title level="4" weight="regular" style={{ marginBottom: 16 }}>Исправлен</Title>} style={{ fontSize: '12pt', color: 'var(--text_subhead)' }}>Статус</SimpleCell>
              <SimpleCell expandable indicator={<Title level="4" weight="regular" style={{ color: '#2787F5', marginBottom: 16 }}>Падение приложения</Title>} style={{ fontSize: '12pt', color: 'var(--text_subhead)' }}>Тип проблемы</SimpleCell>
              <SimpleCell expandable indicator={<Title level="4" weight="regular" style={{ marginBottom: 16 }}>Критический</Title>} style={{ fontSize: '12pt', color: 'var(--text_subhead)' }}>Приоритет</SimpleCell>
              <SimpleCell expandable indicator={<Title level="4" weight="regular" style={{ marginBottom: 16 }}>лалалалала</Title>} style={{ fontSize: '12pt', color: 'var(--text_subhead)' }}>Обновлено</SimpleCell>
              <SimpleCell expandable indicator={<Title level="4" weight="regular" style={{ marginBottom: 16 }}>лалалалала</Title>} style={{ fontSize: '12pt', color: 'var(--text_subhead)' }}>Устройства</SimpleCell>
      </Group>
      </>
    );
  }
}
