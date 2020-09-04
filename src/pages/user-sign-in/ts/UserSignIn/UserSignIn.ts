import SignIn from '../../../../blocks/sign-in/ts/SignIn/SignIn';

class UserSignIn implements IUserSignIn {
  constructor(userSignIn: HTMLElement) {
    this.userSignIn = userSignIn;
    this.initFields();
  }

  private userSignIn: HTMLElement;

  private signIn!: ISignIn;

  private initFields() {
    const signInElement = document.querySelector('.sign-in');
    this.signIn = new SignIn(signInElement as HTMLElement);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const userSignInElement = document.querySelector('.user-sign-in');
  if (userSignInElement instanceof HTMLElement) {
    // eslint-disable-next-line no-unused-vars
    const userSignIn = new UserSignIn(userSignInElement);
  }
});
