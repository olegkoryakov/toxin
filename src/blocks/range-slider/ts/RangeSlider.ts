import RangeSliderModel from './RangeSliderModel/RangeSliderModel';
import RangeSliderView from './RangeSliderView/RangeSliderView';
import RangeSliderPresenter from './RangeSliderPresenter/RangeSliderPresenter';

export default class RangeSlider implements IRangeSlider {
  constructor(rangeSliderElement: HTMLElement) {
    this.rangeSliderElement = rangeSliderElement;
    this.init();
  }

  private rangeSliderElement: HTMLElement;

  private init() {
    let valuesRange = {
      min: 0,
      max: 15000,
    };
    let currentValue = {
      from: 5000,
      to: 10000,
    };
    const dataValuesRange = this.rangeSliderElement.dataset.valuesRange;
    const dataCurrentValue = this.rangeSliderElement.dataset.currentValue;

    if (dataValuesRange && dataCurrentValue) {
      valuesRange = JSON.parse(dataValuesRange) as IValuesRange;
      currentValue = JSON.parse(dataCurrentValue) as ICurrentValue;
    }

    const rangeSliderModel = new RangeSliderModel(currentValue, valuesRange);
    const rangeSliderView = new RangeSliderView(this.rangeSliderElement);
    const rangeSliderPresenter = new RangeSliderPresenter(rangeSliderView, rangeSliderModel);
    rangeSliderPresenter.init();
  }
}
