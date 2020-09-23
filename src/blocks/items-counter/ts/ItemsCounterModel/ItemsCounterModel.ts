export default class ItemsCounterModel implements IItemsCounter {
  constructor(itemsProps: Array<IItemProps>, messageOptions?: IMessageOptions) {
    this.items = [];
    this.itemsProps = itemsProps;
    this.messageOptions = messageOptions;

    this.setItems(this.itemsProps);
  }

  private messageOptions: IMessageOptions | undefined;

  private itemsProps: Array<IItemProps>;

  private items: Array<IItem>;

  private getItemForm(nameForms: TComplexItemNameForms, count: number) {
    const name = nameForms
      .map((forms) => this.wordDeclension(forms, count))
      .reduce((accum, val) => `${accum} ${val}`);
    return name;
  }

  private setItems(itemsProps: Array<IItemProps>) {
    itemsProps.forEach((itemProps, index) => {
      const { nameForms, count } = itemProps;
      const name = this.getItemForm(nameForms, count);
      this.items[index] = {
        name,
        count,
      };
    });
  }

  resetItemsCount() {
    this.itemsProps.forEach((itemProps) => { itemProps.count = 0; });
    this.setItems(this.itemsProps);
  }

  wordDeclension = (itemForms: TSimpleItemNameForms, count: number) => {
    const n = Math.abs(count) % 100;
    const n1 = n % 10;
    let [, , decWord] = itemForms;
    if (n > 10 && n < 20) [, , decWord] = itemForms;
    else if (n1 > 1 && n1 < 5) [, decWord] = itemForms;
    else if (n1 === 1) [decWord] = itemForms;

    return decWord;
  }

  increaseItemCount(index: number) {
    this.itemsProps[index].count += 1;
    const { nameForms, count } = this.itemsProps[index];
    const name = this.getItemForm(nameForms, count);

    this.items[index] = {
      name,
      count,
    };
  }

  decreaseItemCount(index: number) {
    let newCount = this.itemsProps[index].count - 1;
    if (newCount < 0) newCount = 0;
    this.itemsProps[index].count = newCount;

    const { nameForms, count } = this.itemsProps[index];
    const name = this.getItemForm(nameForms, count);

    this.items[index] = {
      name,
      count,
    };
  }

  getItemByIndex(index: number) {
    return this.items[index];
  }

  getItems() {
    return this.items;
  }

  getMessageOptions() {
    return this.messageOptions;
  }
}
