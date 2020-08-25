import Registration from '../../../../blocks/registration/ts/Registration/Registration';

class UserRegistration implements IUserRegistration {
  constructor(userRegistration: HTMLElement) {
    this.userRegistration = userRegistration;
    this.initFields();
  }

  private userRegistration: HTMLElement;

  private registration!: IRegistration;

  private initFields() {
    const registrationElement = document.querySelector('.registration');
    this.registration = new Registration(registrationElement as HTMLElement);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const userRegistrationElement = document.querySelector('.user-registration');
  if (userRegistrationElement instanceof HTMLElement) {
    // eslint-disable-next-line no-unused-vars
    const userRegistration = new UserRegistration(userRegistrationElement);
  }
});
