import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class RangeSliderView extends EventEmitter {
  constructor(rangeSliderElement: HTMLElement) {
    super();
    this.priceElement = (rangeSliderElement.querySelector('.range-slider__price') as HTMLElement);
    this.line = (rangeSliderElement.querySelector('.range-slider__line') as HTMLElement);
    this.rangeLine = (this.line.querySelector('.range-slider__range-line') as HTMLElement);
    this.thumbFrom = (this.line.querySelector('.range-slider__thumb--from') as HTMLElement);
    this.thumbTo = (this.line.querySelector('.range-slider__thumb--to') as HTMLElement);

    this.addHandlers();
  }

  private priceElement: HTMLElement;

  private rangeLine: HTMLElement;

  private line: HTMLElement;

  private thumbFrom: HTMLElement;

  private thumbTo: HTMLElement;

  private addHandlers() {
    const thumbs = [this.thumbFrom, this.thumbTo];
    thumbs.forEach((thumb) => {
      thumb.addEventListener('mousedown', this.onThumbMouseDown.bind(this));
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private getThumbModifier(thumb: HTMLElement) {
    const classArray = Array.from(thumb.classList);
    const classModIndex = classArray
      .findIndex((className) => className.startsWith('range-slider__thumb--'));
    const modifier = classArray[classModIndex].split('--')[1];
    return modifier;
  }

  private onThumbMouseDown(downE: MouseEvent) {
    const thumb = (downE.currentTarget as HTMLElement);
    const modifier = this.getThumbModifier(thumb);
    const zIndex = parseInt((thumb.getAttribute('z-index') as string), 10);
    const width = this.getSliderLineWidth();

    thumb.setAttribute('user-select', 'none');
    thumb.setAttribute('z-index', (zIndex + 1).toString());
    let startCoord = downE.clientX;

    const onMouseMove = (moveE: MouseEvent) => {
      const shift = startCoord - moveE.clientX;
      let newCoord = thumb.offsetLeft - shift;
      startCoord = moveE.clientX;

      if (newCoord > width) newCoord = width;
      else if (newCoord < 0) newCoord = 0;

      thumb.style.left = `${newCoord}px`;
      this.resizeRangeLine();
      this.emit('change-current-value', { coord: newCoord, modifier });
    };

    const bindedOnMouseMove = onMouseMove.bind(this);

    const onMouseUp = () => {
      thumb.setAttribute('z-index', zIndex.toString());
      thumb.setAttribute('user-select', '');

      document.removeEventListener('mousemove', bindedOnMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', bindedOnMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  setPriceElementValues(currentValue: ICurrentValue, prefix: string) {
    this.priceElement.textContent = `${currentValue.from}${prefix} - ${currentValue.to}${prefix}`;
  }

  setThumbCoord(modifier: string, coord: number) {
    let thumb = this.thumbFrom;
    if (modifier === 'to') {
      thumb = this.thumbTo;
    }

    thumb.style.left = `${coord}px`;
  }

  getSliderLineWidth() {
    const sliderLineWidth = this.line.getBoundingClientRect().width;
    const thumbWidth = this.thumbFrom.getBoundingClientRect().width;

    return sliderLineWidth - thumbWidth;
  }

  resizeRangeLine() {
    const thumbs = [this.thumbFrom, this.thumbTo];
    const thumbsCoords = thumbs
      .map((thumb) => thumb.offsetLeft)
      .sort((coordA, coordB) => coordB - coordA);
    const thumbGap = this.thumbFrom.getBoundingClientRect().width / 2;
    const rangeLineWidth = thumbsCoords.reduce((accum, curr) => accum - curr);
    const rangeLineStartCoord = thumbsCoords[thumbsCoords.length - 1];

    this.rangeLine.style.width = `${rangeLineWidth}px`;
    this.rangeLine.style.left = `${rangeLineStartCoord + thumbGap}px`;
  }
}