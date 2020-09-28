import bind from '../../../../../node_modules/bind-decorator/index';

export default class RangeSliderPresenter {
  constructor(
    rangeSliderView: IRangeSliderView,
    rangeSliderModel: IRangeSliderModel,
  ) {
    this.rangeSliderView = rangeSliderView;
    this.rangeSliderModel = rangeSliderModel;

    this.addViewHandler();
  }

  private rangeSliderView: IRangeSliderView;

  private rangeSliderModel: IRangeSliderModel;

  private addViewHandler() {
    this.rangeSliderView.on('change-current-value', this.changeCurrentValue);
  }

  private parseCoordToValue(coord: number) {
    const width = this.rangeSliderView.getSliderLineWidth();
    const valuesRange = this.rangeSliderModel.getValuesRange();

    const value = ((valuesRange.max - valuesRange.min) * (coord / width)) + valuesRange.min;

    return Math.floor(value);
  }

  private parseValueToCoord(value: number) {
    const width = this.rangeSliderView.getSliderLineWidth();
    const { max, min } = this.rangeSliderModel.getValuesRange();
    const coord = ((value - min) * width) / (max - min);

    return coord;
  }

  private setPriceValue() {
    const postfix = this.rangeSliderModel.getPostfix();
    const currentValue = this.rangeSliderModel.getCurrentValue();
    this.rangeSliderView.setPriceElementValues(currentValue, postfix);
  }

  @bind
  private changeCurrentValue(thumbOptions: IThumbOptions) {
    const { modifier, coord } = thumbOptions;
    const currentValue = this.rangeSliderModel.getCurrentValue();
    const value = this.parseCoordToValue(coord);
    currentValue[modifier as keyof ICurrentValue] = value;
    this.rangeSliderModel.setCurrentValue(currentValue);

    this.setPriceValue();
  }

  init() {
    const currentValue = this.rangeSliderModel.getCurrentValue();
    const currentValueKeys = Object.keys(currentValue);
    currentValueKeys.forEach((key) => {
      const coord = this.parseValueToCoord(currentValue[key as keyof ICurrentValue]);
      this.rangeSliderView.setThumbCoord(key, coord);
    });

    this.rangeSliderView.resizeRangeLine();
    this.setPriceValue();
  }
}
