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
    this.addHandlers();
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

  private addHandlers() {
    const plusButtons = this.goodsWidget.querySelectorAll('.goods__good-button_plus');
    const minusButtons = this.goodsWidget.querySelectorAll('.goods__good-button_minus');

    plusButtons.forEach((plusButton) => {
      (plusButton as HTMLElement).addEventListener('click', this.onPlusButtonClick.bind(this));
    });
    minusButtons.forEach((minusButton) => {
      (minusButton as HTMLElement).addEventListener('click', this.onMinusButtonClick.bind(this));
    });

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
}
