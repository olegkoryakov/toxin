import GoodsModel from '../../../goods/ts/GoodsModel/GoodsModel';
import GoodsView from '../../../goods/ts/GoodsView/GoodsView';
import GoodsPresenter from '../../../goods/ts/GoodsPresenter/GoodsPresenter';

export default class DropdownGoods {
  constructor(dropdownGoodsElement: HTMLElement) {
    this.dropdownGoodsElement = dropdownGoodsElement;
    this.init();
  }

  private dropdownGoodsElement: HTMLElement;

  // eslint-disable-next-line class-methods-use-this
  private getGoodsProps(type: string) {
    const goodsType: IGoodsType = {
      goods: [
        {
          nameForms: [['спальня', 'спальни', 'спален']],
          count: 0,
        },
        {
          nameForms: [['кровать', 'кровати', 'кроватей']],
          count: 0,
        },
        {
          nameForms: [
            ['ванная', 'ванные', 'ванных'],
            ['комната', 'комнаты', 'комнат'],
          ],
          count: 0,
        },
      ],
      guests: [
        {
          nameForms: [['взрослый', 'взрослых', 'взрослых']],
          count: 0,
        },
        {
          nameForms: [['ребенок', 'ребенка', 'детей']],
          count: 0,
        },
        {
          nameForms: [['младенец', 'младенца', 'младенцев']],
          count: 0,
        },
      ],
    };
    return goodsType[type];
  }

  // eslint-disable-next-line class-methods-use-this
  private getGoodsType(goodsWidget: HTMLElement) {
    const classArray = Array.from(goodsWidget.classList);
    const classModIndex = classArray
      .findIndex((className) => className.startsWith('goods_'));
    const type = classArray[classModIndex].split('_')[1];
    return type;
  }

  private init() {
    const goodstWidget = this.dropdownGoodsElement.querySelector('.goods');
    const inputElement = this.dropdownGoodsElement.querySelector('.input');
    if (goodstWidget instanceof HTMLElement
        && inputElement instanceof HTMLInputElement) {
      const type = this.getGoodsType(goodstWidget);
      const goodsProps = this.getGoodsProps(type);

      const goodsModel = new GoodsModel(goodsProps, type);
      const goodsView = new GoodsView(goodstWidget, inputElement);
      const goodsPresenter = new GoodsPresenter(goodsModel, goodsView);
      goodsPresenter.init();
    }
  }
}
