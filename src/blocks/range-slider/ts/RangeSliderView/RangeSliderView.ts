import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class RangeSliderView extends EventEmitter {
  constructor(rangeSliderElement: HTMLElement) {
    super();
    this.rangeSliderElement = rangeSliderElement;
    this.initFields();
    this.addHandlers();
  }

  private rangeSliderElement: HTMLElement;

  private priceElement!: HTMLElement;

  private rangeLine!: HTMLElement;

  private line!: HTMLElement;

  private thumbFrom!: HTMLElement;

  private thumbTo!: HTMLElement;

  private initFields() {
    this.priceElement = (this.rangeSliderElement.querySelector('.range-slider__price') as HTMLElement);
    this.line = (this.rangeSliderElement.querySelector('.range-slider__line') as HTMLElement);
    this.rangeLine = (this.line.querySelector('.range-slider__range-line') as HTMLElement);
    this.thumbFrom = (this.line.querySelector('.range-slider__thumb_from') as HTMLElement);
    this.thumbTo = (this.line.querySelector('.range-slider__thumb_to') as HTMLElement);
  }

  private addHandlers() {
    const thumbs = [this.thumbFrom, this.thumbTo];
    thumbs.forEach((thumb) => {
      thumb.addEventListener('mousedown', this.onThumbMouseDown.bind(this));
    });
  }

  private getThumbModifier = (thumb: HTMLElement) => {
    const classArray = Array.from(thumb.classList);
    const classModIndex = classArray
      .findIndex((className) => className.startsWith('range-slider__thumb_'));
    const modifier = classArray[classModIndex].split('range-slider__thumb_')[1];
    return modifier;
  }

  private onThumbMouseDown(downE: MouseEvent) {
    const thumb = (downE.currentTarget as HTMLElement);
    const modifier = this.getThumbModifier(thumb);
    const zIndex = parseInt(getComputedStyle(thumb).getPropertyValue('z-index'), 10);
    const { left, width } = this.rangeSliderElement.getBoundingClientRect();
    const maxStartCoord = left + width;
    const minStartCoord = left;
    const sliderWidth = this.getSliderLineWidth();

    thumb.style.zIndex = (zIndex + 1).toString();
    let startCoord = downE.clientX;

    const onMouseMove = (moveE: MouseEvent) => {
      const shift = startCoord - moveE.clientX;
      let newCoord = thumb.offsetLeft - shift;

      startCoord = moveE.clientX;
      if (startCoord > maxStartCoord) startCoord = maxStartCoord;
      else if (startCoord < minStartCoord) startCoord = minStartCoord;

      if (newCoord > sliderWidth) newCoord = sliderWidth;
      else if (newCoord < 0) newCoord = 0;

      thumb.style.left = `${newCoord}px`;
      this.resizeRangeLine();
      this.emit('change-current-value', { coord: newCoord, modifier });
    };

    const bindedOnMouseMove = onMouseMove.bind(this);

    const onMouseUp = () => {
      thumb.style.zIndex = zIndex.toString();

      document.removeEventListener('mousemove', bindedOnMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', bindedOnMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  setPriceElementValues(currentValue: ICurrentValue, prefix: string) {
    const regExp = /\d{1,3}(?=(\d{3})+(?!\d))/g;
    const charToReplace = '$& ';
    const { to, from } = currentValue;
    const toString = to.toString().replace(regExp, charToReplace);
    const fromString = from.toString().replace(regExp, charToReplace);
    this.priceElement.textContent = `${fromString}${prefix} - ${toString}${prefix}`;
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
