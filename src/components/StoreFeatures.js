import React, {Component} from 'react';
import Feature from './Feature';
import FeatureImage from './FeatureImage';
import data from '../assets/data/features'

let features = [];

class StoreFeatures extends Component {

    printData() {

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
