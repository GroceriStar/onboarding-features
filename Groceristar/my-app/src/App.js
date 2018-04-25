import React, { Component }
from 'react';
import './styles.css'

        class App extends Component {

    getCalendar(num) {
        const months = ['January', 'February', 'March'];

        return months[num];
    }

    componentDidMount() {
        var numDivs = [
            document.getElementById('dayNums1'),
            document.getElementById('dayNums2'),
            document.getElementById('dayNums3')
        ];

        var string = '';
        var x = 1;

        for (var i = 1; i <= 31; i++) {
            string += '<p>' + i;
            x++;
            if (x === 8 && i < 31) {
                string += '</p>';
                string += '<br/>';
                x = 0;
            } else if (i === 31) {
                string += '</p>';
            }
            else {
            string += '</p>';
        }
        }

        for (var j = 0; j < numDivs.length; j++) {
            numDivs[j].innerHTML = string;
        }
    }

    render() {
        return (
                <main>
                    <div className='monthWrapper'>
                    <div className='month'><h3>{this.getCalendar(0)}</h3></div>
                
                        <ul className='days'>
                            <li>Mon</li>
                            <li>Tus</li>
                            <li>Wed</li>
                            <li>Thu</li>
                            <li>Fri</li>
                            <li>Sat</li>
                            <li>Sun</li>
                        </ul>
                        <div id='dayNums1'></div>
                    </div>
                
                    <div className='monthWrapper'>
                    <div className='month'><h3>{this.getCalendar(1)}</h3></div>
                
                        <ul className='days'>
                            <li>Mon</li>
                            <li>Tus</li>
                            <li>Wed</li>
                            <li>Thu</li>
                            <li>Fri</li>
                            <li>Sat</li>
                            <li>Sun</li>
                        </ul>
                        <div id='dayNums2'></div>
                    </div>
                
                    <div className='monthWrapper'>
                    <div className='month'><h3>{this.getCalendar(2)}</h3></div>
                
                        <ul className='days'>
                            <li>Mon</li>
                            <li>Tus</li>
                            <li>Wed</li>
                            <li>Thu</li>
                            <li>Fri</li>
                            <li>Sat</li>
                            <li>Sun</li>
                        </ul>
                        <div id='dayNums3'>
                        </div>
                    </div>
                </main>
                );
    }
}
;
export default App;
