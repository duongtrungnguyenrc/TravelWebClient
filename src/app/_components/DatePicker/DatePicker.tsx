// Produced by Duong Trung Nguyen

'use client'

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from "react";

const cx = classNames.bind(styles);

const DatePicker = ({ onChange, displayDate, title, valueKey } : { onChange: Function, displayDate: string, title: string, valueKey: string }) => {

    const currentDate = new Date();
    const [date, setDate] = useState({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
    });
    const [ selectedDate, setSelectedDate ] = useState([0, 0, 0]);
  
    const getMonth = (year: number, month: number) => {
        const res = [];

        const date = new Date(year, month, 1);
        const firstDay = date.getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const prevMonthLastDate = new Date(year, month, 0).getDate();
      
        let week = [];
      
        let prevMonthDays = firstDay === 0 ? 7 : firstDay;
        let prevMonthStartDay = prevMonthLastDate - prevMonthDays + 1;
        for (let i = prevMonthStartDay; i <= prevMonthLastDate; i++) {
          week.push(i);
        }
      
        let day = 1;
      
        while (day <= lastDate) {
          week = [];
          for (let i = 0; i < 7; i++) {
            if (day <= lastDate) {
              week.push(day);
              day++;
            }
          }
          res.push(week);
        }
      
        return res;
    }

    useEffect(() => {
      setSelectedDate([0, 0, 0]);
    }, []);
  
    const prevMonth = () => {
      if(date.year > currentDate.getFullYear())
      setDate((prevDate) => {
        if (prevDate.month === 0) {
          return {
            year: prevDate.year - 1,
            month: 11,
          };
        } else {
          return {
            ...prevDate,
            month: prevDate.month - 1,
          };
        }
      });
    };
  
    const nextMonth = () => {
      setDate((prevDate) => {
        if (prevDate.month === 11) {
          return {
            year: prevDate.year + 1,
            month: 0,
          };
        } else {
          return {
            ...prevDate,
            month: prevDate.month + 1,
          };
        }
      });
    };

    const handleSelectedDate = (year: number, month: number, day: number) => {
      setSelectedDate([day, month, year]);
      onChange(date.year, date.month + 1, day, valueKey);
    }

    return (
        <div className={cx("datepicker")}>
          <div className={cx("datepicker-top")}>
              <div className={cx("btn-group")}>
                  <button className={cx("tag")}>{ title }: { displayDate }</button>
              </div>
              <div className={cx("month-selector")}>
                  <button className={cx("arrow")} onClick={prevMonth}>
                      <ChevronLeftIcon/>
                  </button>
                  <span className={cx("month-name")}>{`Tháng ${date.month + 1}, ${date.year}`}</span>
                  <button className={cx("arrow")} onClick={nextMonth}>
                      <ChevronRightIcon/>
                  </button>
              </div>
          </div>
          <div className={cx("datepicker-calendar")}>
              <span className={cx("day")}>Mo</span>
              <span className={cx("day")}>Tu</span>
              <span className={cx("day")}>We</span>
              <span className={cx("day")}>Th</span>
              <span className={cx("day")}>Fr</span>
              <span className={cx("day")}>Sa</span>
              <span className={cx("day")}>Su</span>
              {getMonth(date.year, date.month).map((week) => (
                  <>
                      {week.map((day) => (
                        <button 
                            key={day}
                            className={cx(
                              "date", 
                              "faded", 
                              { "current-day": currentDate.getDate() === day && currentDate.getMonth() === date.month }, 
                              { "selected": selectedDate[0] === day && selectedDate[1] === date.month && selectedDate[2] === date.year })}
                            onClick={() => handleSelectedDate(date.year, date.month, day)}>
                            {day}
                        </button>
                      ))}
                  </>
              ))}
          </div>
      </div>
    );
};
export default DatePicker;