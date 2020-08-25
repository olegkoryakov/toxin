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
    const selectedDates = {
      from: '19.8.2020',
      to: '23.8.2020',
    };
    const goodsCounts = [2, 1, 0];


    this.dropdownGoods = new DropdownGoods(
      dropdownGoodsElement as HTMLElement,
      goodsCounts,
    );
    this.dropdownCalendar = new DropdownCalendar(
      dropdownCalendarElement as HTMLElement,
      selectedDates,
    );
  }
}
