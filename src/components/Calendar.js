import React, { Component } from 'react';
import monthArray from './MonthChecker';
import weekArray from './WeekChecker';
import '../assets/css/styles.css';

let dates = [];
let calendar = [];

class Calendar extends Component {

    getDates() {
        for (let i = 0; i < monthArray.length; i++) {
            dates.push(monthArray[i]);
        }

        for (let i = 0; i < weekArray.length; i++) {
            for (let j = 0; j < weekArray[i].length; j++) {
                dates.push(weekArray[i][j]);
            }
        }
    }

    createCalendar() {
        this.getDates();

        let a = [];

        for (var i = 0; i < 12; i++) {
            a.push(
                    <div id="month">
                        <h3>{dates[i].name}</h3>
                        <ul id="days">{this.getDays(i)}</ul>
                    </div>
                    );
        }

        return a;
    }

    /*adds each day with its number in one vertical div*/
    getDays(monthID) {
        let dayNames = [];
        let numbers = [];
        let dayDiv = [];
        let dayId = 0; //current day in the array

        for (let j = 12; j < 19; j++) {
            dayNames.push(
                    <li>{dates[j]}</li>
                    );
        }

        let nums = this.ReturnDays(dates[monthID].numOfDays); //get number of days in the current month

        for (let x = 0; x < nums.length; x++) {
            if (nums[x] !== 'X') {
                numbers.push(<div><p id="dayNums">{nums[x]}</p><br /></div>);
            } else {
                if (dayId < dayNames.length) {
                    dayDiv.push(<div>{dayNames[dayId]}{numbers}</div>);
                    dayId++;
                    numbers = []; //reset to add numbers to the next day
                }
            }
        }

        return dayDiv;
    }

    ReturnDays(numOfDays) {
        let n = 0; // adds numbers to be implemented under each day
        let x = []; //stores numbers

        for (let i = 1; i <= numOfDays; i++) { //loop the same amount as the number of days in a month
            n = i;
            x.push(n); //add current element
            while (n <= numOfDays) {
                n += 7; // get the next week's date of the same day

                if (n <= numOfDays) { //a month cannot have more than 31 days
                    x.push(n);
                }
            }

            x.push('X'); //a break between each day
        }

        return x;
    }

    render() {
        calendar.push(this.createCalendar());
        return (
                <main id="calendar">{calendar}</main>
                );
    }
}
;
export default Calendar;
