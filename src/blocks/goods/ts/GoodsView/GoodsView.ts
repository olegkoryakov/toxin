import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class GoodsView extends EventEmitter implements IGoodsView {
  constructor(goodsWidget: HTMLElement) {
    super();
    this.goodsWidget = goodsWidget;
    this.addHandlers();
  }

  private goodsWidget: HTMLElement;

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
  }

  private onMinusButtonClick(clickE: MouseEvent) {
    const goodItem = (clickE.target as HTMLElement).parentElement;
    if (goodItem === null) return;
    const goodIndex = this.getGoodIndex(goodItem);
    this.emit('decrease-good', goodIndex);
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
