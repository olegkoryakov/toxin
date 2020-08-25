export default class GoodsInput implements IGoodsInput {
  constructor(inputElement: HTMLInputElement) {
    this.inputElement = inputElement;
  }

  private inputElement: HTMLInputElement;

  toggleHightlight() {
    if (this.inputElement.classList.contains('goods-input__input_hightlight')) {
      this.inputElement.classList.remove('goods-input__input_hightlight');
    } else {
      this.inputElement.classList.add('goods-input__input_hightlight');
    }
  }
}
