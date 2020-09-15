import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class GoodsView extends EventEmitter implements IGoodsView {
  constructor(
    goodsWidget: HTMLElement,
    inputElement: HTMLInputElement,
    toggleOpenedCallback: Function,
  ) {
    super();
    this.goodsWidget = goodsWidget;
    this.inputElement = inputElement;
    this.toggleOpenedCallback = toggleOpenedCallback;
    this.initControlButtons();
    this.addControlsHandlers();
  }

  private toggleOpenedCallback: Function;

  private inputElement: HTMLInputElement;

  private goodsWidget: HTMLElement;

  private applyButton!: HTMLElement | null;

  private resetButton!: HTMLElement | null;

  private getGoodIndex(goodItemArg: HTMLElement) {
    const goodsItems = Array.from(this.goodsWidget.querySelectorAll('.goods__good'));
    const index = goodsItems.findIndex((goodItem) => goodItem === goodItemArg);
    return index;
  }

  private onPlusButtonClick(clickE: MouseEvent) {
    const goodItem = (clickE.target as HTMLElement).parentElement;
    if (goodItem === null) return;
    const goodIndex = this.getGoodIndex(goodItem);
    this.emit('increase-good', goodIndex);
    this.emit('set-input-value', null);
  }

  private onMinusButtonClick(clickE: MouseEvent) {
    const goodItem = (clickE.target as HTMLElement).parentElement;
    if (goodItem === null) return;
    const goodIndex = this.getGoodIndex(goodItem);
    this.emit('decrease-good', goodIndex);
    this.emit('set-input-value', null);
  }

  private addControlsHandlers() {
    if (this.applyButton || this.resetButton) {
      if (this.applyButton) this.applyButton.addEventListener('click', this.onApplyButtonClick.bind(this));
      if (this.resetButton) this.resetButton.addEventListener('click', this.onResetButtonClick.bind(this));
    }
  }

  private onResetButtonClick() {
    this.inputElement.value = '';
    this.emit('reset-goods-count', null);
  }

  private onApplyButtonClick() {
    const { value } = this.inputElement;
    if (value !== '') this.toggleOpenedCallback();
  }

  private initControlButtons() {
    this.applyButton = this.goodsWidget.querySelector('.button_apply');
    this.resetButton = this.goodsWidget.querySelector('.button_reset');
  }

  setInputValue(value: string) {
    this.inputElement.value = value;
  }

  setGoodProps(index: number, name: string, count: number) {
    const goodsItems = this.goodsWidget.querySelectorAll('.goods__good');
    const goodsItemNameElement = goodsItems[index].querySelector('.goods__good-name');
    const goodsItemCountElement = goodsItems[index].querySelector('.goods__good-count');
    if (goodsItemCountElement && goodsItemNameElement) {
      goodsItemNameElement.textContent = name;
      goodsItemCountElement.textContent = count.toString();
    }
  }

  disableMinusButton(index: number) {
    const goodsItems = this.goodsWidget.querySelectorAll('.goods__good');
    const goodsItemMinusButton = goodsItems[index].querySelector('.goods__good-button_minus') as HTMLButtonElement;
    goodsItemMinusButton.disabled = true;
  }

  enableMinusButton(index: number) {
    const goodsItems = this.goodsWidget.querySelectorAll('.goods__good');
    const goodsItemMinusButton = goodsItems[index].querySelector('.goods__good-button_minus') as HTMLButtonElement;
    goodsItemMinusButton.disabled = false;
  }

  render(goodsArray: TGoodsArray) {
    const fragment = document.createDocumentFragment();
    goodsArray.forEach(({ name, count }) => {
      const li = document.createElement('li');
      const plusButton = document.createElement('button');
      const minusButton = document.createElement('button');
      const nameElement = document.createElement('span');
      const countElement = document.createElement('span');

      li.classList.add('goods__good');
      plusButton.classList.add('goods__good-button', 'goods__good-button_plus');
      minusButton.classList.add('goods__good-button', 'goods__good-button_minus');
      nameElement.classList.add('goods__good-name');
      countElement.classList.add('goods__good-count');

      plusButton.type = 'button';
      minusButton.type = 'button';

      plusButton.addEventListener('click', this.onPlusButtonClick.bind(this));
      minusButton.addEventListener('click', this.onMinusButtonClick.bind(this));

      plusButton.textContent = '+';
      minusButton.textContent = '-';
      nameElement.textContent = name;
      countElement.textContent = count.toString();

      li.append(nameElement, minusButton, countElement, plusButton);
      fragment.append(li);
    });

    const goodsList = this.goodsWidget.querySelector('.goods__list') as HTMLElement;
    goodsList.innerHTML = '';
    goodsList.append(fragment);
  }
}
