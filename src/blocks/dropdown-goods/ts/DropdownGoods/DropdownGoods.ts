import GOODS_PROPS from '../GOODS_NAME_FORMS';
import GoodsModel from '../../../goods/ts/GoodsModel/GoodsModel';
import GoodsView from '../../../goods/ts/GoodsView/GoodsView';
import GoodsPresenter from '../../../goods/ts/GoodsPresenter/GoodsPresenter';
import Dropdown from '../../../dropdown/ts/Dropdown/Dropdown';
import GoodsInput from '../../../goods-input/ts/GoodsInput/GoodsInput';

export default class DropdownGoods extends Dropdown implements IDropdownGoods {
  constructor(dropdownGoodsElement: HTMLElement) {
    super(
      {
        dropdownElement: dropdownGoodsElement,
        openClass: 'dropdown-goods_opened',
        closeClass: 'dropdown-goods_closed',
      },
    );
    this.dropdownGoodsElement = dropdownGoodsElement;
    this.init();
  }

  private goodsInput!: IGoodsInput;

  private dropdownGoodsElement: HTMLElement;

  private getGoodsType = (goodsElement: HTMLElement) => {
    const classArray = Array.from(goodsElement.classList);
    const classModIndex = classArray
      .findIndex((className) => className.startsWith('goods_'));
    const type = classArray[classModIndex].split('_')[1];
    return type;
  }

  toggleOpened() {
    super.toggleOpened();
    this.goodsInput.toggleHightlight();
  }

  private init() {
    const goodsElement = this.dropdownGoodsElement.querySelector('.goods') as HTMLElement;
    const inputElement = this.dropdownGoodsElement.querySelector('.goods-input__input') as HTMLInputElement;
    const goodsType = this.getGoodsType(goodsElement);
    const goodsProps = JSON.parse(JSON.stringify(GOODS_PROPS[goodsType])) as TGoodsProps;

    const dataGoodsCount = this.dropdownGoodsElement.dataset.goodsCount;

    if (dataGoodsCount) {
      const goodsCount = JSON.parse(dataGoodsCount) as Array<number>;
      goodsProps.forEach((goodProps, index) => { goodProps.count = goodsCount[index]; });
    }

    this.goodsInput = new GoodsInput(inputElement);

    const goodsModel = new GoodsModel(goodsProps, goodsType);
    const goodsView = new GoodsView(
      goodsElement,
      inputElement,
      this.toggleOpened.bind(this),
    );
    // eslint-disable-next-line no-unused-vars
    const goodsPresenter = new GoodsPresenter(
      goodsModel,
      goodsView,
    );
  }
}
