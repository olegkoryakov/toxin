export default class LikeButtonModel {
  constructor(state: ILikeButtonState) {
    this.state = state;
  }

  private state: ILikeButtonState;

  setState(state: ILikeButtonState) {
    this.state = state;
  }

  getLikesCount() {
    return this.state.likeCount;
  }

  getIsLikedState() {
    return this.state.isLiked;
  }
}
