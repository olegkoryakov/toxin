import LikeButton from '../blocks/like-button/ts/LikeButton';
import JsDropdown from '../blocks/js-dropdown/ts/JsDropdown';

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
