interface ICalendarState {
  day: number,
  month: number,
  year: number,
}

interface IDateProps {
  minMonth: number,
  maxMonth: number,
}

interface ITdData {
  element: HTMLTableDataCellElement,
  date: string,
}

type TDate = string;

interface ISelectedDates {
  from: TDate | undefined,
  to: TDate | undefined,
}

interface ISelectedDatesIndex {
  from: number,
  to: number,
}
type TTdClassPostfix = 'from' | 'to';

type TModifierPostfix = 'first' | 'last';

interface ICalendarModel {
  getUserDateState(): ICalendarState,
  getDateProps(): IDateProps,
  parseData(data: TDate): ICalendarState,
  incrementUserDateState(): void,
  decrementUserDateState(): void,
  setTdData(tdData: ITdData): void,
  getTdData(td: HTMLTableDataCellElement): string,
  selectDate(data: TDate): void,
  isCurrentDay(td: HTMLTableDataCellElement): boolean,
  getSelectedDates(): ISelectedDates,
}

interface ICalendarView extends IEventEmitter {
  setCurrentDayClass(td: HTMLTableDataCellElement): void,
  getTdByData(data: TDate): Element | null,
  getSelectedElementsIndex(
    selectedElementFirst: Element | null,
    selectedElementLast: Element | null,
  ): ISelectedDatesIndex;
  renderInterval(indexFrom: number, indexTo: number): void,
  removeInterval(): void,
  setSelectedClass(td: HTMLTableDataCellElement, modifierPostfix: TModifierPostfix): void,
  removeSelectedDates(): void,
  renderMonth(year: number, month: number): void,
}

interface ICalendarPresenter {
  init(): void,
}

interface ICalendar {
  getSelectedDates(): ISelectedDates;
}
