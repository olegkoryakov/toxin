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
    this.calendarModel = new CalendarModel(selectedDates);
    this.calendarView = new CalendarView(calendarWidget);
    this.calendarPresenter = new CalendarPresenter(this.calendarModel, this.calendarView);
    this.calendarPresenter.init();
  }

  private calendarPresenter: ICalendarPresenter;

  private calendarModel: ICalendarModel;

  private calendarView: ICalendarView;

  getSelectedDates() {
    return this.calendarModel.getSelectedDates();
  }
}
