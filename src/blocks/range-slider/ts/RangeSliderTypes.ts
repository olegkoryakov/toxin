interface ICurrentValue {
  from: number,
  to: number,
}

interface IValuesRange {
  min: number,
  max: number,
}

interface IRangeSliderModel {
  getPostfix(): string,
  getValuesRange(): IValuesRange,
  setCurrentValue(currentValue: ICurrentValue): void,
  getCurrentValue(): ICurrentValue,
}

interface IThumbOptions {
  modifier: string,
  coord: number,
}

interface IRangeSliderView extends IEventEmitter {
  setPriceElementValues(currentValue: ICurrentValue, postfix: string): void,
  getSliderLineWidth(): number,
  setThumbCoord(modifier: string, coord: number): void,
  resizeRangeLine(): void,
}

interface IRangeSliderPresenter {

}

interface IRangeSlider {

}
