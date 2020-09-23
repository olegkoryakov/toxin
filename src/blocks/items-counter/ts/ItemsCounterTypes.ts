type TSimpleItemNameForms = Array<string>;

type TComplexItemNameForms = Array<TSimpleItemNameForms>;

interface IItemProps {
  nameForms: TComplexItemNameForms,
  count: number,
}

interface IItem {
  name: string,
  count: number,
}

interface IMessageOptions {
  groupLastIndex: number,
  groupNameForms: TSimpleItemNameForms;
}

interface IItemsCounterModel {
  wordDeclension(itemForms: TSimpleItemNameForms, count: number): string,
  increaseItemCount(index: number): void,
  decreaseItemCount(index: number): void,
  getItemByIndex(index: number): IItem,
  getItems(): Array<IItem>,
  resetItemsCount(): void,
  getMessageOptions(): IMessageOptions | undefined;
}

interface IItemsCounterView extends IEventEmitter {
  setItemProps(index: number, name: string, count: number): void,
  setInputValue(value: string): void,
  disableMinusButton(index: number): void,
  enableMinusButton(index: number): void,
  render(itemsArray: Array<IItem>): void;
}

interface IItemsCounterPresenter {
}

interface IItemsCounter {

}
