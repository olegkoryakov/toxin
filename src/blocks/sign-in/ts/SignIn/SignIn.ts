import Input from '../../../input/ts/Input/Input';

export default class SignIn implements ISignIn {
  constructor(signInElement: HTMLElement) {
    this.signInElement = signInElement;
    this.inputs = [];
    this.initFields();
  }

  private signInElement: HTMLElement;

  private inputs: IInput[];

  private initFields() {
    const inputElements = this.signInElement.querySelectorAll('.input');
    inputElements.forEach((inputElement) => {
      this.inputs.push(new Input(inputElement as HTMLInputElement));
    });
  }
}
