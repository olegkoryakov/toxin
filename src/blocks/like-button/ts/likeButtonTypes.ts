interface ILikeButtonState {
  likeCount: number;
  isLiked: boolean;
}

interface ILikeButtonModel {
  state: ILikeButtonState;
  setState(state: ILikeButtonState): void;
  getLikesCount(): number;
  getIsLikedState(): boolean;
}

interface ILikeButtonView extends IEventEmitter{
  likeButtonElement: HTMLElement;
  setLikesCount(likesCount: number): void;
  setLikedState(): void;
  setUnlikedState(): void;
  onLikeButtonClick():void;
}

interface ILikeButtonPresenter extends IEventEmitter {
  likeButtonModel: ILikeButtonModel;
  likeButtonView: ILikeButtonView;
  changeLikeState():void;
}

interface ILikeButton {
  likeButtonPresenter: ILikeButtonPresenter;
  likeButtonModel: ILikeButtonModel;
  likeButtonView: ILikeButtonView;
  init(likeButtonElement: HTMLElement): void;
}
