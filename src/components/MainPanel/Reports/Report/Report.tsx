import React from 'react';
import {
  Div,
  Title,
  Separator,
  Group,
  Header,
  SimpleCell,
  InfoRow,
  MiniInfoCell
} from "@vkontakte/vkui";

import Icon20ServicesOutline from '@vkontakte/icons/dist/20/services_outline';
import Icon20FollowersOutline from '@vkontakte/icons/dist/20/followers_outline';
import Icon20CubeBoxOutline from '@vkontakte/icons/dist/20/cube_box_outline';

import Icon24Linked from '@vkontakte/icons/dist/24/linked';
import Icon24PenOutline from '@vkontakte/icons/dist/24/pen_outline';
import Icon24ErrorCircleOutline from '@vkontakte/icons/dist/24/error_circle_outline';
import Icon24ViewOutline from '@vkontakte/icons/dist/24/view_outline';

import Icon28HistoryForwardOutline from '@vkontakte/icons/dist/28/history_forward_outline';

import styles from './Report.scss';

interface IProps {}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Div className={styles.title}>
          <Title level="2" weight="regular">Тут название</Title>
        </Div>
        <Group>
          <SimpleCell disabled>
            <InfoRow header="Шаги воспроизведения">
              1. Запустите приложение. <br />
              2. Перейдите в любую категорию. <br />
              3. Пролистайте немного вниз и нажмите на любое блюдо. <br />
              4. Нажмите 2 раза системную кнопку "Назад". <br />
              5. Повторите шаги "3" и "4".
            </InfoRow>
          </SimpleCell>
          <SimpleCell disabled>
            <InfoRow header="Фактический результат">
              1. Запустите приложение. <br />
              2. Перейдите в любую категорию. <br />
              3. Пролистайте немного вниз и нажмите на любое блюдо. <br />
              4. Нажмите 2 раза системную кнопку "Назад". <br />
              5. Повторите шаги "3" и "4".
            </InfoRow>
          </SimpleCell>
          <SimpleCell disabled>
            <InfoRow header="Ожидаемый результат">
              1. Запустите приложение. <br />
              2. Перейдите в любую категорию. <br />
              3. Пролистайте немного вниз и нажмите на любое блюдо. <br />
              4. Нажмите 2 раза системную кнопку "Назад". <br />
              5. Повторите шаги "3" и "4".            </InfoRow>
          </SimpleCell>
        </Group>
        <Group>
          <MiniInfoCell
            before={<Icon20ServicesOutline />}
            textWrap="full"
            textLevel="primary"
          >
            CooK кулинарный сервис
          </MiniInfoCell>
          <MiniInfoCell
            before={<Icon20FollowersOutline />}
            textWrap="full"
            textLevel="primary"
          >
            1.0.0
          </MiniInfoCell>
          <MiniInfoCell
            before={<Icon20CubeBoxOutline />}
            textWrap="full"
            textLevel="primary"
          >
            <div className={styles.version}>Android (1.5.2)</div>
            <div className={styles.version}>iOS (14.0.1)</div>
            <div className={styles.version}>Web (Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36 OPR/72.0.3815.320 (Edition Yx))</div>
          </MiniInfoCell>
          <MiniInfoCell
            before={<Icon24Linked width={20} height={20} />}
            textWrap="full"
            textLevel="primary"
          >
            Тег1, Тег2, Тег3
          </MiniInfoCell>
          <MiniInfoCell
            before={<Icon24PenOutline width={20} height={20} />}
            textWrap="full"
            textLevel="primary"
          >
            Исправлен
          </MiniInfoCell>
          <MiniInfoCell
            before={<Icon24ErrorCircleOutline width={20} height={20} />}
            textWrap="full"
            textLevel="primary"
          >
            Падение приложения
          </MiniInfoCell>
          <MiniInfoCell
            before={<Icon24ViewOutline width={20} height={20} />}
            textWrap="full"
            textLevel="primary"
          >
            Низкий
          </MiniInfoCell>
          <MiniInfoCell
            before={<Icon28HistoryForwardOutline width={20} height={20} />}
            textWrap="full"
            textLevel="primary"
          >
            Обновлено 16 ноября в 20:50
          </MiniInfoCell>
        </Group>
      </div>
    );
  }
}
