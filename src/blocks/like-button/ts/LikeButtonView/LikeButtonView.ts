import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class LikeButtonView extends EventEmitter implements ILikeButtonView {
  constructor(likeButtonElement: HTMLElement) {
    super();
    this.likeButtonElement = likeButtonElement;

    this.addLikeButtonHandler();
  }

  private likeButtonElement: HTMLElement;

  private addLikeButtonHandler() {
    this.likeButtonElement.addEventListener('click', this.onLikeButtonClick.bind(this));
  }

  private onLikeButtonClick() {
    this.emit('change-like-state', undefined);
  }

  setLikesCount(likesCount: number) {
    const likesCountElement = this.likeButtonElement.querySelector('.like-button__count');
    if (likesCountElement) likesCountElement.textContent = likesCount.toString();
  }

  setLikedState() {
    if (!(this.likeButtonElement.classList.contains('like-button_liked'))) {
      this.likeButtonElement.classList.add('like-button_liked');
    }
  }

  setUnlikedState() {
    if (this.likeButtonElement.classList.contains('like-button_liked')) {
      this.likeButtonElement.classList.remove('like-button_liked');
    }
  }
}
