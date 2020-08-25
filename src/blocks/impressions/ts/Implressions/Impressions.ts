import Doughnut from '../../../doughnut/ts/Doughnut/Doughnut';

export default class Impressions implements IImpressions {
  constructor(impressionsElement: HTMLElement) {
    this.impressionsElement = impressionsElement;
    this.initFields();
  }

  private impressionsElement: HTMLElement;

  private doughnut!: IDoughnut;

  private initFields() {
    const doughnutElement = this.impressionsElement.querySelector('.doughnut') as HTMLElement;
    this.doughnut = new Doughnut(doughnutElement, 260, 520, 260, 0);
  }
}
