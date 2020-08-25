import RoomModel from './RoomModel/RoomModel';
import RoomView from './RoomView/RoomView';
import RoomPresenter from './RoomPresenter/RoomPresenter';

export default class Room implements IRoom {
  constructor(roomElement: HTMLElement, ...photoUrls: string[]) {
    this.roomElement = roomElement;
    this.init(...photoUrls);
  }

  private roomElement: HTMLElement;

  private init = (...photoUrls: string[]) => {
    const roomModel = new RoomModel(...photoUrls);
    const roomView = new RoomView(this.roomElement);
    // eslint-disable-next-line no-unused-vars
    const roomPresenter = new RoomPresenter(roomModel, roomView);
  }
}
