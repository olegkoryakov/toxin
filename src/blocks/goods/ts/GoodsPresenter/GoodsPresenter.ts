export default class GoodsPresenter implements IGoodsPresenter {
  constructor(goodsModel: IGoodsModel, goodsView: IGoodsView) {
    this.goodsModel = goodsModel;
    this.goodsView = goodsView;

    this.addViewHandlers();
    this.init();
  }

  private goodsModel: IGoodsModel;

  private goodsView: IGoodsView;

  private decreaseGood(index: number) {
    this.goodsModel.decreaseGood(index);
    const { name, count } = this.goodsModel.getGoodByIndex(index);
    if (count === 0) this.goodsView.disableMinusButton(index);
    this.goodsView.setGoodProps(index, name, count);
  }

  private increaseGood(index: number) {
    this.goodsModel.increaseGood(index);
    const { name, count } = this.goodsModel.getGoodByIndex(index);
    if (count > 0) this.goodsView.enableMinusButton(index);
    this.goodsView.setGoodProps(index, name, count);
  }

  private getMessage() {
    const type = this.goodsModel.getType();
    const goods = this.goodsModel.getGoods();

    let message = '';
    if (type === 'goods') {
      message = goods
        .filter(({ count }) => count > 0)
        .map(({ count, name }) => `${count} ${name}`)
        .join(', ');
    } else if (type === 'guests') {
      const ADULT_MAX_INDEX = 1;
      const ADULT_NAME_FORMS = ['гость', 'гостя', 'гостей'];
      const adultCount = goods
        .slice(0, ADULT_MAX_INDEX + 1)
        .filter(({ count }) => count > 0)
        .map(({ count }) => count)
        .reduce((accum, current) => accum + current, 0);
      const adultMessage = adultCount > 0
        ? `${adultCount} ${this.goodsModel.wordDeclension(ADULT_NAME_FORMS, adultCount)}`
        : '';
      const babieMessage = goods
        .slice(ADULT_MAX_INDEX + 1)
        .filter(({ count }) => count > 0)
        .map((good) => `${good.count} ${good.name}`)
        .join('');
      message = `${adultMessage}${adultMessage !== '' && babieMessage !== '' ? ', ' : ''}${babieMessage}`;
    }
    return message;
  }

  private setInputValue() {
    const message = this.getMessage();
    this.goodsView.setInputValue(message);
  }

  private resetGoodsCount() {
    this.goodsModel.resetGoodsCount();
    this.init();
  }

  private addViewHandlers() {
    this.goodsView.on('decrease-good', this.decreaseGood.bind(this));
    this.goodsView.on('increase-good', this.increaseGood.bind(this));
    this.goodsView.on('set-input-value', this.setInputValue.bind(this));
    this.goodsView.on('reset-goods-count', this.resetGoodsCount.bind(this));
  }

  private init() {
    const goods = this.goodsModel.getGoods();
    this.goodsView.render(goods);

    goods.forEach(({ count }, index) => {
      if (count === 0) this.goodsView.disableMinusButton(index);
    });

    this.setInputValue();
  }
}
