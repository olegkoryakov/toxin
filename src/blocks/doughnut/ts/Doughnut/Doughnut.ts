import DoughnutModel from './DoughnutModel/DoughnutModel';
import DoughnutView from './DoughnutView/DoughnutView';
import DoughnutPresenter from './DoughnutPresenter/DoughnutPresenter';

export default class Doughnut implements IDoughnut {
  constructor(doughnutElement: HTMLElement, ...values: number[]) {
    this.initDoughnut(doughnutElement, ...values);
  }

  private initDoughnut = (doughnutElement: HTMLElement, ...values: number[]) => {
    const doughnutModel = new DoughnutModel(...values);
    const doughnutView = new DoughnutView(doughnutElement);
    // eslint-disable-next-line no-unused-vars
    const doughnutPresenter = new DoughnutPresenter(doughnutModel, doughnutView);
  }
}
