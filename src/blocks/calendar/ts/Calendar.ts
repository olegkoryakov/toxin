import CalendarModel from './CalendarModel/CalendarModel';
import CalendarView from './CalendarView/CalendarView';
import CalendarPresenter from './CalendarPresenter/CalendarPresenter';

export default class Calendar implements ICalendar {
  constructor(
    calendarWidget: HTMLElement,
    selectedDates: ISelectedDates = {
      from: undefined,
      to: undefined,
    },
  ) {
    this.initCalendarApp(calendarWidget, selectedDates);
  }

  private calendarPresenter!: ICalendarPresenter;

  private calendarModel!: ICalendarModel;

  private calendarView!: ICalendarView;

  private initCalendarApp(calendarWidget: HTMLElement, selectedDates: ISelectedDates) {
    this.calendarModel = new CalendarModel(selectedDates);
    this.calendarView = new CalendarView(calendarWidget);
    this.calendarPresenter = new CalendarPresenter(this.calendarModel, this.calendarView);
    this.calendarPresenter.init();
  }

  getSelectedDates() {
    return this.calendarModel.getSelectedDates();
  }

  resetSelectedDates() {
    this.calendarPresenter.resetSelectedDates();
  }
}
