import DEFAULT_GRADIENTS_PROPS from '../DEFAULT_GRADIENTS_PROPS';

export default class DoughnutModel implements IDoughnutModel {
  constructor(doughnutProps: Array<IDoughnutProp>) {
    this.doughnutProps = doughnutProps;
    this.initFields();
  }

  private doughnutDefaults!: IDoughnutDefaults;

  private doughnutProps: Array<IDoughnutProp>;

  private circlesProps!: Array<ICircleProps>;

  private colorThemes!: Array<IColorTheme>;

  private initFields() {
    this.setDoughnutDefaults();
    this.setCircleProps();
    this.setColorThemes();
  }

  private setDoughnutDefaults() {
    const STROKE_WIDTH = 4;
    const SIZE = 120;
    const RADIUS = (SIZE - (STROKE_WIDTH * 2)) / 2;
    const CX = (SIZE + STROKE_WIDTH) / 2;
    const CY = (SIZE + STROKE_WIDTH) / 2;
    const CIRCLE_WIDTH = 2 * Math.PI * RADIUS;
    const GAP = 2;

    this.doughnutDefaults = {
      SIZE,
      RADIUS,
      CX,
      CY,
      CIRCLE_WIDTH,
      GAP,
    };
  }

  private getDoughnutPieceWidths(totalValue: number) {
    const { CIRCLE_WIDTH } = this.doughnutDefaults;
    const values = this.doughnutProps.map(({ value }) => value);
    const doughnutPieceWidths = values
      .map((val) => {
        const value = (val / totalValue);
        const width = (CIRCLE_WIDTH * value);
        return width;
      });

    return doughnutPieceWidths;
  }

  private getDoughnutPieceOffsets(doughnutPieceWidths: Array<number>) {
    const doughnutPieceOffsets: Array<number> = [];

    const { GAP } = this.doughnutDefaults;
    doughnutPieceWidths.forEach((width, index) => {
      let offset = 0;
      if (index !== 0) {
        offset = doughnutPieceOffsets[index - 1] - doughnutPieceWidths[index - 1];
      }

      doughnutPieceOffsets.push(offset - GAP);
    });

    return doughnutPieceOffsets;
  }

  private setCircleProps() {
    this.circlesProps = [];

    const values = this.doughnutProps.map(({ value }) => value);
    const totalValue = values.reduce((accum, current) => accum + current, 0);
    const doughnutPieceWidths = this.getDoughnutPieceWidths(totalValue);
    const doughnutPieceOffsets = this.getDoughnutPieceOffsets(doughnutPieceWidths);

    const { length } = values;
    const { CIRCLE_WIDTH } = this.doughnutDefaults;
    for (let i = 0; i < length; i += 1) {
      const doughnutPieceWidth = doughnutPieceWidths[i];
      const doughnutPieceOffset = doughnutPieceOffsets[i];

      this.circlesProps.push({
        strokeDasharray: `${doughnutPieceWidth} ${CIRCLE_WIDTH}`,
        strokeDashoffset: `${doughnutPieceOffset}`,
      });
    }
  }

  private setColorThemes() {
    this.colorThemes = [];

    const createSvgGradient = (startColor: string, stopColor: string, id: string) => `
      <linearGradient id="${id}" x1="60" y1="1" x2="60" y2="121" gradientUnits="userSpaceOnUse">
        <stop stop-color="${startColor}"/>
        <stop offset="1" stop-color="${stopColor}"/>
      </linearGradient>
    `;

    const createCssGradient = (startColor: string, stopColor: string) => `
      linear-gradient(180deg, ${startColor} 0%, ${stopColor} 100%)
    `;

    const getRandomColor = () => {
      const MAX_HEX = 255;
      const getRandomHex = () => Math.round(Math.random() * MAX_HEX);
      const randomColor = `rgb(${getRandomHex()},${getRandomHex()},${getRandomHex()})`;
      return randomColor;
    };

    const values = this.doughnutProps.map(({ value }) => value);
    const valuesLength = values.length;

    for (let i = 0; i < valuesLength; i += 1) {
      const { length } = DEFAULT_GRADIENTS_PROPS;
      const isDefaultGradientPropsLengthLessThanCurrentIndex = length < i + 1;
      let id;
      let svgGradient;
      let cssGradient;
      let color;

      if (isDefaultGradientPropsLengthLessThanCurrentIndex) {
        const startColor = getRandomColor();
        const stopColor = getRandomColor();

        id = i.toString();
        svgGradient = createSvgGradient(startColor, stopColor, id);
        cssGradient = createCssGradient(startColor, stopColor);
        color = startColor;
      } else {
        const { ID, START_COLOR, STOP_COLOR } = DEFAULT_GRADIENTS_PROPS[i];
        id = ID;
        color = STOP_COLOR;
        svgGradient = createSvgGradient(START_COLOR, STOP_COLOR, ID);
        cssGradient = createCssGradient(START_COLOR, STOP_COLOR);
      }

      this.colorThemes.push({
        id,
        svgGradient,
        cssGradient,
        color,
      });
    }
  }

  getColorThemes() {
    return this.colorThemes;
  }

  getCirclesProps() {
    return this.circlesProps;
  }

  getDoughnutDefaults() {
    return this.doughnutDefaults;
  }

  getValues() {
    const values = this.doughnutProps.map(({ value }) => value);
    return values;
  }

  getNames() {
    const names = this.doughnutProps.map(({ name }) => name);
    return names;
  }
}
