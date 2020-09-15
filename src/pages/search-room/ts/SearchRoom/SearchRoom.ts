import RangeSlider from '../../../../blocks/range-slider/ts/RangeSlider';
import DropdownGoods from '../../../../blocks/dropdown-goods/ts/DropdownGoods/DropdownGoods';
import DropdownCalendar from '../../../../blocks/dropdown-calendar/ts/DropdownCalendar/DropdownCalendar';
import Checkboxes from '../../../../blocks/checkboxes/ts/Checkboxes/Checkboxes';
import Room from '../../../../blocks/room/ts/Room/Room';
import IMG_URLS from './IMG_URLS';

class SearchRoom implements ISearchRoom {
  constructor(searchRoomElement: HTMLElement) {
    this.searchRoomElement = searchRoomElement;
    this.checkboxes = [];
    this.rooms = [];
    this.initFields();
  }

  private searchRoomElement: HTMLElement;

  private dropdownCalendar!: IDropdownCalendar;

  private rooms!: IRoom[];

  private dropdownGoodsGuests!: IDropdownGoods;

  private dropdownGoodsGoods!: IDropdownGoods;

  private rangeSlider!: IRangeSlider;

  private checkboxes: ICheckboxes[];

  private initFields() {
    const dropdownGoodsGoodsElement = this.searchRoomElement
      .querySelector('.search-room__filter-dropdown-goods_goods .dropdown-goods');
    const dropdownGoodsGuestsElement = this.searchRoomElement
      .querySelector('.search-room__filter-dropdown-goods_guests .dropdown-goods');
    const dropdownCalendarElement = this.searchRoomElement
      .querySelector('.dropdown-calendar');
    const rangeSliderElement = this.searchRoomElement
      .querySelector('.range-slider');
    const checkboxesElements = this.searchRoomElement
      .querySelectorAll('.checkboxes');
    const roomElements = this.searchRoomElement.querySelectorAll('.room');

    this.rangeSlider = new RangeSlider(rangeSliderElement as HTMLElement);
    this.dropdownCalendar = new DropdownCalendar(dropdownCalendarElement as HTMLElement);
    this.dropdownGoodsGuests = new DropdownGoods(dropdownGoodsGuestsElement as HTMLElement);
    this.dropdownGoodsGoods = new DropdownGoods(dropdownGoodsGoodsElement as HTMLElement);
    checkboxesElements.forEach((checkboxesElement) => {
      this.checkboxes.push(new Checkboxes(checkboxesElement as HTMLElement));
    });
    roomElements.forEach((roomElement, index) => {
      this.rooms.push(new Room(roomElement as HTMLElement, ...IMG_URLS[index]));
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchRoomElement = document.querySelector('.search-room');
  if (searchRoomElement instanceof HTMLElement) {
    // eslint-disable-next-line no-unused-vars
    const searchRoom = new SearchRoom(searchRoomElement);
  }
});
