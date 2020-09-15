import DropdownGoods from '../../../dropdown-goods/ts/DropdownGoods/DropdownGoods';
import DropdownCalendar from '../../../dropdown-calendar/ts/DropdownCalendar/DropdownCalendar';

export default class AboutRoom implements IAboutRoom {
  constructor(aboutRoomElement: HTMLElement) {
    this.aboutRoomElement = aboutRoomElement;
    this.initFields();
  }

  private aboutRoomElement: HTMLElement;

  private dropdownCalendar!: IDropdownCalendar;

  private dropdownGoods!: IDropdownGoods;

  private initFields() {
    const dropdownCalendarElement = this.aboutRoomElement.querySelector('.dropdown-calendar');
    const dropdownGoodsElement = this.aboutRoomElement.querySelector('.dropdown-goods');

    this.dropdownGoods = new DropdownGoods(dropdownGoodsElement as HTMLElement);
    this.dropdownCalendar = new DropdownCalendar(dropdownCalendarElement as HTMLElement);
  }
}
