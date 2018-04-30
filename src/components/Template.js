import React, { Component } from 'react';
import Feature from './Feature';
import FeatureImage from './FeatureImage';
import screen01 from '../assets/images/screen01.png';
import screen02 from '../assets/images/screen02.png';
import screen03 from '../assets/images/screen03.png';

        class Template extends Component {
            
            getData(name, description, image, imageAlt) {
                let data = [];
                
                if(image === 'x') { //if x is passed as image
                    data.push(<Feature name={name} description={description}/>); //add feature name, and description only
                    return data;
                }
                
                else if (name === 'x' && description === 'x') { //if x is passed as name, and description
                    data.push(<FeatureImage imageSrc={image} alt={imageAlt} />); //add feature image only
                    return data;
                }
                
                //otherwise add everything together
                data.push(<Feature  name={name} description={description}/>, <FeatureImage imageSrc={image} alt={imageAlt} />);
                
                return data;
            }
            
        render() {
        return (
<main class="cd-main-content">
    <div className="cd-product-intro">
        <h1>App Introduction Template</h1>
        <p>Click on the Start button to see the animated slideshow.<br />Videos will play on large devices only, on mobile you just see images.</p>
        <div className="cd-triggers">
            <a href="http://codyhouse.co/?p=384" class="btn">Download</a>
            <a href="#cd-product-tour" class="btn salmon" data-type="cd-tour">Start</a>
        </div>
    </div>

    <div id="cd-product-tour">
        <ul>
            <li className="cd-single-item cd-active">
                <div className="cd-caption">
                    
         <div>
            {this.getData("What a great feature", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus praesentium, \n\
                    quis ab iusto possimus quaerat perspiciatis voluptas obcaecati ipsam autem.", 'x', 'x')}
        </div>
                </div>
                
                <div className="cd-image-container">
                    <div>
                    <div className="cd-image-wrapper">
                    <div>{this.getData('x', 'x', screen01, 'Screen Preview 1')}</div>
                    </div>
                    </div>
                </div>
            </li>
            <li className="cd-single-item cd-not-visible cd-move-right">
                <div className="cd-caption">
                
        <div>
        {this.getData("This one is even better", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus praesentium, \n\
                quis ab iusto possimus quaerat perspiciatis voluptas obcaecati ipsam autem.", 'x', 'x')}
        </div>
                </div>
                
                <div className="cd-image-container">
                    <div>
                        <div className="cd-phone-frame"></div>
                        <div className="cd-image-wrapper">
                        <div>
                            {this.getData('x', 'x', screen02, 'Screen Preview 2')}
                        </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="cd-single-item cd-not-visible cd-move-right">
                <div className="cd-caption">
                    
        <div>
            {this.getData('Feature number 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus praesentium, \n\
                quis ab iusto possimus quaerat perspiciatis voluptas obcaecati ipsam autem.', 'x', 'x')}
        </div>
                
                </div>
                <div className="cd-image-container">
                    <div>
                        <div className="cd-phone-frame"></div>
                        <div className="cd-image-wrapper">
                        <div>
                            {this.getData('x', 'x', screen03, 'Screen Preview 3')}
                        </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <div className="cd-slider-nav">
        <a className="cd-prev" href="#0">Previous</a>
        <a className="cd-next" href="#0">Next</a>
    </div>

    <div className="cd-loader"></div>
</main>
                );
        }
        };

export default Template;
