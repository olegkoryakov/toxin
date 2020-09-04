import Inputmask from 'inputmask';

export default class SubscriptionForm implements ISubscriptionForm {
  constructor(subscriptionsFormElement: HTMLElement) {
    this.subscriptionsFormElement = subscriptionsFormElement;
    this.initFields();
  }

  private subscriptionsFormElement: HTMLElement;

  private inputMask!: Inputmask.Instance;

  private initFields() {
    this.initInputMask();
  }

  initInputMask() {
    const emailInput = this.subscriptionsFormElement.querySelector('.subscription-form__input');
    if (emailInput instanceof HTMLInputElement) {
      this.inputMask = new Inputmask({ showMaskOnHover: false, mask: '*{4,20}@*{4,20}.*{2,7}' });
      this.inputMask.mask(emailInput);
    }
  }
}
