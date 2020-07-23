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

type TGoodsArray = Array<IGood>;

interface IGoodsModel {
  getType(): string,
  wordDeclension(goodForms: TSimpleGoodsNamesForms, count: number): string,
  increaseGood(index: number): void,
  decreaseGood(index: number): void,
  getGoodByIndex(index: number): IGood;
  getGoods(): TGoodsArray;
}

interface IGoodsView extends IEventEmitter {
  setGoodProps(index: number, name: string, count: number): void,
  setInputValue(value: string): void,
}

interface IGoodsPresenter {
}

interface IGoods {
  getValue(): TGoodsArray,
}
