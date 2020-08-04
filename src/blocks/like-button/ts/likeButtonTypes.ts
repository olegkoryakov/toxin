interface ILikeButtonState {
  likeCount: number;
  isLiked: boolean;
}

interface ILikeButtonModel {
  setState(state: ILikeButtonState): void;
  getLikesCount(): number;
  getIsLikedState(): boolean;
}

interface ILikeButtonView extends IEventEmitter{
  setLikesCount(likesCount: number): void;
  setLikedState(): void;
  setUnlikedState(): void;
}

interface ILikeButtonPresenter{
}

interface ILikeButton {
}
