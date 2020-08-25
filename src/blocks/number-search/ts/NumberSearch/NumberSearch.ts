import DropdownCalendar from '../../../dropdown-calendar/ts/DropdownCalendar/DropdownCalendar';
import DropdownGoods from '../../../dropdown-goods/ts/DropdownGoods/DropdownGoods';

export default class NumberSearch implements NumberSearch {
  constructor(numberSearchElement: HTMLElement) {
    this.numberSearchElement = numberSearchElement;
    this.initFields();
  }

  private numberSearchElement: HTMLElement;

  private dropdownGoods!: IDropdownGoods;

  private dropdownCalendar!: IDropdownCalendar;

  private initFields() {
    const dropdownCalendarElement = this.numberSearchElement.querySelector('.dropdown-calendar') as HTMLElement;
    const dropdownGoodsElement = this.numberSearchElement.querySelector('.dropdown-goods') as HTMLElement;

    this.dropdownCalendar = new DropdownCalendar(dropdownCalendarElement);
    this.dropdownGoods = new DropdownGoods(dropdownGoodsElement);
  }
}
