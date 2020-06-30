type TSimpleGoodsNamesForms = Array<string>;

type TComplexGoodsNamesForms = Array<TSimpleGoodsNamesForms>

type TGoodsNames = TComplexGoodsNamesForms;

interface IGoodProps {
  nameForms: TGoodsNames,
  count: number,
}

type TGoodsProps = Array<IGoodProps>;

interface IGood {
  name: string,
  count: number,
}

interface IGoods {
  [index: number] :IGood,
}

interface IGoodsModel {
  increaseGood(index: number): void,
  decreaseGood(index: number): void,
  getGoodByIndex(index: number): IGood;
  getGoods(): IGoods;
}

interface IGoodsView extends IEventEmitter {
  setGoodProps(index: number, name: string, count: number): void,
}

interface IGoodsPresenter {
}
