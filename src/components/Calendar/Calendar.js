import React, { Component } from 'react';
import MonthChecker from './scripts/MonthChecker';
import WeekChecker from './scripts/WeekChecker';
import './styles/styles.css';

let dates = new Array();

class Calendar extends Component {

    getDates() {
        let days = new WeekChecker();
        days.getDays(); //initiate days array

        let months = new MonthChecker();

        dates = months.getMonths().concat(days.getWorkDays(), days.getWeekend()); //add days and months
    }

    createCalendar() {
        this.getDates();

        let months = document.getElementById('calendar'); //main container

        var s = '';
        for (var i = 0; i < 12; i++) {
            s += "<div id='month'>"; //wrapper around each month

            s += '<h3>' + dates[i] + '</h3>'; //add month

            s += "<ul id='days'>" + this.getDays() + '</ul>'; //add days

            s += "<div id='dayNums'>" + this.getNums() + "</div>"; //add numbers

            s += "</div>"; //close wrapper
            
        }


        months.innerHTML = s;
    }

    /*TODO => ix numbers under days*/
    getDays() {
        var string = '';
        var x = 0;
        var nums = this.ReturnDays();
        var remainder;
        
        for (var j = 12; j < 19; j++) {
            string += "<div id=''>";
            string += "<li>" + dates[j] + '</li>'; //add days as list items
            string += '<p>';
            
            remainder = 4 % x;
            
            while(remainder !== 0 && x < nums.length) {
                string += nums[x];
                x++;
                remainder = 4 % x;
            }
            
            string += '</p>';
            string += '</div>';
        }
        
        console.log(nums);
        
        return string;
    }

    ReturnDays() {
        var n = 0;
        var x = [];

        for (var i = 1; i < 31; i++) {
            n = i;
            x.push(n);
            while (n <= 31) {
                n += 7;
                
                if (n <= 31) {
                    x.push(n);
                }
            }
        }

        return x;
    }

    getNums() {
        var string = '';
        var x = 1;
        let numArray = [];

        /*add 7 numbers in each row*/
        for (var i = 1; i <= 31; i++) {
            string += '<p>' + i;
            x++;

            if (x === 8 && i < 31) { //if the 8th character is reached
                string += '</p>'; //close tag
                string += '<br/>'; //add line break
                x = 1; //reset counter
            } else if (i === 31) { //if last element is reached
                string += '</p>'; //close tag
            } else {
                string += '</p>'; //otherwise close tag
            }
        }
        return string;
    }

    componentDidMount() {
        this.createCalendar();
    }

    render() {

        return (
                <main id="calendar"></main>

                );
    }
}
;
export default Calendar;
