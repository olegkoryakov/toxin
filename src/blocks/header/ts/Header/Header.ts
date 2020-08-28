class Header implements IHeader {
  constructor(headerElement: HTMLElement) {
    this.headerElement = headerElement;
    this.initFields();
    this.addHandlers();
  }

  private headerElement: HTMLElement;

  private burgerButton!: HTMLButtonElement;

  private initFields() {
    const burgerButton = this.headerElement.querySelector('.header__burger-button') as HTMLButtonElement;
    this.burgerButton = burgerButton;
  }

  private onBurgerButtonClick() {
    this.headerElement.classList.toggle('header_opened');
  }

  private addHandlers() {
    this.burgerButton.addEventListener('click', this.onBurgerButtonClick.bind(this));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const headerElements = document.querySelectorAll('.header');
  headerElements.forEach((headerElement) => {
    // eslint-disable-next-line no-unused-vars
    const header = new Header(headerElement as HTMLElement);
  });
});
