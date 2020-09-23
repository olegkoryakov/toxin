import DropdownCalendar from '../../../dropdown-calendar/ts/DropdownCalendar/DropdownCalendar';
import DropdownItemsCounter from '../../../dropdown-items-counter/ts/DropdownItemsCounter/DropdownItemsCounter';

export default class NumberSearch implements NumberSearch {
  constructor(numberSearchElement: HTMLElement) {
    this.numberSearchElement = numberSearchElement;
    this.initFields();
  }

  private numberSearchElement: HTMLElement;

  private dropdownItemsCounter!: IDropdownItemsCounter;

  private dropdownCalendar!: IDropdownCalendar;

  private initFields() {
    const dropdownCalendarElement = this.numberSearchElement.querySelector('.dropdown-calendar') as HTMLElement;
    const dropdownItemsCounterElement = this.numberSearchElement.querySelector('.dropdown-items-counter') as HTMLElement;

    this.dropdownCalendar = new DropdownCalendar(dropdownCalendarElement);
    this.dropdownItemsCounter = new DropdownItemsCounter(dropdownItemsCounterElement);
  }
}
