import LikeButton from '../blocks/like-button/ts/LikeButton';
import JsDropdown from '../blocks/js-dropdown/ts/JsDropdown';
import Calendar from '../blocks/calendar/ts/Calendar';
import Goods from '../blocks/goods/ts/Goods';

const likeButtons = document.querySelectorAll('.like-button');
const likeButtonsList = [];

likeButtons.forEach((element) => {
  if (element instanceof HTMLElement) {
    likeButtonsList.push(new LikeButton(element));
  }
});

const jsDropdowns = document.querySelectorAll('.js-dropdown');
const jsDropdownsList = [];

jsDropdowns.forEach((element) => {
  const buttons = Array.from(element.querySelectorAll('.js-dropdown__button'));
  if (element !== undefined && buttons !== undefined) {
    jsDropdownsList.push(new JsDropdown((element as HTMLElement), ...(buttons as HTMLElement[])));
  }
});

const calendarWidgetsDates = Array.from(document.querySelectorAll('.dropdown--dates'));
const calendarWidgetsFilterDate = Array.from(document.querySelectorAll('.dropdown--filter-date'));
const calendarWidgets = [...calendarWidgetsDates, ...calendarWidgetsFilterDate];
const calendarsList = [];
calendarWidgets.forEach((calendarWidget) => {
  if (calendarWidget instanceof HTMLElement) {
    calendarsList.push(new Calendar(calendarWidget));
  }
});

const goodsElements = document.querySelectorAll('.goods');
const goodsList = [];
const goods = {
  goods: [
    {
      nameForms: [['спальня', 'спальни', 'спален']],
      count: 0,
    },
    {
      nameForms: [['кровать', 'кровати', 'кроватей']],
      count: 0,
    },
    {
      nameForms: [
        ['ванная', 'ванные', 'ванных'],
        ['комната', 'комнаты', 'комнат'],
      ],
      count: 0,
    },
  ],
  guests: [
    {
      nameForms: [['взрослый', 'взрослых', 'взрослых']],
      count: 0,
    },
    {
      nameForms: [['ребенок', 'ребенка', 'детей']],
      count: 0,
    },
    {
      nameForms: [['младенец', 'младенца', 'младенцев']],
      count: 0,
    },
  ],
};
goodsElements.forEach((goodsElement) => {
  if (goodsElement.classList.contains('goods--goods')) {
    goodsList.push(new Goods((goodsElement as HTMLElement), goods.goods));
  } else if (goodsElement.classList.contains('goods--guests')) {
    goodsList.push(new Goods((goodsElement as HTMLElement), goods.guests));
  }
});
