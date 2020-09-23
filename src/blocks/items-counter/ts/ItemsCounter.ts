import ItemsCounterModel from './ItemsCounterModel/ItemsCounterModel';
import ItemsCounterPresenter from './ItemsCounterPresenter/ItemsCounterPresenter';
import ItemsCounterView from './ItemsCounterView/ItemsCounterView';

export default class ItemsCounter {
  constructor(
    itemsCounterElement: HTMLElement,
    itemsCounterInput: IItemsCounterInput,
    toggleOpenedCallback: Function,
  ) {
    this.itemsCounterElement = itemsCounterElement;
    this.itemsCounterInput = itemsCounterInput;
    this.toggleOpenedCallback = toggleOpenedCallback;
    this.init();
  }

  private itemsCounterElement: HTMLElement;

  private toggleOpenedCallback: Function;

  private itemsCounterInput: IItemsCounterInput;

  private init() {
    const itemsProps: Array<IItemProps> = [];
    let messageOptions: IMessageOptions | undefined;

    const dataItemsProps = this.itemsCounterElement.dataset.itemsCounterProps;
    const dataMessageOptions = this.itemsCounterElement.dataset.messageOptions;

    if (dataMessageOptions) {
      messageOptions = JSON.parse(dataMessageOptions) as IMessageOptions;
    }

    if (dataItemsProps) {
      itemsProps.push(...JSON.parse(dataItemsProps) as Array<IItemProps>);
    }

    const itemsCounterModel = new ItemsCounterModel(itemsProps, messageOptions);
    const itemsCounterView = new ItemsCounterView(
      this.itemsCounterElement,
      this.itemsCounterInput,
      this.toggleOpenedCallback,
    );
    // eslint-disable-next-line no-unused-vars
    const itemsCounterPresenter = new ItemsCounterPresenter(
      itemsCounterModel,
      itemsCounterView,
    );
  }
}
