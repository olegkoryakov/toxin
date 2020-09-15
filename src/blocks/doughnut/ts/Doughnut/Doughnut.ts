import DoughnutModel from './DoughnutModel/DoughnutModel';
import DoughnutView from './DoughnutView/DoughnutView';
import DoughnutPresenter from './DoughnutPresenter/DoughnutPresenter';

export default class Doughnut implements IDoughnut {
  constructor(doughnutElement: HTMLElement) {
    this.initDoughnut(doughnutElement);
  }

  private initDoughnut = (doughnutElement: HTMLElement) => {
    const dataDoughnutProps = doughnutElement.dataset.doughnutProps;

    const doughnutProps: Array<IDoughnutProp> = [];
    if (dataDoughnutProps) {
      doughnutProps.push(...(JSON.parse(dataDoughnutProps) as Array<IDoughnutProp>));
    }

    const doughnutModel = new DoughnutModel(doughnutProps);
    const doughnutView = new DoughnutView(doughnutElement);
    // eslint-disable-next-line no-unused-vars
    const doughnutPresenter = new DoughnutPresenter(doughnutModel, doughnutView);
  }
}
