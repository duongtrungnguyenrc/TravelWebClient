// Produced by Duong Trung Nguyen

'use client'

import "./styles.scss";

const Calendar = () => {
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    const dayNames = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];

    const newDate = new Date();

    return (
        <div className="calendar-wrapper">
            <div className="image-icon">
                <div className="calendar-wrapper">
                    <div className="signboard outer">
                        <div className="signboard front inner anim04c">
                            <li className="year anim04c">
                                <span>{newDate.getFullYear()}</span>
                            </li>
                            <ul className="calendarMain anim04c flex-center flex-column">
                                <li className="month anim04c">
                                    <span>{monthNames[newDate.getMonth()]}</span>
                                </li>
                                <li className="date anim04c">
                                    <span>{newDate.getDate()}</span>
                                </li>
                                <li className="day anim04c">
                                    <span>{dayNames[newDate.getDay()]}</span>
                                </li>
                            </ul>
                            <li className="calender-clock minute anim04c">
                                <span>{(newDate.getMinutes() < 10 ? "0" : "" ) + newDate.getMinutes()}</span>
                            </li>
                            <li className="calendarNormal date2 anim04c">
                                {/* <span>{(newDate.getSeconds() < 10 ? "0" : "" ) + newDate.getSeconds()}</span> */}
                            </li>
                        </div>
                        <div className="signboard left inner anim04c">
                            <li className="calender-clock hour anim04c">
                                <span>{( newDate.getHours() < 10 ? "0" : "" ) + newDate.getHours()}</span>
                            </li>
                            <li className="calendarNormal day2 anim04c">
                                <span>{dayNames[newDate.getDay()]}</span>
                            </li>
                        </div>
                        <div className="signboard right inner anim04c">
                            <li className="calender-clock second anim04c">
                                {/* <span>{( newDate.getSeconds() < 10 ? "0" : "" ) + newDate.getSeconds()}</span> */}
                            </li>
                            <li className="calendarNormal month2 anim04c">
                                <span>{monthNames[newDate.getMonth()]}</span>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-title">
                <p>Today</p>
            </div>
            <div className="detail-value">
                <p>{monthNames[newDate.getMonth()] + " " + newDate.getDate() + " " + newDate.getFullYear()}</p>
            </div>

        </div>
    );
};
export default Calendar;