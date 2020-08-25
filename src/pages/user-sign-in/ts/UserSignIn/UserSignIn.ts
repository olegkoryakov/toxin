import SignIn from '../../../../blocks/sign-in/ts/SignIn/SignIn';

class UserSignIn implements IUserSignIn {
  constructor(userSignIn: HTMLElement) {
    this.userSignIn = userSignIn;
  }

  private userSignIn: HTMLElement;

  private signIn!: ISignIn;

  private initFields() {
    const registrationElement = document.querySelector('.registration');
    this.signIn = new SignIn(registrationElement as HTMLElement);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const userSignInElement = document.querySelector('.user-sign-in');
  if (userSignInElement instanceof HTMLElement) {
    // eslint-disable-next-line no-unused-vars
    const userSignIn = new UserSignIn(userSignInElement);
  }
});
