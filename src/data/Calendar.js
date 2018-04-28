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


            s += "</div>"; //close wrapper
            
        }


        months.innerHTML = s;
    }

    /*adds each day with its number in one div*/
    getDays() {
        var string = '';
        var x = 0;
        var nums = this.ReturnDays();
        
        for (var j = 12; j < 19; j++) {
            string += "<div>"; //create div for day at index j
            string += "<li>" + dates[j] + '</li>'; //add days as list items
            
            
            while(nums[x] !== 'X' && x < nums.length) { //while current element is not X
                string += "<p id='dayNums'>"; //add each number as a p element
                string += nums[x]; //get number
                string += '</p>'; //close the tag
                string += '<br />'; //add spacing
                x++;
            }
            x++; //move to the next element to add it to the next day
            string += '</div>'; //close the day div
        }
        
        return string;
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
