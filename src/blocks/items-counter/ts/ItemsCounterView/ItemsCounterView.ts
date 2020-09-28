import bind from '../../../../../node_modules/bind-decorator/index';
import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class ItemsCounterView extends EventEmitter implements IItemsCounterView {
  constructor(
    itemsCounterElement: HTMLElement,
    itemsCounterInput: IItemsCounterInput,
    toggleOpenedCallback: Function,
  ) {
    super();
    this.itemsCounterElement = itemsCounterElement;
    this.itemsCounterInput = itemsCounterInput;
    this.toggleOpenedCallback = toggleOpenedCallback;
    this.initControlButtons();
    this.addControlsHandlers();
  }

  private toggleOpenedCallback: Function;

  private itemsCounterInput: IItemsCounterInput;

  private itemsCounterElement: HTMLElement;

  private applyButton!: HTMLElement | null;

  private resetButton!: HTMLElement | null;

  private getItemIndex(itemArg: HTMLElement) {
    const items = Array.from(this.itemsCounterElement.querySelectorAll('.items-counter__item'));
    const index = items.findIndex((item) => item === itemArg);
    return index;
  }

  @bind
  private onPlusButtonClick(clickE: MouseEvent) {
    const itemElement = (clickE.target as HTMLElement).parentElement;
    if (itemElement === null) return;
    const itemIndex = this.getItemIndex(itemElement);
    this.emit('increase-item-count', itemIndex);
    this.emit('set-input-value', null);
  }

  @bind
  private onMinusButtonClick(clickE: MouseEvent) {
    const item = (clickE.target as HTMLElement).parentElement;
    if (item === null) return;
    const itemIndex = this.getItemIndex(item);
    this.emit('decrease-item-count', itemIndex);
    this.emit('set-input-value', null);
  }

  private addControlsHandlers() {
    if (this.applyButton || this.resetButton) {
      if (this.applyButton) this.applyButton.addEventListener('click', this.onApplyButtonClick);
      if (this.resetButton) this.resetButton.addEventListener('click', this.onResetButtonClick);
    }
  }

  @bind
  private onResetButtonClick() {
    this.itemsCounterInput.setValue('');
    this.emit('reset-items-count', null);
  }

  @bind
  private onApplyButtonClick() {
    const value = this.itemsCounterInput.getValue();
    if (value !== '') this.toggleOpenedCallback();
  }

  private initControlButtons() {
    this.applyButton = this.itemsCounterElement.querySelector('.button_apply');
    this.resetButton = this.itemsCounterElement.querySelector('.button_reset');
  }

  setInputValue(value: string) {
    this.itemsCounterInput.setValue(value);
  }

  setItemProps(index: number, name: string, count: number) {
    const items = this.itemsCounterElement.querySelectorAll('.items-counter__item');
    const itemNameElement = items[index].querySelector('.items-counter__item-name');
    const itemCountElement = items[index].querySelector('.items-counter__item-count');
    if (itemCountElement && itemNameElement) {
      itemNameElement.textContent = name;
      itemCountElement.textContent = count.toString();
    }
  }

  disableMinusButton(index: number) {
    const items = this.itemsCounterElement.querySelectorAll('.items-counter__item');
    const itemMinusButton = items[index].querySelector('.items-counter__item-button_minus') as HTMLButtonElement;
    itemMinusButton.disabled = true;
  }

  enableMinusButton(index: number) {
    const items = this.itemsCounterElement.querySelectorAll('.items-counter__item');
    const itemMinusButton = items[index].querySelector('.items-counter__item-button_minus') as HTMLButtonElement;
    itemMinusButton.disabled = false;
  }

  render(itemsArray: Array<IItem>) {
    const fragment = document.createDocumentFragment();
    itemsArray.forEach(({ name, count }) => {
      const li = document.createElement('li');
      const plusButton = document.createElement('button');
      const minusButton = document.createElement('button');
      const nameElement = document.createElement('span');
      const countElement = document.createElement('span');

      li.classList.add('items-counter__item');
      plusButton.classList.add('items-counter__item-button', 'items-counter__item-button_plus');
      minusButton.classList.add('items-counter__item-button', 'items-counter__item-button_minus');
      nameElement.classList.add('items-counter__item-name');
      countElement.classList.add('items-counter__item-count');

      plusButton.type = 'button';
      minusButton.type = 'button';

      plusButton.addEventListener('click', this.onPlusButtonClick);
      minusButton.addEventListener('click', this.onMinusButtonClick);

      plusButton.textContent = '+';
      minusButton.textContent = '-';
      nameElement.textContent = name;
      countElement.textContent = count.toString();

      li.append(nameElement, minusButton, countElement, plusButton);
      fragment.append(li);
    });

    const itemsList = this.itemsCounterElement.querySelector('.items-counter__list') as HTMLElement;
    itemsList.innerHTML = '';
    itemsList.append(fragment);
  }
}
