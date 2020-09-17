import InputMask from 'inputmask';

InputMask.extendDefinitions({
  c: {
    validator: '[А-Яа-яЁё]',
  },
});

export default class Input implements IInput {
  constructor(inputElement: HTMLInputElement) {
    this.inputElement = inputElement;
    this.init();
  }

  private inputElement: HTMLInputElement;

  maskInput() {
    const hasInputMaskData = Object.keys(this.inputElement.dataset).some((key) => key.startsWith('inputmask'));
    if (hasInputMaskData) {
      const mask = new InputMask({
        showMaskOnHover: false,
      });
      mask.mask(this.inputElement);
    }
  }

  init() {
    this.maskInput();
  }
}
