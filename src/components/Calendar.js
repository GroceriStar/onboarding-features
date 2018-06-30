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
                        <ul id="days">{this.getDays()}</ul>
                    </div>
                    );
        }

        return a;
    }

    /*adds each day with its number in one div*/
    getDays() {
        let days = [];
        let n = [];
        let d = [];
        var x = 0; //keeps track of numbers
        let i = 0; //keeps track of days
        var nums = this.ReturnDays();

        for (var j = 12; j < 19; j++) {
            days.push(
                    <li>{dates[j]}</li>
                    );

            while (nums[x] !== 'X' && x < nums.length) { //while current element is not X
                n.push(<p id="dayNums">{nums[x]}</p>);
                n.push(<br />);
                x++;
            }
            d.push(<div>{days[i]}{n}</div>);
            n = [];
            i++;
            x++; //move to the next element to add it to the next day
        }
        return d;
    }

    ReturnDays() {
        var n = 0; // adds numbers to be implemented under each day
        var x = []; //stores numbers

        for (var i = 1; i <= 31; i++) { //loop the same amount as the number of days in a month
            n = i;
            x.push(n); //add current element
            while (n <= 31) {
                n += 7; // get the next week's date of the same day

                if (n <= 31) { //a month cannot have more than 31 days
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
