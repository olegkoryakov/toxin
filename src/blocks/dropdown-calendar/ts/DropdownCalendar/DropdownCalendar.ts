import Dropdown from '../../../dropdown/ts/Dropdown/Dropdown';
import Calendar from '../../../calendar/ts/Calendar';
import MONTH_NAMES from '../MONTH_NAMES';

export default class DropdownCalendar extends Dropdown implements IDropdownCalendar {
  constructor(
    dropdownCalendarElement: HTMLElement,
  ) {
    super({
      dropdownElement: dropdownCalendarElement,
      openClass: 'dropdown-calendar_opened',
      closeClass: 'dropdown-calendar_closed',
    });
    this.dropdownCalendarElement = dropdownCalendarElement;
    this.initFields();
    this.addHandlers();
  }

  private applyButton!: HTMLElement;

  private resetButton!: HTMLElement;

  private inputs!: HTMLInputElement[];

  private dropdownCalendarElement!: HTMLElement;

  private calendar!: ICalendar;

  private initFields = () => {
    const inputsElements = this.dropdownCalendarElement.querySelectorAll('.dates-input__input');
    const inputs = Array
      .from(inputsElements)
      .map((inputElement) => inputElement as HTMLInputElement);
    const calendarContainer = this.dropdownCalendarElement.querySelector('.dropdown-calendar__calendar') as HTMLElement;
    const applyButton = calendarContainer.querySelector('.button_apply') as HTMLElement;
    const resetButton = calendarContainer.querySelector('.button_reset') as HTMLElement;

    let selectedDates: ISelectedDates | undefined;

    const dataSelectedDates = this.dropdownCalendarElement.dataset.selectedDates;
    if (dataSelectedDates) {
      selectedDates = JSON.parse(dataSelectedDates) as ISelectedDates;
    }


    this.inputs = inputs;
    this.calendar = new Calendar(calendarContainer, selectedDates);
    this.applyButton = applyButton;
    this.resetButton = resetButton;

    if (selectedDates) {
      const { from, to } = selectedDates;
      if (from && to) {
        this.setInputsValue(from, to);
      }
    }
  }

  private addHandlers() {
    this.applyButton.addEventListener('click', this.onApplyButtonClick.bind(this));
    this.resetButton.addEventListener('click', this.onResetButtonClick.bind(this));
  }

  private parseDate = (date: string) => {
    const correctDate = date
      .split('.')
      .map((datePiece) => (datePiece.length === 1
        ? `0${datePiece}` : datePiece));
    const dateOptions: IDateOptions = {
      day: correctDate[0],
      month: {
        number: correctDate[1],
        name: MONTH_NAMES[+correctDate[1] - 1],
      },
      year: correctDate[2],
    };

    return dateOptions;
  }

  private setInputsValue = (...dates: string[]) => {
    const [dateFrom, dateTo] = dates.map((date) => this.parseDate(date));
    const { length } = this.inputs;
    if (length === 1) {
      this.inputs[0].value = `${dateFrom.day} ${dateFrom.month.name} - ${dateTo.day} ${dateTo.month.name}`;
    } else if (length === 2) {
      this.inputs[0].value = `${dateFrom.day}.${dateFrom.month.number}.${dateFrom.year}`;
      this.inputs[1].value = `${dateTo.day}.${dateTo.month.number}.${dateTo.year}`;
    }
  }

  private onApplyButtonClick() {
    const selectedDates = this.calendar.getSelectedDates();
    if (selectedDates.from && selectedDates.to) {
      this.toggleOpened();
      this.setInputsValue(selectedDates.from, selectedDates.to);
    }
  }

  private onResetButtonClick() {
    this.inputs.forEach((input) => { input.value = ''; });
    this.calendar.resetSelectedDates();
  }
}
