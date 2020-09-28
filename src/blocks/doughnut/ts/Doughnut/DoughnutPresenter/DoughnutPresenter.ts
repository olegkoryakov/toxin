import bind from '../../../../../../node_modules/bind-decorator/index';

export default class DoughnutPresenter implements IDoughnutPresenter {
  constructor(
    doughnutModel: IDoughnutModel,
    doughnutView: IDoughnutView,
  ) {
    this.doughnutModel = doughnutModel;
    this.doughnutView = doughnutView;
    this.init();
  }

  private doughnutModel: IDoughnutModel;

  private doughnutView: IDoughnutView;

  private init() {
    this.addViewHandlers();
    this.renderDoughnut();
  }

  private addViewHandlers() {
    this.doughnutView.on('set-about-props-by-index', this.setAboutPropsByIndex);
  }

  @bind
  private setAboutPropsByIndex(index: number) {
    const { color } = this.doughnutModel.getColorThemes()[index];
    const value = this.doughnutModel.getValues()[index].toString();

    this.doughnutView.setAboutProps(color, value);
  }

  private renderDoughnut() {
    const circlesProps = this.doughnutModel.getCirclesProps();
    const doughtnutDefaults = this.doughnutModel.getDoughnutDefaults();
    const colorThemes = this.doughnutModel.getColorThemes();
    const names = this.doughnutModel.getNames();

    const cssGradients = colorThemes.map(({ cssGradient }) => cssGradient);
    const svgGradients = colorThemes
      .map(({ svgGradient }) => svgGradient)
      .join('');
    const svgGradientsIds = colorThemes
      .map(({ id }) => id);


    this.doughnutView
      .renderDoughnut(
        doughtnutDefaults,
        circlesProps,
        svgGradients,
        svgGradientsIds,
      );
    this.doughnutView
      .renderList(names, cssGradients);
  }
}
