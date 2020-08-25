import Input from '../../../input/ts/Input/Input';

export default class Registration implements IRegistration {
  constructor(registrationElement: HTMLElement) {
    this.registrationElement = registrationElement;
    this.inputs = [];
    this.initFields();
  }

  private registrationElement: HTMLElement;

  private inputs: IInput[]

  private initFields() {
    const inputElements = this.registrationElement.querySelectorAll('.input');
    inputElements.forEach((inputElement) => {
      this.inputs.push(new Input(inputElement as HTMLInputElement));
    });
  }
}
