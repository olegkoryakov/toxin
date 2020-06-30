import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class GoodsPresenter extends EventEmitter implements IGoodsPresenter {
  constructor(goodsModel: IGoodsModel, goodsView: IGoodsView) {
    super();
    this.goodsModel = goodsModel;
    this.goodsView = goodsView;

    this.goodsView.on('decrease-good', this.decreaseGood.bind(this));
    this.goodsView.on('increase-good', this.increaseGood.bind(this));
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

  init() {
    const goods = this.goodsModel.getGoods();
    const { length } = Object.keys(goods);
    for (let i = 0; i < length; i += 1) {
      const { name, count } = goods[i];
      this.goodsView.setGoodProps(i, name, count);
    }
  }
}
