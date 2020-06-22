export default class JsDropdown implements IJsDropdown {
  constructor(jsDropdownElement: HTMLElement, ...jsDropdownButton: HTMLElement[]) {
    this.jsDropdownElement = jsDropdownElement;
    this.jsDropdownButton = jsDropdownButton;
    this.jsDropdownButton.forEach((button) => button.addEventListener('click', this.onJsDropdownButtonClick.bind(this)));
  }

  jsDropdownElement: HTMLElement;

  jsDropdownButton: HTMLElement[];

  toggleState() {
    if (this.jsDropdownElement.classList.contains('js-dropdown--open')) {
      this.jsDropdownElement.classList.add('js-dropdown--close');
      this.jsDropdownElement.classList.remove('js-dropdown--open');
    } else if (this.jsDropdownElement.classList.contains('js-dropdown--close')) {
      this.jsDropdownElement.classList.remove('js-dropdown--close');
      this.jsDropdownElement.classList.add('js-dropdown--open');
    }
  }

  onJsDropdownButtonClick() {
    this.toggleState();
  }
}
