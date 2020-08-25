export default class DoughnutModel implements IDoughnutModel {
  constructor(...values: number[]) {
    this.values = values;
    this.setFields();
  }

  private values: number[];

  private totalValue!: number;

  private doughnutOptions!: IDoughnutOptions;

  private doughnutPiecesWidth!: number[];

  private doughnutPiecesOffset!: number[];


  private setFields() {
    this.setTotalValue();
    this.setDoughnutOptions();
    this.setDoughnutPiecesWidth();
    this.setDoughnutPiecesOffset();
  }

  private setTotalValue() {
    this.totalValue = this.values.reduce((accum, current) => accum + current, 0);
  }

  private setDoughnutOptions() {
    const STROKE_WIDTH = 4;
    const SIZE = 120;
    const RADIUS = (SIZE - (STROKE_WIDTH * 2)) / 2;
    const CX = (SIZE + STROKE_WIDTH) / 2;
    const CY = (SIZE + STROKE_WIDTH) / 2;
    const CIRCLE_WIDTH = 2 * Math.PI * RADIUS;

    this.doughnutOptions = {
      SIZE,
      RADIUS,
      CX,
      CY,
      CIRCLE_WIDTH,
    };
  }

  private setDoughnutPiecesWidth() {
    const { CIRCLE_WIDTH } = this.doughnutOptions;
    this.doughnutPiecesWidth = this.values.map((val) => {
      const value = (val / this.totalValue);
      const width = (CIRCLE_WIDTH * value);
      return width;
    });
  }

  private setDoughnutPiecesOffset() {
    this.doughnutPiecesOffset = [];
    this.doughnutPiecesWidth.forEach((width, index) => {
      let offset = 0;
      if (index !== 0) {
        offset = this.doughnutPiecesOffset[index - 1] - this.doughnutPiecesWidth[index - 1];
      }

      this.doughnutPiecesOffset.push(offset - 2);
    });
  }

  getDoughnutCirclesProps() {
    const { length } = this.values;
    const circlesProps: ICircleProp[] = [];
    for (let i = 0; i < length; i += 1) {
      circlesProps.push({
        strokeDasharray: `${this.doughnutPiecesWidth[i]} ${this.doughnutOptions.CIRCLE_WIDTH}`,
        strokeDashoffset: `${this.doughnutPiecesOffset[i]}`,
        value: this.values[i],
      });
    }

    return circlesProps;
  }

  getDoughnutOptions() {
    return this.doughnutOptions;
  }
}
