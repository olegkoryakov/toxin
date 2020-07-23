import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class GoodsView extends EventEmitter implements IGoodsView {
  constructor(goodsWidget: HTMLElement, inputElement: HTMLInputElement) {
    super();
    this.goodsWidget = goodsWidget;
    this.applyButton = goodsWidget.querySelector('.goods__controls-button--apply');
    this.resetButton = goodsWidget.querySelector('.goods__controls-button--reset');
    this.inputElement = inputElement;

    this.addHandlers();
  }

  private inputElement: HTMLInputElement;

  private goodsWidget: HTMLElement;

  private applyButton: HTMLElement | null;

  private resetButton: HTMLElement | null;

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
    if (!this.applyButton && !this.resetButton) {
      this.emit('set-input-value', null);
    }
  }

  private onMinusButtonClick(clickE: MouseEvent) {
    const goodItem = (clickE.target as HTMLElement).parentElement;
    if (goodItem === null) return;
    const goodIndex = this.getGoodIndex(goodItem);
    this.emit('decrease-good', goodIndex);
    if (!this.applyButton && !this.resetButton) {
      this.emit('set-input-value', null);
    }
  }

  private addHandlers() {
    const plusButtons = this.goodsWidget.querySelectorAll('.goods__good-button--plus');
    const minusButtons = this.goodsWidget.querySelectorAll('.goods__good-button--minus');

    plusButtons.forEach((plusButton) => {
      (plusButton as HTMLElement).addEventListener('click', this.onPlusButtonClick.bind(this));
    });
    minusButtons.forEach((minusButton) => {
      (minusButton as HTMLElement).addEventListener('click', this.onMinusButtonClick.bind(this));
    });

    if (this.applyButton && this.resetButton) {
      this.applyButton.addEventListener('click', this.onApplyButtonClick.bind(this));
      this.resetButton.addEventListener('click', this.onResetButtonClick.bind(this));
    }
  }

  private onResetButtonClick() {
    this.inputElement.value = '';
  }

  private onApplyButtonClick() {
    this.emit('set-input-value', null);
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
}
