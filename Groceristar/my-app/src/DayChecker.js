import React, {Component} from 'react';

class DayChecker extends Component {
    getDayName(num) {
        let days = ['Satyrday', 'Sunday', 'Monday', 
            'Tuseday', 'Wednesday', 'Thursday', 'Friday'];
        
        return days[num];
    }
    
    render() {
        let today = new Date().getDay();
        
        if(today === 6 || today === 0) {
            return <div>Today is {this.getDayName(today)} - you can watch TV all day today</div>;
        }
        
        return <div>Today is {this.getDayName(today)} - you shouold go to work today</div>;
    }
};

export default DayChecker;