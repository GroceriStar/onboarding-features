import React, { Component } from 'react';
import Feature from './Features';

let feature1 = new Feature();
let feature2 = new Feature();
let feature3 = new Feature();

        class Template extends Component {
            
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
                    
                    <Feature name="What a great feature" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus praesentium, \n\
                    quis ab iusto possimus quaerat perspiciatis voluptas obcaecati ipsam autem." />
                </div>
                
                <div className="cd-image-container">
                    <div>

                        <div className="cd-image-wrapper">
                            <img src={require("../assets/images/screen-1.png")} data-video="./video/video-1" alt="Screen Preview 1" />
                        </div>
                    </div>
                </div>
            </li>
            <li className="cd-single-item cd-not-visible cd-move-right">
                <div className="cd-caption">
                
                   <Feature name="This one is even better" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus praesentium, \n\
                quis ab iusto possimus quaerat perspiciatis voluptas obcaecati ipsam autem."/> 
                
                </div>
                <div className="cd-image-container">
                    <div>
                        <div className="cd-phone-frame"></div>
                        <div className="cd-image-wrapper">
                            <img src={require("../assets/images/screen-2.png")} data-video="./video/video-2" alt="Screen Preview 2" />
                        </div>
                    </div>
                </div>
            </li>
            <li className="cd-single-item cd-not-visible cd-move-right">
                <div className="cd-caption">
                    
                    <Feature name='Feature number 3' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus praesentium, \n\
                quis ab iusto possimus quaerat perspiciatis voluptas obcaecati ipsam autem.'/>
                
                </div>
                <div className="cd-image-container">
                    <div>
                        <div className="cd-phone-frame"></div>
                        <div className="cd-image-wrapper">
                            <img src={require("../assets/images/screen-3.png")} data-video="./video/video-3" alt="Screen Preview 3" />
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
        }

export default Template;
