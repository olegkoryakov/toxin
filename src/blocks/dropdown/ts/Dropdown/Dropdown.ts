export default class Dropdown implements IDropdown {
  constructor(
    {
      openClass,
      closeClass,
      dropdownElement,
    }: IDropdownOptions,
  ) {
    this.openClass = openClass;
    this.closeClass = closeClass;
    this.dropdownElement = dropdownElement;
    this.initDropdown();
  }

  private openClass: string;

  private closeClass: string;

  private dropdownElement: HTMLElement;

  private dropdownExpandButtons!: NodeListOf<Element>;

  private initDropdown() {
    const dropdownExpandButtons = this.dropdownElement.querySelectorAll('.expand-button');
    this.dropdownExpandButtons = dropdownExpandButtons;
    this.addDropdownHandlers();
  }

  private addDropdownHandlers() {
    this.dropdownExpandButtons.forEach((expandButton) => {
      expandButton.addEventListener('click', this.toggleOpened.bind(this));
    });
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  private onDocumentClick({ target }: MouseEvent) {
    const isDropdownElementContainsTarget = this.dropdownElement
      .contains(target as Node);

    if (!isDropdownElementContainsTarget
      && this.dropdownElement.classList.contains(this.openClass)) {
      this.toggleOpened();
    }
  }

  private toggleExpandButtons() {
    this.dropdownExpandButtons.forEach((dropdownExpandButton) => dropdownExpandButton
      .classList.toggle('expand-button_opened'));
  }

  toggleOpened() {
    this.toggleExpandButtons();
    if (this.dropdownElement.classList.contains(this.openClass)) {
      this.dropdownElement.classList.remove(this.openClass);
      this.dropdownElement.classList.add(this.closeClass);
    } else if (this.dropdownElement.classList.contains(this.closeClass)) {
      this.dropdownElement.classList.remove(this.closeClass);
      this.dropdownElement.classList.add(this.openClass);
    }
  }
}
