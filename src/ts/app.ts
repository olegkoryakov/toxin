import LikeButton from '../blocks/like-button/ts/LikeButton';
import JsDropdown from '../blocks/js-dropdown/ts/JsDropdown';
import Calendar from '../blocks/calendar/ts/Calendar';

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
