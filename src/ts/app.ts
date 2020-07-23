import LikeButton from '../blocks/like-button/ts/LikeButton';
import JsDropdown from '../blocks/js-dropdown/ts/JsDropdown';
import DropdownCalendar from '../blocks/dropdown/ts/DropdownCalendar/DropdownCalendar';
import DropdownGoods from '../blocks/dropdown/ts/DropdownGoods/DropdownGoods';
import RangeSlider from '../blocks/range-slider/ts/RangeSlider';

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
const calendarWidgetsFilterDate = Array.from(document.querySelectorAll('.dropdown--date-filter'));
const calendarWidgets = [...calendarWidgetsDates, ...calendarWidgetsFilterDate];
const calendarsList = [];
calendarWidgets.forEach((calendarWidget) => {
  if (calendarWidget instanceof HTMLElement) {
    calendarsList.push(new DropdownCalendar(calendarWidget));
  }
});

const dropdownGoodsElements = Array
  .from(document.querySelectorAll('.dropdown'))
  .filter((dropdown) => dropdown.classList.contains('dropdown--goods') || dropdown.classList.contains('dropdown--guests'));
const dropdownGoodsList = [];
dropdownGoodsElements.forEach((dropdownGoodsElement) => {
  dropdownGoodsList.push(new DropdownGoods((dropdownGoodsElement as HTMLElement)));
});

const rangeSliderElements = document.querySelectorAll('.range-slider');
const rangeSliderList: Array<IRangeSlider> = [];
rangeSliderElements.forEach((rangeSliderElement) => {
  rangeSliderList.push(new RangeSlider(rangeSliderElement as HTMLElement));
});
