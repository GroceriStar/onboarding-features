import React, { Component } from 'react';
import StoreFeatures from './StoreFeatures';

class Template extends Component {

  render() {
        return (

          <main className="cd-main-content">
              <div className="cd-product-intro">
                  <h1>App Introduction Template</h1>
                  <p>Click on the Start button to see the animated slideshow.<br />Videos will play on large devices only, on mobile you just see images.</p>
                  <div className="cd-triggers">
                      <a href="http://codyhouse.co/?p=384" className="btn">Download</a>
                      <a href="#cd-product-tour" className="btn salmon" data-type="cd-tour">Start</a>
                  </div>
              </div>

              <div id="cd-product-tour">

              <StoreFeatures />

                  <ul>
                      <li className="cd-single-item cd-active">
                          <div className="cd-caption">

                          </div>

                          <div className="cd-image-container">
                              <div>
                              <div className="cd-image-wrapper">

                              </div>
                              </div>
                          </div>
                      </li>
                      <li className="cd-single-item cd-not-visible cd-move-right">
                          <div className="cd-caption">

                            <div>

                            </div>
                          </div>

                          <div className="cd-image-container">
                              <div>
                                  <div className="cd-phone-frame"></div>
                                  <div className="cd-image-wrapper">
                                  <div>

                                  </div>
                                  </div>
                              </div>
                          </div>
                      </li>
                      <li className="cd-single-item cd-not-visible cd-move-right">
                          <div className="cd-caption">

                            <div>

                            </div>

                          </div>
                          <div className="cd-image-container">
                              <div>
                                  <div className="cd-phone-frame"></div>
                                  <div className="cd-image-wrapper">
                                  <div>

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
