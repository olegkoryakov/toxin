import Input from '../../../../blocks/input/ts/Input/Input';
import DropdownGoods from '../../../../blocks/dropdown-goods/ts/DropdownGoods/DropdownGoods';
import Checkboxes from '../../../../blocks/checkboxes/ts/Checkboxes/Checkboxes';
import LikeButton from '../../../../blocks/like-button/ts/LikeButton';
import DropdownCalendar from '../../../../blocks/dropdown-calendar/ts/DropdownCalendar/DropdownCalendar';
import RangeSlider from '../../../../blocks/range-slider/ts/RangeSlider';

class FormElements implements IFormElements {
  constructor(formElementsElement: HTMLElement) {
    this.formElementsElement = formElementsElement;
    this.initFields();
  }

  private formElementsElement: HTMLElement;

  private inputs!: IInput[];

  private dropdownsGoods!: IDropdownGoods[];

  private dropdownsGuests!: IDropdownGoods[];

  private dropdownsCalendar!: IDropdownCalendar[];

  private checkboxes!: ICheckboxes[];

  private rangeSlider!: IRangeSlider;

  private likeButtons!: ILikeButton[];

  private initFields() {
    this.inputs = [];
    this.dropdownsGoods = [];
    this.dropdownsGuests = [];
    this.dropdownsCalendar = [];
    this.likeButtons = [];
    this.checkboxes = [];

    const inputElements = this.formElementsElement.querySelectorAll('.input');
    const dropdownsGoodsElements = this.formElementsElement
      .querySelectorAll('.form-elements__dropdown-goods_goods > .dropdown-goods');
    const dropdownsGuestsElements = this.formElementsElement
      .querySelectorAll('.form-elements__dropdown-goods_guests > .dropdown-goods');
    const dropdownsCalendarsElements = this.formElementsElement.querySelectorAll('.dropdown-calendar');
    const checkboxesElements = this.formElementsElement.querySelectorAll('.checkboxes');
    const likeButtonsElements = this.formElementsElement.querySelectorAll('.like-button');
    const rangeSliderElement = this.formElementsElement.querySelector('.range-slider');

    inputElements.forEach((inputElement) => {
      this.inputs.push(new Input(inputElement as HTMLInputElement));
    });

    dropdownsGoodsElements.forEach((dropdownGoodsElement) => {
      this.dropdownsGoods.push(new DropdownGoods(dropdownGoodsElement as HTMLElement, [2, 2, 0]));
    });

    const dropdownsGuestsProps = [
      [0, 0, 0],
      [0, 0, 0],
      [2, 1, 0],
    ];

    dropdownsGuestsElements.forEach((dropdownGuestsElement, index) => {
      this.dropdownsGuests
        .push(new DropdownGoods(dropdownGuestsElement as HTMLElement, dropdownsGuestsProps[index]));
    });

    dropdownsCalendarsElements.forEach((dropdownCalendarElement) => {
      this.dropdownsCalendar.push(new DropdownCalendar(dropdownCalendarElement as HTMLElement, { from: '19.8.2020', to: '28.8.2020' }));
    });
    checkboxesElements.forEach((checkboxesElement) => {
      this.checkboxes.push(new Checkboxes(checkboxesElement as HTMLElement));
    });
    likeButtonsElements.forEach((likeButtonElement) => {
      this.likeButtons.push(new LikeButton(likeButtonElement as HTMLElement));
    });
    this.rangeSlider = new RangeSlider(rangeSliderElement as HTMLBRElement);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const formElementsElement = document.querySelector('.form-elements');
  if (formElementsElement instanceof HTMLElement) {
    // eslint-disable-next-line no-unused-vars
    const formElements = new FormElements(formElementsElement);
  }
});
