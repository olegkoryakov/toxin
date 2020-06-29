const createTr = () => {
  const tr = document.createElement('tr');
  tr.classList.add('calendar__tr');
  return tr;
};

const createTd = (dayNumberInMonth: number, isThisMonthDay: boolean = true) => {
  const td = document.createElement('td');
  const classModifier = isThisMonthDay ? '' : 'calendar__td--other-month';
  td.textContent = dayNumberInMonth.toString();
  td.classList.add('calendar__td');
  if (classModifier !== '') td.classList.add(classModifier);
  return td;
};

const createHeadingTr = () => {
  const WEEK_DAYS_NAMES = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс',
  ];

  const tr = createTr();
  tr.classList.add('calendar__tr--heading');

  WEEK_DAYS_NAMES.forEach((name) => {
    const th = document.createElement('th');
    th.classList.add('calendar__th');
    th.textContent = name;
    tr.append(th);
  });
  return tr;
};

const getMonthName = (monthNumber: number) => {
  const MONTH_NAMES = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  return MONTH_NAMES[monthNumber - 1];
};

const getWeekDayNumber = (dayNumber: number) => (dayNumber === 0 ? 6 : dayNumber - 1);

export {
  createTr,
  createTd,
  createHeadingTr,
  getMonthName,
  getWeekDayNumber,
};
