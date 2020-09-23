import DropdownItemsCounter from '../../../dropdown-items-counter/ts/DropdownItemsCounter/DropdownItemsCounter';
import DropdownCalendar from '../../../dropdown-calendar/ts/DropdownCalendar/DropdownCalendar';

export default class AboutRoom implements IAboutRoom {
  constructor(aboutRoomElement: HTMLElement) {
    this.aboutRoomElement = aboutRoomElement;
    this.initFields();
  }

  private aboutRoomElement: HTMLElement;

  private dropdownCalendar!: IDropdownCalendar;

  private dropdownItemsCounter!: IDropdownItemsCounter;

  private initFields() {
    const dropdownCalendarElement = this.aboutRoomElement.querySelector('.dropdown-calendar');
    const dropdownItemsCounterElement = this.aboutRoomElement.querySelector('.dropdown-items-counter');

    this.dropdownItemsCounter = new DropdownItemsCounter(
      dropdownItemsCounterElement as HTMLElement,
    );
    this.dropdownCalendar = new DropdownCalendar(dropdownCalendarElement as HTMLElement);
  }
}
