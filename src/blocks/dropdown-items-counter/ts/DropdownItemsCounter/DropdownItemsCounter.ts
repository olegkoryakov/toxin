import bind from '../../../../../node_modules/bind-decorator/index';
import Dropdown from '../../../dropdown/ts/Dropdown/Dropdown';
import GoodsInput from '../../../items-counter-input/ts/GoodsInput/ItemsCounterInput';
import ItemsCounter from '../../../items-counter/ts/ItemsCounter';

export default class DropdownItemsCounter extends Dropdown implements IDropdownItemsCounter {
  constructor(dropdownItemsCounterElement: HTMLElement) {
    super(
      {
        dropdownElement: dropdownItemsCounterElement,
        openClass: 'dropdown-items-counter_opened',
        closeClass: 'dropdown-items-counter_closed',
      },
    );
    this.dropdownItemsCounterElement = dropdownItemsCounterElement;
    this.init();
  }

  private itemsCounterInput!: IItemsCounterInput;

  private dropdownItemsCounterElement: HTMLElement;

  @bind
  toggleOpened() {
    super.toggleOpened();
    this.itemsCounterInput.toggleHightlight();
  }

  private init() {
    const itemsCounterElement = this.dropdownItemsCounterElement.querySelector('.items-counter') as HTMLElement;
    const itemsCounterInputElement = this.dropdownItemsCounterElement.querySelector('.items-counter-input__input') as HTMLInputElement;

    this.itemsCounterInput = new GoodsInput(itemsCounterInputElement);

    // eslint-disable-next-line no-unused-vars
    const itemsCounter = new ItemsCounter(
      itemsCounterElement,
      this.itemsCounterInput,
      this.toggleOpened,
    );
  }
}
