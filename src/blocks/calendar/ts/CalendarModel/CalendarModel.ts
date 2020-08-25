export default class CalendarModel implements ICalendarModel {
  constructor(selectedDates: ISelectedDates) {
    this.initFields(selectedDates);
  }

  private date!: Date;

  private dateState!: ICalendarState;

  private dateProps!: IDateProps;

  private userDateState!: ICalendarState;

  private selectedDates!: ISelectedDates;

  private initFields(selectedDates: ISelectedDates) {
    this.date = new Date();
    this.dateState = {
      day: this.date.getDate(),
      month: this.date.getMonth(),
      year: this.date.getFullYear(),
    };
    this.userDateState = { ...this.dateState };
    this.selectedDates = selectedDates;

    this.dateProps = {
      maxMonth: 11,
      minMonth: 0,
    };
  }

  getUserDateState() {
    return this.userDateState;
  }

  getDateProps() {
    return this.dateProps;
  }

  incrementUserDateState() {
    this.userDateState.month += 1;

    const { maxMonth } = this.dateProps;
    if (this.userDateState.month > maxMonth) {
      this.userDateState.month = 0;
      this.userDateState.year += 1;
    }
  }

  decrementUserDateState() {
    this.userDateState.month -= 1;

    const { minMonth } = this.dateProps;
    if (this.userDateState.month < minMonth) {
      this.userDateState.month = 11;
      this.userDateState.year -= 1;
    }
  }

  resetSelectedDates() {
    this.selectedDates = {
      from: undefined,
      to: undefined,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  setTdData(tdData: ITdData) {
    const { element, date } = tdData;
    element.dataset.date = date;
  }

  // eslint-disable-next-line class-methods-use-this
  getTdData(td: HTMLTableDataCellElement) {
    const data = td.dataset.date;
    return (data as string);
  }

  isCurrentDay(td: HTMLTableDataCellElement) {
    const tdData = this.getTdData(td);
    const dateData = `${this.dateState.day}.${this.dateState.month + 1}.${this.dateState.year}`;

    if (dateData === tdData) return true;
    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  parseData(data: TDate): ICalendarState {
    const dataToParse = data.split('.').map((val) => parseInt(val, 10));
    return {
      day: dataToParse[0],
      month: dataToParse[1],
      year: dataToParse[2],
    };
  }

  isFirstDateMoreThanSecondDate(firstData: TDate, secondData: TDate) {
    const firstDate = this.parseData(firstData);
    const secondDate = this.parseData(secondData);
    let flag = false;

    if (firstDate.year > secondDate.year) {
      flag = true;
    } else if (
      (firstDate.year === secondDate.year)
      && (firstDate.month > secondDate.month)
    ) {
      flag = true;
    } else if (
      (firstDate.year === secondDate.year)
      && (firstDate.month === secondDate.month)
      && (firstDate.day > secondDate.day)
    ) {
      flag = true;
    }

    return flag;
  }

  selectDate(data: TDate) {
    if (this.selectedDates.from === undefined && this.selectedDates.to === undefined) {
      this.selectedDates.from = data;
    } else if (this.selectedDates.from !== undefined && this.selectedDates.to === undefined) {
      const dateFromData = this.selectedDates.from;
      const dateToData = data;
      if (dateFromData !== dateToData) {
        const isFirstDateMoreThanSecondDate = this.isFirstDateMoreThanSecondDate(
          dateFromData,
          dateToData,
        );
        if (isFirstDateMoreThanSecondDate) {
          const temp = this.selectedDates.from;
          this.selectedDates.from = data;
          this.selectedDates.to = temp;
        } else {
          this.selectedDates.to = data;
        }
      }
    } else if (this.selectedDates.from !== undefined && this.selectedDates.to !== undefined) {
      this.selectedDates.from = data;
      this.selectedDates.to = undefined;
    }
  }

  getSelectedDates() {
    return this.selectedDates;
  }
}
