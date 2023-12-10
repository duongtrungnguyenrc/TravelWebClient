export default class Calendar {
    year: number;
    month: {
        count: number
        name: string;
        days: number[];
    }[];
  
    constructor() {
      const currDate = new Date();
  
      this.year = currDate.getFullYear();
      this.month = this.calcMonth(currDate.getFullYear());
    }
  
    public calcMonth(year: number) {
      const res: {  count: number, name: string; days: number[] }[] = [];
  
      for (let month = 0; month < 12; month++) {
        const monthObject: { count: number, name: string; days: number[] } = {
            count: month,
            name: `Tháng ${month + 1}`,
            days: [],
        };
  
        let dayCount = 31;
  
        if (month === 3 || month === 5 || month === 8 || month === 10) {
          dayCount = 30;
        } else if (month === 1) {
          if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            dayCount = 29;
          } else {
            dayCount = 28;
          }
        }
  
        for (let i = 1; i <= dayCount; i++) {
          monthObject.days.push(i);
        }
  
        res.push(monthObject);
      }
      return res;
    }

    // public getMonth() {
    //     return this.month];
    // }
  }