export default class ItemsCounterInput implements IItemsCounterInput {
  constructor(inputElement: HTMLInputElement) {
    this.inputElement = inputElement;
  }

  private inputElement: HTMLInputElement;

  setValue(value: string) {
    this.inputElement.value = value;
  }

  getValue() {
    return this.inputElement.value;
  }

  toggleHightlight() {
    if (this.inputElement.classList.contains('items-counter-input__input_hightlight')) {
      this.inputElement.classList.remove('items-counter-input__input_hightlight');
    } else {
      this.inputElement.classList.add('items-counter-input__input_hightlight');
    }
  }
}
