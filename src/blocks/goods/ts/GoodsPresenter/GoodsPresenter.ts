export default class GoodsPresenter implements IGoodsPresenter {
  constructor(goodsModel: IGoodsModel, goodsView: IGoodsView) {
    this.goodsModel = goodsModel;
    this.goodsView = goodsView;

    this.goodsView.on('decrease-good', this.decreaseGood.bind(this));
    this.goodsView.on('increase-good', this.increaseGood.bind(this));
    this.goodsView.on('set-input-value', this.setInputValue.bind(this));
  }

  private goodsModel: IGoodsModel;

  private goodsView: IGoodsView;

  private decreaseGood(index: number) {
    this.goodsModel.decreaseGood(index);
    const { name, count } = this.goodsModel.getGoodByIndex(index);
    this.goodsView.setGoodProps(index, name, count);
  }

  private increaseGood(index: number) {
    this.goodsModel.increaseGood(index);
    const { name, count } = this.goodsModel.getGoodByIndex(index);
    this.goodsView.setGoodProps(index, name, count);
  }

  private getMessage() {
    const type = this.goodsModel.getType();
    const goods = this.goodsModel.getGoods();

    let message = '';
    if (type === 'goods') {
      message = goods
        .map((good) => `${good.count} ${good.name}`)
        .join(', ');
    } else if (type === 'guests') {
      const ADULT_MAX_INDEX = 1;
      const ADULT_NAME_FORMS = ['гость', 'гостя', 'гостей'];
      const adultCount = goods
        .slice(0, ADULT_MAX_INDEX + 1)
        .map((good) => good.count)
        .reduce((accum, current) => accum + current, 0);
      const adultMessage = `${adultCount} ${this.goodsModel.wordDeclension(ADULT_NAME_FORMS, adultCount)}`;
      const babieMessage = goods.slice(ADULT_MAX_INDEX + 1).map((good) => `${good.count} ${good.name}`).join(', ');
      message = `${adultMessage}, ${babieMessage}`;
    }
    return message;
  }

  private setInputValue() {
    const message = this.getMessage();
    this.goodsView.setInputValue(message);
  }

  init() {
    const goods = this.goodsModel.getGoods();
    const { length } = goods;
    for (let i = 0; i < length; i += 1) {
      const { name, count } = goods[i];
      this.goodsView.setGoodProps(i, name, count);
    }
  }
}
