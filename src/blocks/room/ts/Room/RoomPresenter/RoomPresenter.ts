import bind from '../../../../../../node_modules/bind-decorator/index';

export default class RoomPresenter implements IRoomPresenter {
  constructor(
    roomModel: IRoomModel,
    roomView: IRoomView,
  ) {
    this.roomModel = roomModel;
    this.roomView = roomView;
    this.addRoomViewHandlers();
  }

  private roomModel: IRoomModel;

  private roomView: IRoomView;

  private addRoomViewHandlers() {
    this.roomView.on('render-next-photo', this.renderNextPhoto);
    this.roomView.on('render-prev-photo', this.renderPrevPhoto);
    this.roomView.on('render-photo-by-index', this.renderPhotoByIndex);
  }

  @bind
  private renderNextPhoto() {
    const nextPhotoProps = this.roomModel.getNextPhotoProps();
    this.roomView.setPhotoProps(nextPhotoProps);
  }

  @bind
  private renderPrevPhoto() {
    const prevPhotoProps = this.roomModel.getPrevPhotoProps();
    this.roomView.setPhotoProps(prevPhotoProps);
  }

  @bind
  private renderPhotoByIndex(index: number) {
    const url = this.roomModel.getPhotoUrlByIndex(index);
    this.roomView.setPhotoProps({ index, url });
  }
}
