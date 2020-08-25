import NumberSearch from '../../../../blocks/number-search/ts/NumberSearch/NumberSearch';

class Index implements IIndex {
  constructor(indexPage: HTMLElement) {
    this.indexPage = indexPage;
    this.initFields();
  }

  private indexPage: HTMLElement;

  private numberSearch!: INumberSearch;

  private initFields() {
    const numberSearchElement = this.indexPage.querySelector('.number-search') as HTMLElement;

    this.numberSearch = new NumberSearch(numberSearchElement);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const indexPageElement = document.querySelector('.index');
  if (indexPageElement instanceof HTMLElement) {
    // eslint-disable-next-line no-unused-vars
    const index = new Index(indexPageElement);
  }
});
