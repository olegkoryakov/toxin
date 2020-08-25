import InputMask from 'inputmask';

export default class Input implements IInput {
  constructor(inputElement: HTMLInputElement) {
    this.inputElement = inputElement;
    this.init();
  }

  private inputElement: HTMLInputElement;

  maskInput() {
    const mask = new InputMask({
      mask: '99.99.9999',
      placeholder: 'ДД.ММ.ГГГГ',
    });
    mask.mask(this.inputElement);
  }

  init() {
    if (this.inputElement.classList.contains('input_date-mask')) {
      this.maskInput();
    }
  }
}
