import * as helpers from '../helpers/helpers';
import EventEmitter from '../../../../ts/EventEmitter/EventEmitter';

export default class CalendarView extends EventEmitter implements ICalendarView {
  constructor(calendarWidget: HTMLElement) {
    super();
    this.calendarWidget = calendarWidget;

    this.initButtonElements();
    this.addHandlers();
  }

  private calendarWidget: HTMLElement;

  private nextMonthButton!: HTMLElement | null;

  private prevMonthButton!: HTMLElement | null;

  private initButtonElements() {
    this.nextMonthButton = this.calendarWidget.querySelector('.calendar__button.calendar__button_next');
    this.prevMonthButton = this.calendarWidget.querySelector('.calendar__button.calendar__button_prev');
  }

  private onNextMonthButtonClick() {
    this.emit('render-next-month', null);
  }

  private onPrevMonthButtonClick() {
    this.emit('render-prev-month', null);
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

  setCurrentDayClass = (td: HTMLTableDataCellElement) => {
    td.classList.add('calendar__td_current-day');
  }

  setSelectedClass = (td: HTMLTableDataCellElement, modifierPostfix: TModifierPostfix) => {
    td.classList.add('calendar__td', 'calendar__td_selected', `calendar__td_selected-${modifierPostfix}`);
  }

  removeSelectedDates() {
    const selectedDates = this.calendarWidget.querySelectorAll('.calendar__td_selected');
    selectedDates.forEach((selectedDate) => {
      selectedDate.classList.remove('calendar__td_selected', 'calendar__td_selected-first', 'calendar__td_selected-last');
    });
  }

  renderInterval(indexFrom: number, indexTo: number) {
    let indexFromValue = indexFrom;
    let indexToValue = indexTo;
    const tds = this.calendarWidget.querySelectorAll('.calendar__td');
    if (tds[indexFromValue].classList.contains('calendar__td_selected-first')) indexFromValue += 1;
    if (!(tds[indexToValue].classList.contains('calendar__td_selected-last'))) indexToValue += 1;
    for (let i = indexFromValue; i < indexToValue; i += 1) {
      tds[i].classList.add('calendar__td_interval');
    }
  }

  removeInterval() {
    const intervalTds = this.calendarWidget.querySelectorAll('.calendar__td_interval');
    intervalTds.forEach((td) => td.classList.remove('calendar__td_interval'));
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
