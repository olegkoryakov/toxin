import bind from '../../../../../node_modules/bind-decorator/index';

export default class CalendarPresenter implements ICalendarPresenter {
  constructor(calendarModel: ICalendarModel, calendarView: ICalendarView) {
    this.calendarModel = calendarModel;
    this.calendarView = calendarView;

    this.addViewHandlers();
    this.init();
  }

  private calendarModel: ICalendarModel;

  private calendarView: ICalendarView;

  @bind
  private setData(tdData: ITdData) {
    this.calendarModel.setTdData(tdData);
  }

  @bind
  private checkCurrentDay(td: HTMLTableDataCellElement) {
    const isDayCurrentDay = this.calendarModel.isCurrentDay(td);
    if (isDayCurrentDay) this.calendarView.setCurrentDayClass(td);
  }

  @bind
  private selectDate(td: HTMLTableDataCellElement) {
    this.calendarView.removeInterval();
    this.calendarView.removeSelectedDates();
    const data = this.calendarModel.getTdData(td);
    this.calendarModel.selectDate(data);

    const selectedDates = this.calendarModel.getSelectedDates();
    this.renderSelectedDatesAndInterval(selectedDates);
  }

  private addViewHandlers() {
    this.calendarView.on('set-data', this.setData);
    this.calendarView.on('check-current-day', this.checkCurrentDay);
    this.calendarView.on('select-date', this.selectDate);
    this.calendarView.on('render-next-month', this.renderNextMonth);
    this.calendarView.on('render-prev-month', this.renderPrevMonth);
  }

  renderSelectedDatesAndInterval(selectedDates: ISelectedDates) {
    let selectedTdFrom: Element | null;
    let selectedTdTo: Element | null;

    if (selectedDates.from) {
      selectedTdFrom = this.calendarView.getTdByData(selectedDates.from);
      if (selectedTdFrom) this.calendarView.setSelectedClass((selectedTdFrom as HTMLTableDataCellElement), 'first');
    }
    if (selectedDates.to) {
      selectedTdTo = this.calendarView.getTdByData(selectedDates.to);
      if (selectedTdTo) this.calendarView.setSelectedClass((selectedTdTo as HTMLTableDataCellElement), 'last');
    }
    if (selectedDates.from && selectedDates.to) {
      const selectedDateFrom = this.calendarModel.parseData(selectedDates.from);
      const selectedDateTo = this.calendarModel.parseData(selectedDates.to);
      const userDate = this.calendarModel.getUserDateState();
      const { minMonth, maxMonth } = this.calendarModel.getDateProps();

      const isMaxUserMonthNum = userDate.month === maxMonth;
      const isMinUserMonthNum = userDate.month === minMonth;

      const isThisMonthInInterval = selectedDateFrom.month <= userDate.month + 1
        && userDate.month + 1 <= selectedDateTo.month;

      const isThisYearInInterval = selectedDateFrom.year <= userDate.year
      && userDate.year <= selectedDateTo.year;

      const isDatesCrossYears = ((selectedDateTo.year === selectedDateFrom.year + 1)
      && (userDate.year === selectedDateFrom.year)
      && isMaxUserMonthNum)
      || ((selectedDateFrom.year === selectedDateTo.year - 1)
      && (userDate.year === selectedDateTo.year)
      && isMinUserMonthNum);

      if (isDatesCrossYears || (isThisMonthInInterval && isThisYearInInterval)) {
        const { from, to } = this.calendarView.getSelectedElementsIndex(
          // @ts-expect-error
          selectedTdFrom,
          // @ts-expect-error
          selectedTdTo,
        );
        this.calendarView.renderInterval(from, to);
      }
    }
  }

  @bind
  private renderNextMonth() {
    this.calendarModel.incrementUserDateState();
    const { year, month } = this.calendarModel.getUserDateState();
    this.calendarView.renderMonth(year, month);

    const selectedDates = this.calendarModel.getSelectedDates();
    this.renderSelectedDatesAndInterval(selectedDates);
  }

  @bind
  private renderPrevMonth() {
    this.calendarModel.decrementUserDateState();
    const { year, month } = this.calendarModel.getUserDateState();
    this.calendarView.renderMonth(year, month);

    const selectedDates = this.calendarModel.getSelectedDates();
    this.renderSelectedDatesAndInterval(selectedDates);
  }

  resetSelectedDates() {
    this.calendarView.removeSelectedDates();
    this.calendarView.removeInterval();
    this.calendarModel.resetSelectedDates();
  }

  init() {
    const { year, month } = this.calendarModel.getUserDateState();
    this.calendarView.renderMonth(year, month);

    const selectedDates = this.calendarModel.getSelectedDates();
    this.renderSelectedDatesAndInterval(selectedDates);
  }
}
