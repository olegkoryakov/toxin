import bind from '../../../../../node_modules/bind-decorator/index';

export default class LikeButtonPresenter implements ILikeButtonPresenter {
  constructor(likeButtonModel: ILikeButtonModel, likeButtonView: ILikeButtonView) {
    this.likeButtonModel = likeButtonModel;
    this.likeButtonView = likeButtonView;

    this.addViewHandler();
  }

  likeButtonModel: ILikeButtonModel;

  likeButtonView: ILikeButtonView;

  private addViewHandler() {
    this.likeButtonView.on('change-like-state', this.changeLikeState);
  }

  @bind
  private changeLikeState() {
    let likeCount = this.likeButtonModel.getLikesCount();
    const isLiked = this.likeButtonModel.getIsLikedState();

    if (isLiked) {
      likeCount -= 1;
      this.likeButtonView.setUnlikedState();
      this.likeButtonView.setLikesCount(likeCount);
    } else {
      likeCount += 1;
      this.likeButtonView.setLikedState();
      this.likeButtonView.setLikesCount(likeCount);
    }

    this.likeButtonModel.setState({ isLiked: !isLiked, likeCount });
  }
}
