interface IDoughnutOptions {
  SIZE: number,
  RADIUS: number,
  CX: number,
  CY: number,
  CIRCLE_WIDTH: number,
}

interface ICircleProp {
  strokeDasharray: string,
  strokeDashoffset: string,
  value: number,
}

interface IDoughnutModel {
  getDoughnutCirclesProps(): ICircleProp[],
  getDoughnutOptions(): IDoughnutOptions,
}

interface IDoughnutView {
  renderDoughnut(
    doughnutOptions: IDoughnutOptions,
    circlesProps: ICircleProp[],
  ): void,
}

interface IDoughnutPresenter {

}

interface IDoughnut {

}
