import React, {Component} from 'react';
import DayChecker from './DayChecker';

let workDays = new Array();
let weekend = new Array();

class WeekChecker extends Component {

    getDays() {
        let day = new DayChecker();

        for (var i = 0; i < 7; i++) {
            if (day.getDays(i) === ('Saturday') || day.getDays(i) === ('Sunday')) {
                this.setWeekend(day.getDays(i));
            } else {
                this.setWorkDays(day.getDays(i));
            }
        }
    }

    setWorkDays(day) {
        workDays.push(day);
    }

    getWorkDays() {
        return workDays;
    }

    setWeekend(day) {
        weekend.push(day);
    }
    
    getWeekend() {
        return weekend;
    }

    render() {
        return <div>{this.getDay()}</div>;
    }
}
;

export default WeekChecker;
