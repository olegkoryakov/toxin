export default class JsDropdown implements IJsDropdown {
  constructor(jsDropdownElement: HTMLElement, ...jsDropdownButtons: HTMLElement[]) {
    this.jsDropdownElement = jsDropdownElement;
    this.jsDropdownButtons = jsDropdownButtons;

    this.addButtonsHandlers();
  }

  private jsDropdownElement: HTMLElement;

  private jsDropdownButtons: HTMLElement[];

  private addButtonsHandlers() {
    this.jsDropdownButtons.forEach((button) => button.addEventListener('click', this.onJsDropdownButtonClick.bind(this)));
  }

  private toggleState() {
    if (this.jsDropdownElement.classList.contains('js-dropdown_open')) {
      this.jsDropdownElement.classList.add('js-dropdown_close');
      this.jsDropdownElement.classList.remove('js-dropdown_open');
    } else if (this.jsDropdownElement.classList.contains('js-dropdown_close')) {
      this.jsDropdownElement.classList.remove('js-dropdown_close');
      this.jsDropdownElement.classList.add('js-dropdown_open');
    }
  }

  private onJsDropdownButtonClick() {
    this.toggleState();
  }
}
