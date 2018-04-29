import React, { Component } from 'react';

class Feature extends Component {
    
    render() {
        return (
                <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
                <img src={this.props.imageSrc} alt={this.props.imageAlt} style={{width: '200px'}}/>
                </div>
                );
    }
};

export default Feature;
