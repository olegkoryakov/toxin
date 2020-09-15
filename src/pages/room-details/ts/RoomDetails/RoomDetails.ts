import AboutRoom from '../../../../blocks/about-room/ts/AboutRoom/AboutRoom';
import LikeButton from '../../../../blocks/like-button/ts/LikeButton';
import Doughnut from '../../../../blocks/doughnut/ts/Doughnut/Doughnut';

class RoomDetails implements IRoomDetails {
  constructor(roomDetailsElement: HTMLElement) {
    this.roomDetailsElement = roomDetailsElement;
    this.likeButtons = [];
    this.initFields();
  }

  private roomDetailsElement: HTMLElement;

  private likeButtons: ILikeButton[];

  private aboutRoom!: IAboutRoom;

  private doughnut!: IDoughnut;

  private initFields() {
    const likeButtonElements = this.roomDetailsElement.querySelectorAll('.like-button');
    const doughnutElement = this.roomDetailsElement.querySelector('.doughnut');
    const aboutRoomElement = this.roomDetailsElement.querySelector('.about-room');

    this.aboutRoom = new AboutRoom(aboutRoomElement as HTMLElement);
    this.doughnut = new Doughnut(doughnutElement as HTMLElement);
    likeButtonElements.forEach((likeButtonElement) => {
      this.likeButtons.push(new LikeButton(likeButtonElement as HTMLElement));
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const roomDetailsElement = document.querySelector('.room-details');
  if (roomDetailsElement instanceof HTMLElement) {
    // eslint-disable-next-line no-unused-vars
    const roomDetails = new RoomDetails(roomDetailsElement);
  }
});
