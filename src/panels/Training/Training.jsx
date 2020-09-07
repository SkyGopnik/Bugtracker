import React from 'react';
import axios from 'axios';
import {
  Panel,
  Gallery,
  Div, Button,
  Progress,
  Placeholder,
  Banner
} from '@vkontakte/vkui';

import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';
import Icon28NarrativeOutline from '@vkontakte/icons/dist/28/narrative_outline';

import Icon56FireOutline from '@vkontakte/icons/dist/56/fire_outline';
import Icon56ArticleOutline from '@vkontakte/icons/dist/56/article_outline';

import './Training.scss';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      slideIndex: 0
    };

    this.handleNext = this.handleNext.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  handleNext() {
    const { slideIndex } = this.state;

    this.setState({ slideIndex: slideIndex + 1 });
  }

  handleFinish() {
    const { closeTraining } = this.props;

    axios.put('https://reviews.skyreglis.studio/settings/edit/', {
      key: 'training',
      param: true
    }).catch((err) => console.log(err));

    closeTraining();
  }

  render() {
    const { id } = this.props;
    const { slideIndex } = this.state;

    return (
      <Panel id={id}>
        <div className="training-block">
          <Gallery
            className="training-slider"
            slideIndex={slideIndex}
            onChange={(slideIndex) => this.setState({ slideIndex: slideIndex })}
          >
            <div>
              <Placeholder
                icon={<Icon56FireOutline />}
                header="Добро пожаловать"
                action={
                  <Button
                    size="l"
                    onClick={this.handleNext}
                  >
                    Далее
                  </Button>
                }
              >
                Рады приветствовать Вас в приложении Отзывы,
                 оно создано для возможности делиться своим мнением со всеми,
                 а так же просматривать чужое.
              </Placeholder>
            </div>
            <div>
              <Placeholder
                icon={<Icon56ArticleOutline />}
                header="Удобно"
                action={
                  <Button
                    size="l"
                    onClick={this.handleNext}
                  >
                    Круто
                  </Button>
                }
              >
                <Banner
                  header="Новые отзывы"
                  subheader="Найдите интересующий Вас отзыв просто выбрав категорию!"
                />
                <Banner
                  header="Не смогли найти нужный отзыв?"
                  subheader="Воспользуйтесь поиском. Для более точного результата используйте фильтр."
                />
                <Banner
                  header="Комментируйте"
                  subheader="Не согласны с отзывом? Напишите об этом в комментариях."
                />
              </Placeholder>
            </div>
            <div>
              <Placeholder
                icon={<Icon28AddSquareOutline width={56} height={56} />}
                header="Хотите высказаться о чем-либо?"
                action={
                  <Button
                    size="l"
                    onClick={this.handleNext}
                  >
                    Учту
                  </Button>
                }
              >
                Воспользуйтесь вкладкой &ldquo;Добавить&rdquo;. Выскажите все, что думаете!
              </Placeholder>
            </div>
            <div>
              <Placeholder
                icon={<Icon28NarrativeOutline width={56} height={56} />}
                header="Популярность не предел"
                action={
                  <Button
                    size="l"
                    onClick={this.handleFinish}
                  >
                    Закончить обучение
                  </Button>
                }
              >
                Подписывайтесь на понравившихся Вам авторов
                 или собирайте собственную аудиторию, выбор за Вами!
              </Placeholder>
            </div>
          </Gallery>
          <Div className="progress-block">
            <div className="progress">
              <Progress value={(slideIndex + 1) * 25} />
            </div>
          </Div>
        </div>
      </Panel>
    );
  }
}
