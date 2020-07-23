export default class RangeSliderModel implements IRangeSliderModel {
  constructor(
    currentValue: ICurrentValue,
    valuesRange: IValuesRange,
  ) {
    this.currentValue = currentValue;
    this.postfix = '₽';
    this.valuesRange = valuesRange;
  }

  private postfix: string;

  private currentValue: ICurrentValue;

  private valuesRange: IValuesRange;

  getValuesRange() {
    return this.valuesRange;
  }

  getCurrentValue() {
    return this.currentValue;
  }

  setCurrentValue(currentValue: ICurrentValue) {
    this.currentValue = currentValue;
  }

  getPostfix() {
    return this.postfix;
  }
}
