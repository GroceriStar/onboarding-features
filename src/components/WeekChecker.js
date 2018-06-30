import React, {Component} from 'react';
import days from './DayChecker';

let workDays = [];
let weekend = [];


for (var i = 0; i < 7; i++) {
    if (days[i] === ('Saturday') || days[i] === ('Sunday')) {
        weekend.push(days[i]);
    } else {
        workDays.push(days[i]);
    }
}

let weekArray = [
        workDays,
        weekend
];

export default weekArray;
