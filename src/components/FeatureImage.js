import React, { Component } from 'react';

class FeatureImage extends Component {
    
    render() {
        return (
                <div>
                <img src={this.props.imageSrc} alt={this.props.imageAlt} style={{width: '200px'}}/>
                </div>
                );
    }
};

export default FeatureImage;
