import SubscriptionForm from '../../../subscription-form/ts/SubscriptionForm/SubscriptionForm';

export default class Footer implements IFooter {
  constructor(footerElement: HTMLElement) {
    this.footerElement = footerElement;
    this.init();
  }

  private footerElement: HTMLElement;

  private subsctiptionForm!: ISubscriptionForm;

  private initSubscriptionForm() {
    const subscriptionFormElement = this.footerElement.querySelector('.subscription-form');
    if (subscriptionFormElement instanceof HTMLElement) {
      this.subsctiptionForm = new SubscriptionForm(subscriptionFormElement);
    }
  }

  private init() {
    this.initSubscriptionForm();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const footerElements = document.querySelectorAll('.footer');
  footerElements.forEach((footerElement) => {
    // eslint-disable-next-line no-unused-vars
    const footer = new Footer(footerElement as HTMLElement);
  });
});
