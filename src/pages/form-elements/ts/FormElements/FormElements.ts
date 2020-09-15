import Input from '../../../../blocks/input/ts/Input/Input';
import DropdownGoods from '../../../../blocks/dropdown-goods/ts/DropdownGoods/DropdownGoods';
import Checkboxes from '../../../../blocks/checkboxes/ts/Checkboxes/Checkboxes';
import LikeButton from '../../../../blocks/like-button/ts/LikeButton';
import DropdownCalendar from '../../../../blocks/dropdown-calendar/ts/DropdownCalendar/DropdownCalendar';
import RangeSlider from '../../../../blocks/range-slider/ts/RangeSlider';
import SubscriptionForm from '../../../../blocks/subscription-form/ts/SubscriptionForm/SubscriptionForm';

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

  private subscriptionForm!: ISubscriptionForm;

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
    const subscriptionFormElement = this.formElementsElement.querySelector('.subscription-form');

    this.subscriptionForm = new SubscriptionForm(subscriptionFormElement as HTMLElement);

    inputElements.forEach((inputElement) => {
      this.inputs.push(new Input(inputElement as HTMLInputElement));
    });

    dropdownsGoodsElements.forEach((dropdownGoodsElement) => {
      this.dropdownsGoods.push(new DropdownGoods(dropdownGoodsElement as HTMLElement));
    });

    dropdownsGuestsElements.forEach((dropdownGuestsElement) => {
      this.dropdownsGuests
        .push(new DropdownGoods(dropdownGuestsElement as HTMLElement));
    });

    dropdownsCalendarsElements.forEach((dropdownCalendarElement) => {
      this.dropdownsCalendar.push(new DropdownCalendar(dropdownCalendarElement as HTMLElement));
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
