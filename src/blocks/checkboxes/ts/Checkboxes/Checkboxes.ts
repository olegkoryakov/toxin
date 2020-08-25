import Dropdown from '../../../dropdown/ts/Dropdown/Dropdown';

export default class Checkboxes extends Dropdown implements ICheckboxes {
  constructor(checkboxesElement: HTMLElement) {
    super({
      dropdownElement: checkboxesElement,
      openClass: 'checkboxes_opened',
      closeClass: 'checkboxes_closed',
    });
    this.checkboxesElement = checkboxesElement;
  }

  private checkboxesElement: HTMLElement;
}
