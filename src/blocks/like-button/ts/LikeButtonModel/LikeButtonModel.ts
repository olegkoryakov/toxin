import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class LikeButtonModel extends EventEmitter {
  constructor(state: ILikeButtonState) {
    super();
    this.state = state;
  }

  state: ILikeButtonState;

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
