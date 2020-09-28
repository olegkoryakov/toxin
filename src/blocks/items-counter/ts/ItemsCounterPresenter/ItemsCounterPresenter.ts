import bind from '../../../../../node_modules/bind-decorator/index';

export default class IItemsCounterPresenter implements IItemsCounterPresenter {
  constructor(itemsCounterModel: IItemsCounterModel, itemsCounterView: IItemsCounterView) {
    this.itemsCounterModel = itemsCounterModel;
    this.itemsCounterView = itemsCounterView;

    this.addViewHandlers();
    this.init();
  }

  private itemsCounterModel: IItemsCounterModel;

  private itemsCounterView: IItemsCounterView;

  @bind
  private decreaseItemCount(index: number) {
    this.itemsCounterModel.decreaseItemCount(index);
    const { name, count } = this.itemsCounterModel.getItemByIndex(index);
    if (count === 0) this.itemsCounterView.disableMinusButton(index);
    this.itemsCounterView.setItemProps(index, name, count);
  }

  @bind
  private increaseItemCount(index: number) {
    this.itemsCounterModel.increaseItemCount(index);
    const { name, count } = this.itemsCounterModel.getItemByIndex(index);
    if (count > 0) this.itemsCounterView.enableMinusButton(index);
    this.itemsCounterView.setItemProps(index, name, count);
  }

  private getMessage() {
    const messageOptions = this.itemsCounterModel.getMessageOptions();
    const items = this.itemsCounterModel.getItems();

    let message = '';
    if (messageOptions === undefined) {
      message = items
        .filter(({ count }) => count > 0)
        .map(({ count, name }) => `${count} ${name}`)
        .join(', ');
    } else {
      const { groupLastIndex, groupNameForms } = messageOptions;
      const groupItemsCount = items
        .slice(0, groupLastIndex + 1)
        .filter(({ count }) => count > 0)
        .map(({ count }) => count)
        .reduce((accum, current) => accum + current, 0);
      const groupMessage = groupItemsCount > 0
        ? `${groupItemsCount} ${this.itemsCounterModel.wordDeclension(groupNameForms, groupItemsCount)}`
        : '';
      const otherGroupMessage = items
        .slice(groupLastIndex + 1)
        .filter(({ count }) => count > 0)
        .map(({ count, name }) => `${count} ${name}`)
        .join('');
      message = `${groupMessage}${groupMessage !== '' && otherGroupMessage !== '' ? ', ' : ''}${otherGroupMessage}`;
    }
    return message;
  }

  @bind
  private setInputValue() {
    const message = this.getMessage();
    this.itemsCounterView.setInputValue(message);
  }

  @bind
  private resetItemsCount() {
    this.itemsCounterModel.resetItemsCount();
    this.init();
  }

  private addViewHandlers() {
    this.itemsCounterView.on('decrease-item-count', this.decreaseItemCount);
    this.itemsCounterView.on('increase-item-count', this.increaseItemCount);
    this.itemsCounterView.on('set-input-value', this.setInputValue);
    this.itemsCounterView.on('reset-items-count', this.resetItemsCount);
  }

  private init() {
    const items = this.itemsCounterModel.getItems();
    this.itemsCounterView.render(items);

    items.forEach(({ count }, index) => {
      if (count === 0) this.itemsCounterView.disableMinusButton(index);
    });

    this.setInputValue();
  }
}
