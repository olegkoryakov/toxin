import { GRADIENTS, GRADIENT_NAMES } from '../GRADIENTS';

export default class DoughnutView implements IDoughnutView {
  constructor(doughnutElement: HTMLElement) {
    this.doughnutElement = doughnutElement;
  }

  private circles!: SVGCircleElement[];

  private doughnutElement: HTMLElement;

  private getDoughnutPiece = (
    radius: number,
    cx: number,
    cy: number,
    color: string,
    strokeDasharray: string,
    strokeDashoffset: string,
    value: number,
  ) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    circle.classList.add('doughnut__circle');
    circle.style.fill = 'none';
    circle.setAttribute('r', `${radius}`);
    circle.setAttribute('cx', `${cx}`);
    circle.setAttribute('cy', `${cy}`);
    circle.dataset.value = value.toString();
    circle.dataset.color = color;
    circle.style.stroke = `url(#${color})`;
    circle.style.strokeDasharray = strokeDasharray;
    circle.style.strokeDashoffset = strokeDashoffset;

    return circle;
  }

  renderDoughnut(
    doughnutOptions: IDoughnutOptions,
    circlesProps: ICircleProp[],
  ) {
    this.circles = [];
    const {
      CX,
      CY,
      RADIUS,
      SIZE,
    } = doughnutOptions;

    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGElement;
    svgElement.classList.add('doughnut__svg');
    svgElement.innerHTML = GRADIENTS;
    svgElement.setAttribute('viewBox', `0 0 ${SIZE + 4} ${SIZE + 4}`);
    svgElement.style.width = `${SIZE + 4}px`;
    svgElement.style.height = `${SIZE + 4}px`;

    const fragment = document.createDocumentFragment();
    circlesProps.forEach(({ strokeDasharray, strokeDashoffset, value }, index) => {
      const circle = this.getDoughnutPiece(
        RADIUS,
        CX,
        CY,
        GRADIENT_NAMES[index],
        strokeDasharray,
        strokeDashoffset,
        value,
      );

      this.circles.push(circle);
      fragment.append(circle);
    });

    this.addCirclesEvents();
    svgElement.append(fragment);

    const aboutElement = this.getDoughnutAboutElement();

    this.doughnutElement.append(svgElement, aboutElement);

    const { color } = this.circles[2].dataset;
    const { value } = this.circles[2].dataset;
    this.circles[2].classList.add('doughnut__circle_hovered');
    this.setDoughnutAbout(`${value}`, `${color}`);
  }

  private getDoughnutAboutElement = () => {
    const aboutElement = document.createElement('div');
    const aboutCountElement = document.createElement('span');
    const aboutTextElement = document.createElement('span');

    aboutElement.classList.add('doughnut__about');
    aboutCountElement.classList.add('doughnut__about-count');
    aboutTextElement.classList.add('doughnut__about-text');

    aboutTextElement.textContent = 'Голосов';

    aboutElement.append(aboutCountElement, aboutTextElement);

    return aboutElement;
  }

  private setDoughnutAbout(count: string, color: string) {
    const doughnutAbout = this.doughnutElement.querySelector('.doughnut__about') as HTMLElement;
    const doughnutAboutCount = doughnutAbout.querySelector('.doughnut__about-count') as HTMLSpanElement;
    doughnutAboutCount.textContent = count.toString();
    this.setDoughnutAboutColor(color);
  }

  private setDoughnutAboutColor(color: string) {
    const doughnutAbout = this.doughnutElement.querySelector('.doughnut__about') as HTMLElement;
    const classArray = Array.from(doughnutAbout.classList);
    const classModIndex = classArray
      .findIndex((className) => className.startsWith('doughnut__about_'));
    if (classModIndex !== -1) {
      const classModifier = classArray[classModIndex];
      doughnutAbout.classList.remove(classModifier);
    }

    doughnutAbout.classList.add(`doughnut__about_${color}`);
  }

  private removeHoveredClassFromCircles() {
    this.circles.forEach((circle) => {
      if (circle.classList.contains('doughnut__circle_hovered')) {
        circle.classList.remove('doughnut__circle_hovered');
      }
    });
  }

  private addHoveredClassToCircle(circle: SVGCircleElement) {
    this.removeHoveredClassFromCircles();
    circle.classList.add('doughnut__circle_hovered');
  }

  private addCirclesEvents() {
    this.circles.forEach((circle) => {
      circle.addEventListener('mouseenter', () => {
        this.setDoughnutAbout(`${circle.dataset.value}`, `${circle.dataset.color}`);
        this.addHoveredClassToCircle(circle);
      });

      circle.addEventListener('mouseleave', () => {
      });
    });
  }
}
