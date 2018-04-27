import React, {Component} from 'react';

class MonthChecker extends Component {
    getMonths() {
        let months = ['January', 'Feburary', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October',
            'November', 'December'];

        return months;
    }

    render() {
        let month = new Date().getMonth();
        return <div>The month is {this.getMonthName(month)}</div>;
    }
}
;

export default MonthChecker;
