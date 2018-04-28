import React, { Component } from 'react';

class Feature extends Component {
    
    render() {
        return (
                <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
                </div>
                );
    }
};

export default Feature;
