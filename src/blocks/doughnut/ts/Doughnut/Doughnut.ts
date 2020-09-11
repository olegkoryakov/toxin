import DoughnutModel from './DoughnutModel/DoughnutModel';
import DoughnutView from './DoughnutView/DoughnutView';
import DoughnutPresenter from './DoughnutPresenter/DoughnutPresenter';

export default class Doughnut implements IDoughnut {
  constructor(doughnutElement: HTMLElement, doughnutProps: Array<IDoughnutProp>) {
    this.initDoughnut(doughnutElement, doughnutProps);
  }

  private initDoughnut = (doughnutElement: HTMLElement, doughnutProps: Array<IDoughnutProp>) => {
    const doughnutModel = new DoughnutModel(doughnutProps);
    const doughnutView = new DoughnutView(doughnutElement);
    // eslint-disable-next-line no-unused-vars
    const doughnutPresenter = new DoughnutPresenter(doughnutModel, doughnutView);
  }
}
