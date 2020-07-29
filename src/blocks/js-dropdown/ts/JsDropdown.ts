export default class JsDropdown implements IJsDropdown {
  constructor(jsDropdownElement: HTMLElement, ...jsDropdownButton: HTMLElement[]) {
    this.jsDropdownElement = jsDropdownElement;
    this.jsDropdownButton = jsDropdownButton;
    this.jsDropdownButton.forEach((button) => button.addEventListener('click', this.onJsDropdownButtonClick.bind(this)));
  }

  jsDropdownElement: HTMLElement;

  jsDropdownButton: HTMLElement[];

  toggleState() {
    if (this.jsDropdownElement.classList.contains('js-dropdown_open')) {
      this.jsDropdownElement.classList.add('js-dropdown_close');
      this.jsDropdownElement.classList.remove('js-dropdown_open');
    } else if (this.jsDropdownElement.classList.contains('js-dropdown_close')) {
      this.jsDropdownElement.classList.remove('js-dropdown_close');
      this.jsDropdownElement.classList.add('js-dropdown_open');
    }
  }

  onJsDropdownButtonClick() {
    this.toggleState();
  }
}
