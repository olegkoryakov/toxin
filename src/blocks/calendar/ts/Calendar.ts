import CalendarModel from './CalendarModel/CalendarModel';
import CalendarView from './CalendarView/CalendarView';
import CalendarPresenter from './CalendarPresenter/CalendarPresenter';

export default class Calendar implements ICalendar {
  constructor(calendarWidget: HTMLElement) {
    this.calendarWidget = calendarWidget;
    this.calendarModel = new CalendarModel();
    this.calendarView = new CalendarView(calendarWidget);
    this.calendarPresenter = new CalendarPresenter(this.calendarModel, this.calendarView);
    this.calendarPresenter.init();
  }

  private calendarWidget: HTMLElement;

  private calendarPresenter: ICalendarPresenter;

  private calendarModel: ICalendarModel;

  private calendarView: ICalendarView;
}
