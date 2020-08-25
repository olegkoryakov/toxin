interface IDropdownOptions {
  dropdownElement: HTMLElement,
  openClass: string;
  closeClass: string,
  inputToHightLight?: HTMLElement,
}

interface IDropdown {
  toggleOpened(): void;
}
