import React, {Component} from 'react';
import Feature from './Feature';
import FeatureImage from './FeatureImage';
import screen01 from '../assets/images/screen01.png';
import screen02 from '../assets/images/screen02.png';
import screen03 from '../assets/images/screen03.png';

let features = [];
let data = [];

class StoreFeatures extends Component {

    setData() {
        data.push('Feature 1', 'Awesome feature', screen01, 'Feature 2', 'Great feature', screen02, 'Feature 3', 'Check this out', screen03);
    }

    printData() {

        this.setData();

        var i = 0;

        while (i + 3 <= data.length) {
            features.push(<li><Feature name={data[i]}  description={data[i + 1] }/>, <FeatureImage imageSrc={data[i + 2]} /></li>);

            i += 3;
        }
        
        return features;
    }

    render() {
        return (
                <ul>
                    <li>
                        <div id='main-container'>{this.printData()}</div>
                    </li>
                </ul>
                )
                ;
    }
}
;

export default StoreFeatures;