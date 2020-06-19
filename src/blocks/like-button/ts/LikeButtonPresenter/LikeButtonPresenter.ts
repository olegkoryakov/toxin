import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class LikeButtonPresenter extends EventEmitter implements ILikeButtonPresenter {
  constructor(likeButtonModel: ILikeButtonModel, likeButtonView: ILikeButtonView) {
    super();
    this.likeButtonModel = likeButtonModel;
    this.likeButtonView = likeButtonView;
    this.likeButtonView.on('change-like-state', this.changeLikeState.bind(this));
  }

  likeButtonModel: ILikeButtonModel;

  likeButtonView: ILikeButtonView;

  changeLikeState() {
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
