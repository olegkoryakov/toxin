import NumberSearch from '../../../../blocks/number-search/ts/NumberSearch/NumberSearch';
import AboutRoom from '../../../../blocks/about-room/ts/AboutRoom/AboutRoom';
import Registration from '../../../../blocks/registration/ts/Registration/Registration';
import SignIn from '../../../../blocks/sign-in/ts/SignIn/SignIn';
import IMG_URLS from './IMG_URLS';
import Room from '../../../../blocks/room/ts/Room/Room';


class Cards implements ICards {
  constructor(cardsElement: HTMLElement) {
    this.cardsElement = cardsElement;
    this.rooms = [];
    this.initFields();
  }

  private cardsElement!: HTMLElement;

  private numberSearch!: INumberSearch;

  private registration!: IRegistration;

  private signIn!: ISignIn;

  private aboutRoom!: IAboutRoom;

  private rooms: IRoom[];

  private initFields() {
    const signInElement = this.cardsElement.querySelector('.sign-in');
    const aboutRoomElement = this.cardsElement.querySelector('.about-room');
    const numberSearchElement = this.cardsElement.querySelector('.number-search');
    const registrationElement = this.cardsElement.querySelector('.registration');
    const roomElements = this.cardsElement.querySelectorAll('.room');

    roomElements.forEach((roomElement, index) => {
      this.rooms.push(new Room(roomElement as HTMLElement, ...IMG_URLS[index]));
    });
    this.numberSearch = new NumberSearch(numberSearchElement as HTMLElement);
    this.aboutRoom = new AboutRoom(aboutRoomElement as HTMLElement);
    this.registration = new Registration(registrationElement as HTMLElement);
    this.signIn = new SignIn(signInElement as HTMLElement);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const cardsElement = document.querySelector('.cards');
  if (cardsElement instanceof HTMLElement) {
    // eslint-disable-next-line no-unused-vars
    const cards = new Cards(cardsElement);
  }
});
