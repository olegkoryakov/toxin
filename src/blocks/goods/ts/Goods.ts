import GoodsModel from './GoodsModel/GoodsModel';
import GoodsPresenter from './GoodsPresenter/GoodsPresenter';
import GoodsView from './GoodsView/GoodsView';

export default class Goods {
  constructor(goodsWidget: HTMLElement, goodsProps: TGoodsProps) {
    this.goodsModel = new GoodsModel(goodsProps);
    this.goodsView = new GoodsView(goodsWidget);
    this.goodsPresenter = new GoodsPresenter(this.goodsModel, this.goodsView);
  }

  goodsModel: IGoodsModel;

  goodsView: IGoodsView;

  goodsPresenter: IGoodsPresenter;
}
