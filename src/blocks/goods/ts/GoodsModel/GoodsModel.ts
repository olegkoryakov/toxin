export default class GoodsModel implements IGoodsModel {
  constructor(goodsProps: TGoodsProps, type: string) {
    this.goods = [];
    this.goodsProps = goodsProps;
    this.type = type;

    this.setGoods(this.goodsProps);
  }

  private type: string;

  private goodsProps: TGoodsProps;

  private goods: TGoodsArray;

  private getNameForm(nameForms: TComplexGoodsNamesForms, count: number) {
    const name = nameForms
      .map((forms) => this.wordDeclension(forms, count))
      .reduce((accum, val) => `${accum} ${val}`);
    return name;
  }

  private setGoods(goodsProps: TGoodsProps) {
    goodsProps.forEach((goodProp, index) => {
      const { nameForms, count } = goodProp;
      const name = this.getNameForm(nameForms, count);
      this.goods[index] = {
        name,
        count,
      };
    });
  }

  getType(): string {
    return this.type;
  }

  // eslint-disable-next-line class-methods-use-this
  wordDeclension(goodForms: TSimpleGoodsNamesForms, count: number) {
    const n = Math.abs(count) % 100;
    const n1 = n % 10;
    let [, , decWord] = goodForms;
    if (n > 10 && n < 20) [, , decWord] = goodForms;
    else if (n1 > 1 && n1 < 5) [, decWord] = goodForms;
    else if (n1 === 1) [decWord] = goodForms;

    return decWord;
  }

  increaseGood(index: number) {
    this.goodsProps[index].count += 1;
    const { nameForms, count } = this.goodsProps[index];
    const name = this.getNameForm(nameForms, count);

    this.goods[index] = {
      name,
      count,
    };
  }

  decreaseGood(index: number) {
    let newCount = this.goodsProps[index].count - 1;
    if (newCount < 0) newCount = 0;
    this.goodsProps[index].count = newCount;

    const { nameForms, count } = this.goodsProps[index];
    const name = this.getNameForm(nameForms, count);

    this.goods[index] = {
      name,
      count,
    };
  }

  getGoodByIndex(index: number) {
    return this.goods[index];
  }

  getGoods() {
    return this.goods;
  }
}
