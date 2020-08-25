export default class DoughnutPresenter implements IDoughnutPresenter {
  constructor(
    doughnutModel: IDoughnutModel,
    doughnutView: IDoughnutView,
  ) {
    this.doughnutModel = doughnutModel;
    this.doughnutView = doughnutView;
    this.renderDoughnut();
  }

  private doughnutModel: IDoughnutModel;

  private doughnutView: IDoughnutView;

  private renderDoughnut() {
    const circlesProps = this.doughnutModel.getDoughnutCirclesProps();
    const doughtnutOptions = this.doughnutModel.getDoughnutOptions();

    this.doughnutView.renderDoughnut(doughtnutOptions, circlesProps);
  }
}
