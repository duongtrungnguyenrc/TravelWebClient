interface month {
    year: number;
    month: string;
    days: number[];
}

const Calendar : month[] = [];

for (let month = 1; month <= 12; month++) {
    const monthObject: month = {
        year: new Date().getFullYear(),
        month: `Tháng ${month}`,
        days: [],
    }

    let dayCount = 31;

    if (month === 4 || month === 6 || month === 9 || month === 11) {
        dayCount = 30;

    } else if (month === 2) { 
        if ((monthObject.year % 4 === 0 && monthObject.year % 100 !== 0) || monthObject.year % 400 === 0) {
            dayCount = 29;
        } else {
            dayCount = 28; 
        }
    }

    for (let i = 1; i <= dayCount; i++) {
        monthObject.days.push(i);        
    }

    Calendar.push(monthObject);
}

export default Calendar;