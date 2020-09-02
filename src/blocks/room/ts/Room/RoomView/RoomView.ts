import EventEmitter from '../../../../../ts/EventEmitter/EventEmitter';

export default class RoomView extends EventEmitter implements IRoomView {
  constructor(roomElement: HTMLElement) {
    super();
    this.roomElement = roomElement;
    this.initButtons();
    this.initRoomImgElement();
    this.initRoomPreviewDots();
  }

  private roomElement: HTMLElement;

  private roomImgElement!: HTMLImageElement;

  private roomPreviewDots!: NodeListOf<HTMLLIElement>;

  private nextButton!: HTMLButtonElement;

  private prevButton!: HTMLButtonElement;

  private initButtons() {
    this.prevButton = this.roomElement.querySelector('.room__preview-button_prev') as HTMLButtonElement;
    this.nextButton = this.roomElement.querySelector('.room__preview-button_next') as HTMLButtonElement;

    [this.prevButton, this.nextButton].forEach((button) => { button.addEventListener('click', this.onButtonClick.bind(this)); });
  }

  private initRoomImgElement() {
    this.roomImgElement = this.roomElement.querySelector('.room__preview-img') as HTMLImageElement;
  }

  private initRoomPreviewDots() {
    this.roomPreviewDots = this.roomElement.querySelectorAll('.room__preview-item') as NodeListOf<HTMLLIElement>;
    this.roomPreviewDots.forEach((dot) => { dot.addEventListener('click', this.onDotClick.bind(this)); });
  }

  private onButtonClick = ({ target }: MouseEvent) => {
    const button = target as HTMLButtonElement;
    if (button.classList.contains('room__preview-button_prev')) {
      this.emit('render-prev-photo', null);
    } else if (button.classList.contains('room__preview-button_next')) {
      this.emit('render-next-photo', null);
    }
  }

  private onDotClick({ target }: MouseEvent) {
    const dot = target as HTMLLIElement;
    const dotIndex = Array.from(this.roomPreviewDots).findIndex((d) => dot === d);
    this.emit('render-photo-by-index', dotIndex);
  }

  private hightlightPreviewDot(photoIndex:number) {
    this.roomPreviewDots.forEach((dot, index) => {
      const isDotIndexEqualPhotoIndex = index === photoIndex;
      const isDotContainHighLightClass = dot.classList.contains('room__preview-item_current');
      if (!isDotIndexEqualPhotoIndex && isDotContainHighLightClass) {
        dot.classList.remove('room__preview-item_current');
      } else if (isDotIndexEqualPhotoIndex && !isDotContainHighLightClass) {
        dot.classList.add('room__preview-item_current');
      }
    });
  }

  setPhotoProps(photoProps: IPhotoProps) {
    const { url, index } = photoProps;
    this.roomImgElement.src = url;
    this.hightlightPreviewDot(index);
  }
}
