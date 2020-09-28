import bind from '../../../../../../node_modules/bind-decorator/index';
import EventEmitter from '../../../../../ts/EventEmitter/EventEmitter';

export default class DoughnutView extends EventEmitter implements IDoughnutView {
  constructor(doughnutElement: HTMLElement) {
    super();
    this.doughnutElement = doughnutElement;
    this.initFields();
  }

  private circles!: SVGCircleElement[];

  private doughnutAboutElement!: HTMLElement;

  private doughnutAboutCountElement!: HTMLElement;

  private doughnutContentElement!:HTMLElement;

  private doughnutElement: HTMLElement;

  private initFields() {
    this.initDoughnutContentElement();
    this.initDoughnutAboutElements();
  }

  private addHandlers() {
    this.addCirclesHandlers();
  }

  private initDoughnutContentElement() {
    this.doughnutContentElement = document.createElement('div');
    this.doughnutContentElement.classList.add('doughnut__content');

    this.doughnutElement.append(this.doughnutContentElement);
  }

  private initDoughnutAboutElements() {
    const aboutElement = document.createElement('div');
    const aboutCountElement = document.createElement('span');
    const aboutTextElement = document.createElement('span');

    aboutElement.classList.add('doughnut__about');
    aboutCountElement.classList.add('doughnut__about-count');
    aboutTextElement.classList.add('doughnut__about-text');

    aboutCountElement.textContent = '0';
    aboutTextElement.textContent = 'Голосов';

    aboutElement.append(aboutCountElement, aboutTextElement);
    this.doughnutAboutElement = aboutElement;
    this.doughnutAboutCountElement = aboutCountElement;
  }

  private getDoughnutPiece = (
    radius: number,
    cx: number,
    cy: number,
    gradientId: string,
    strokeDasharray: string,
    strokeDashoffset: string,
  ) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    circle.classList.add('doughnut__circle');
    circle.style.fill = 'none';
    circle.setAttribute('r', `${radius}`);
    circle.setAttribute('cx', `${cx}`);
    circle.setAttribute('cy', `${cy}`);
    circle.style.stroke = `url(#${gradientId})`;
    circle.style.strokeDasharray = strokeDasharray;
    circle.style.strokeDashoffset = strokeDashoffset;

    return circle;
  }

  @bind
  private onCircleMouseEnter({ target }: MouseEvent) {
    const circle = target as SVGCircleElement;
    const circleIndex = this.circles.findIndex((c) => c === circle);
    if (circleIndex !== -1) {
      this.highlightCircleByIndex(circleIndex);
      this.emit('set-about-props-by-index', circleIndex);
    }
  }

  private addCirclesHandlers() {
    this.circles.forEach((circle) => {
      circle.addEventListener('mouseenter', this.onCircleMouseEnter);
    });
  }

  private highlightCircleByIndex(index: number) {
    const HOVER_CLASS = 'doughnut__circle_hovered';
    this.circles.forEach((circle) => circle.classList.remove(HOVER_CLASS));
    this.circles[index].classList.add(HOVER_CLASS);
  }

  setAboutProps(color: string, value: string) {
    this.doughnutAboutElement.style.color = color;
    this.doughnutAboutCountElement.textContent = value;
  }

  renderList(names: Array<string>, cssGradients: Array<string>) {
    const fragment = document.createDocumentFragment();
    const uList = document.createElement('ul');

    uList.classList.add('doughnut__legend-list');
    names.forEach((name, index) => {
      const lItem = document.createElement('li');
      const lItemFeature = document.createElement('div');
      const lItemText = document.createElement('span');

      lItem.classList.add('doughnut__legend-item');
      lItemFeature.classList.add('doughnut__legend-feature');
      lItemText.classList.add('doughnut__legend-text');

      lItemText.textContent = name;
      lItemFeature.style.backgroundImage = cssGradients[index];

      lItem.append(lItemFeature, lItemText);
      uList.append(lItem);
    });
    fragment.append(uList);
    this.doughnutContentElement.append(fragment);
  }

  private highlightDefaultCircle() {
    const DEFAULT_CIRCLE_INDEX = 2;
    this.highlightCircleByIndex(DEFAULT_CIRCLE_INDEX);
    this.emit('set-about-props-by-index', DEFAULT_CIRCLE_INDEX);
  }

  renderDoughnut(
    doughnutDefaults: IDoughnutDefaults,
    circlesProps: Array<ICircleProps>,
    svgGradients: string,
    svgGradientsIds: Array<string>,
  ) {
    this.circles = [];
    const {
      CX,
      CY,
      RADIUS,
      SIZE,
    } = doughnutDefaults;
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGElement;
    svgElement.classList.add('doughnut__svg');
    svgElement.innerHTML = svgGradients;
    svgElement.setAttribute('viewBox', `0 0 ${SIZE + 4} ${SIZE + 4}`);
    svgElement.style.width = `${SIZE + 4}px`;
    svgElement.style.height = `${SIZE + 4}px`;

    const fragment = document.createDocumentFragment();
    circlesProps.forEach(({ strokeDasharray, strokeDashoffset }, index) => {
      const circle = this.getDoughnutPiece(
        RADIUS,
        CX,
        CY,
        svgGradientsIds[index],
        strokeDasharray,
        strokeDashoffset,
      );

      this.circles.push(circle);
      fragment.append(circle);
    });
    svgElement.append(fragment);


    const doughnutDiagramWrapper = document.createElement('div');
    doughnutDiagramWrapper.classList.add('doughnut__diagram-wrapper');

    doughnutDiagramWrapper.append(svgElement, this.doughnutAboutElement);
    this.doughnutContentElement.append(doughnutDiagramWrapper);

    this.addHandlers();
    this.highlightDefaultCircle();
  }
}
