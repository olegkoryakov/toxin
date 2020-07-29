import LikeButtonModel from './LikeButtonModel/LikeButtonModel';
import LikeButtonView from './LikeButtonView/LikeButtonView';
import LikeButtonPresenter from './LikeButtonPresenter/LikeButtonPresenter';

export default class LikeButton {
  constructor(likeButtonElement: HTMLElement) {
    this.init(likeButtonElement);
  }

  likeButtonModel!: ILikeButtonModel;

  likeButtonView!: ILikeButtonView;

  likeButtonPresenter!: ILikeButtonPresenter;

  init(likeButtonElement: HTMLElement) {
    const likesCountElement = likeButtonElement.querySelector('.like-button__count');
    const isLiked = likeButtonElement.classList.contains('like-button_liked');
    if (likesCountElement) {
      const likesCount = likesCountElement.textContent
        ? parseInt(likesCountElement.textContent, 10) : 0;
      this.likeButtonModel = new LikeButtonModel(
        {
          likeCount: likesCount,
          isLiked,
        },
      );
      this.likeButtonView = new LikeButtonView(likeButtonElement);
      this.likeButtonPresenter = new LikeButtonPresenter(this.likeButtonModel, this.likeButtonView);
    }
  }
}
