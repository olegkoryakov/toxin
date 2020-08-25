interface IPhotoProps {
  url: string,
  index: number,
}

interface IRoomModel {
  getNextPhotoProps(): IPhotoProps,
  getPrevPhotoProps(): IPhotoProps,
}

interface IRoomView extends IEventEmitter {
  setPhotoProps(photoProps: IPhotoProps): void,
}

interface IRoomPresenter {

}

interface IRoom {

}
