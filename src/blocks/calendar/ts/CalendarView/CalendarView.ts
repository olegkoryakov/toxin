import * as helpers from '../helpers/helpers';
import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class CalendarView extends EventEmitter implements ICalendarView {
  constructor(calendarWidget: HTMLElement) {
    super();
    this.calendarWidget = calendarWidget;
    this.nextMonthButton = calendarWidget.querySelector('.calendar__button.calendar__button--next');
    this.prevMonthButton = calendarWidget.querySelector('.calendar__button.calendar__button--prev');
    this.applyButton = calendarWidget.querySelector('.calendar__controls-apply-button');
    this.resetButton = calendarWidget.querySelector('.calendar__controls-reset-button');
    this.addHandlers();
  }

  private calendarWidget: HTMLElement;

  private applyButton: HTMLElement | null;

  private resetButton: HTMLElement | null;

  private nextMonthButton: HTMLElement | null;

  private prevMonthButton: HTMLElement | null;

  private onNextMonthButtonClick() {
    this.emit('render-next-month', null);
  }

  private onPrevMonthButtonClick() {
    this.emit('render-prev-month', null);
  }

  private onResetButtonClick() {
    this.emit('reset', null);
  }

  private onApplyButtonClick() {
    this.emit('apply', null);
  }

  setInputsValue(dateFrom: ICalendarState, dateTo: ICalendarState) {
    const parseDateKey = (dateKey: number): string => {
      let value = dateKey.toString();
      switch (value.length) {
        case 1:
          value = `0${value}`;
          break;
        case 4:
          value = value.slice(2);
          break;
        default:
          break;
      }
      return value;
    };

    const dateObjToString = (date: ICalendarState): string => `${parseDateKey(date.day)}.${parseDateKey(date.month)}.${parseDateKey(date.year)}`;
    const dateFromString = dateObjToString(dateFrom);
    const dateToString = dateObjToString(dateTo);

    const inputs = this.calendarWidget.querySelectorAll('.input');

    if (inputs.length === 2) {
      (inputs[0] as HTMLInputElement).value = dateFromString;
      (inputs[1] as HTMLInputElement).value = dateToString;
    } else {
      (inputs[0] as HTMLInputElement).value = `${dateFromString} - ${dateToString}`;
    }
  }

  resetInputsValues() {
    const inputs = this.calendarWidget.querySelectorAll('.input');
    inputs.forEach((input) => {
      // eslint-disable-next-line no-param-reassign
      (input as HTMLInputElement).value = '';
    });
  }

  private onCalendarTableClick(clickE: MouseEvent) {
    const td = clickE.target;
    if (td instanceof HTMLElement && td.classList.contains('calendar__td')) {
      this.emit('select-date', (td as HTMLTableDataCellElement));
    }
  }

  private addHandlers() {
    const calendarTable = this.calendarWidget.querySelector('.calendar__table');

    if (calendarTable) {
      (calendarTable as HTMLElement).addEventListener('click', this.onCalendarTableClick.bind(this));
    }
    if (this.applyButton && this.resetButton) {
      this.applyButton.addEventListener('click', this.onApplyButtonClick.bind(this));
      this.resetButton.addEventListener('click', this.onResetButtonClick.bind(this));
    }
    if (this.nextMonthButton && this.prevMonthButton) {
      this.nextMonthButton.addEventListener('click', this.onNextMonthButtonClick.bind(this));
      this.prevMonthButton.addEventListener('click', this.onPrevMonthButtonClick.bind(this));
    }
  }

  getSelectedElementsIndex(
    selectedElementFirst: Element | null,
    selectedElementLast: Element | null,
  ) {
    const tds = Array.from(this.calendarWidget.querySelectorAll('.calendar__td'));

    const getIndex = (element: Element) => tds.findIndex((td) => td === element);

    const selectedElementFirstIndex = selectedElementFirst
      ? getIndex(selectedElementFirst) : 0;
    const selectedElementLastIndex = selectedElementLast
      ? getIndex(selectedElementLast) : tds.length - 1;

    return {
      from: selectedElementFirstIndex,
      to: selectedElementLastIndex,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  setCurrentDayClass(td: HTMLTableDataCellElement) {
    td.classList.add('calendar__td--current-day');
  }

  // eslint-disable-next-line class-methods-use-this
  setSelectedClass(td: HTMLTableDataCellElement, modifierPostfix: TModifierPostfix) {
    td.classList.add('calendar__td', 'calendar__td--selected', `calendar__td--selected-${modifierPostfix}`);
  }

  removeSelectedDates() {
    const selectedDates = this.calendarWidget.querySelectorAll('.calendar__td--selected');
    selectedDates.forEach((selectedDate) => {
      selectedDate.classList.remove('calendar__td--selected', 'calendar__td--selected-first', 'calendar__td--selected-last');
    });
  }

  renderInterval(indexFrom: number, indexTo: number) {
    let indexFromValue = indexFrom;
    let indexToValue = indexTo;
    const tds = this.calendarWidget.querySelectorAll('.calendar__td');
    if (tds[indexFromValue].classList.contains('calendar__td--selected-first')) indexFromValue += 1;
    if (!(tds[indexToValue].classList.contains('calendar__td--selected-last'))) indexToValue += 1;
    for (let i = indexFromValue; i < indexToValue; i += 1) {
      tds[i].classList.add('calendar__td--interval');
    }
  }

  removeInterval() {
    const intervalTds = this.calendarWidget.querySelectorAll('.calendar__td--interval');
    intervalTds.forEach((td) => td.classList.remove('calendar__td--interval'));
  }

  getTdByData(data: TDate) {
    const td = this.calendarWidget.querySelector(`.calendar__td[data-date="${data}"]`);
    return td;
  }

  renderMonth(year: number, month: number) {
    const calendarTitle = this.calendarWidget.querySelector('.calendar__month');
    const calendarTable = this.calendarWidget.querySelector('.calendar__table');

    if (calendarTable && calendarTitle) {
      calendarTable.innerHTML = '';

      const date = new Date(year, month);

      calendarTitle.textContent = `${helpers.getMonthName(date.getMonth() + 1)} ${date.getFullYear()}`;
      calendarTable.append(helpers.createHeadingTr());

      let tr: HTMLTableRowElement;
      let td: HTMLTableDataCellElement;

      // Render days from prev month
      const firstMonthDay = helpers.getWeekDayNumber(date.getDay());
      if (firstMonthDay !== 0) {
        tr = helpers.createTr();
        const prevDate = new Date(date.getFullYear(), date.getMonth(), 0);
        const prevMonthLastNum = prevDate.getDate();
        for (let i = firstMonthDay; i > 0; i -= 1) {
          prevDate.setDate(prevMonthLastNum - i + 1);
          td = helpers.createTd(prevDate.getDate(), false);
          const tdData: ITdData = {
            element: td,
            date: `${prevDate.getDate()}.${prevDate.getMonth() + 1}.${prevDate.getFullYear()}`,
          };
          this.emit('set-data', tdData);
          tr.append(td);
        }
        calendarTable.append(tr);
      }

      // Render current month days
      const monthFlag = date.getMonth();
      while (date.getMonth() === monthFlag) {
        const currentMonthDayNum = date.getDate();
        // if ponedel`nik, create new tr
        if (helpers.getWeekDayNumber(date.getDay()) === 0) {
          tr = helpers.createTr();
          calendarTable.append(tr);
        }
        // Zapolnyau table
        td = helpers.createTd(currentMonthDayNum);
        const tdData: ITdData = {
          element: td,
          date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
        };
        this.emit('set-data', tdData);
        // @ts-expect-error
        tr.append(td);
        // @ts-expect-error
        calendarTable.append(tr);
        this.emit('check-current-day', td);
        date.setDate(currentMonthDayNum + 1);
      }

      const DAYS_IN_WEEK = 7;
      const lastMonthDayNumberInWeek = helpers.getWeekDayNumber(date.getDay());

      if (lastMonthDayNumberInWeek !== 0) {
        for (let i = lastMonthDayNumberInWeek; i < DAYS_IN_WEEK; i += 1) {
          const dayNumberInNextMonth = date.getDate();
          td = helpers.createTd(dayNumberInNextMonth, false);
          const tdData: ITdData = {
            element: td,
            date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
          };
          this.emit('set-data', tdData);
          // @ts-expect-error
          tr.append(td);
          date.setDate(dayNumberInNextMonth + 1);
        }
        // @ts-expect-error
        calendarTable.append(tr);
      }
    }
  }
}
