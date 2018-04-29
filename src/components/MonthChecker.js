import React, {Component} from 'react';
import WeekChecker from './WeekChecker';

class MonthChecker extends Component {
    getMonths() {
        let months = ['January', 'Feburary', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October',
            'November', 'December'];

        return months;
    }

    render() {
        return (
                <div>
        {this.getMonths()}
                </div>
                );
        
    }
}
;

export default MonthChecker;
