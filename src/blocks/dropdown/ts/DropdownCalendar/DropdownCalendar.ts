import Calendar from '../../../calendar/ts/Calendar';

export default class DropdownCalendar implements IDropdownCalendar {
  constructor(
    dropdownCalendarElement: HTMLElement,
    selectedDates: ISelectedDates = {
      from: undefined,
      to: undefined,
    },
  ) {
    this.dropdownCalendarElement = dropdownCalendarElement;
    this.init(selectedDates);
  }

  private dropdownCalendarElement: HTMLElement;

  private inputs!: NodeListOf<Element>;

  private calendar!: ICalendar;

  private setInputsValue(dateFrom: TDate, dateTo: TDate) {
    const datesArray = [
      dateFrom,
      dateTo,
    ];
    const correctDatesArray = datesArray.map((date) => this.parseDate(date));
    if (this.inputs.length === 2) {
      this.inputs.forEach((input, index) => {
        const myInput = input;
        (myInput as HTMLInputElement).value = correctDatesArray[index];
      });
    } else if (this.inputs.length === 1) {
      const message = `${correctDatesArray[0]} - ${correctDatesArray[1]}`;
      (this.inputs[0] as HTMLInputElement).value = message;
    }
  }

  private resetInputsValue() {
    this.inputs.forEach((input) => {
      const myInput = input;
      (myInput as HTMLInputElement).value = '';
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private parseDate(date: TDate) {
    const correctDate = date
      .split('.')
      .map((datePiece) => {
        let correctDatePiece = datePiece;
        const { length } = correctDatePiece;
        if (length === 1) correctDatePiece = `0${datePiece}`;
        if (length === 4) correctDatePiece = correctDatePiece.slice(2);
        return correctDatePiece;
      })
      .join('.');

    return correctDate;
  }

  private onApplyButtonClick() {
    const { from, to } = this.calendar.getSelectedDates();

    if (from && to) this.setInputsValue(from, to);
  }

  private onResetButtonClick() {
    this.resetInputsValue();
  }

  private init(selectedDates: ISelectedDates) {
    this.inputs = this.dropdownCalendarElement.querySelectorAll('.input');
    const calendarWidget = this.dropdownCalendarElement.querySelector('.calendar');
    this.calendar = new Calendar((calendarWidget as HTMLElement), selectedDates);

    const applyButton = this.dropdownCalendarElement.querySelector('.button_apply');
    const resetButton = this.dropdownCalendarElement.querySelector('.button_reset');
    if (applyButton && resetButton) {
      applyButton.addEventListener('click', this.onApplyButtonClick.bind(this));
      resetButton.addEventListener('click', this.onResetButtonClick.bind(this));
    }
  }
}
