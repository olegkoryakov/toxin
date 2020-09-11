interface IDoughnutProp {
  name: string,
  value: number,
}

interface ICircleProps {
  strokeDasharray: string,
  strokeDashoffset: string,
}

interface IDoughnutDefaults {
  SIZE: number,
  RADIUS: number,
  CX: number,
  CY: number,
  CIRCLE_WIDTH: number,
  GAP: number,
}

interface IColorTheme {
  color: string,
  svgGradient: string,
  cssGradient: string,
  id: string,
}

interface IDoughnutModel {
  getColorThemes(): Array<IColorTheme>,
  getCirclesProps(): Array<ICircleProps>,
  getDoughnutDefaults(): IDoughnutDefaults,
  getValues(): Array<number>,
  getNames(): Array<string>,
}

interface IDoughnutView extends IEventEmitter{
  renderDoughnut(
    doughnutDefaults: IDoughnutDefaults,
    circlesProps: Array<ICircleProps>,
    svgGradients: string,
    svgGradientsIds: Array<string>,
  ): void,
  setAboutProps(color: string, value: string): void,
  renderList(names: Array<string>, cssGradients: Array<string>): void,
}

interface IDoughnutPresenter {

}

interface IDoughnut {

}
