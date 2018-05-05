import React, {Component} from 'react';
import _ from 'lodash';

let html = '';

class Meal extends Component {
    state = {
        meal: '',
        meals: [],
        image: '',
        images: [],
        description: '',
        descriptions: [],
        step: '',
        steps: []
    };

    renderMeals() {
        return _.map(this.state.meals, meal => <p>{meal}</p>);
    }

    renderImages() {
        return _.map(this.state.images, image => <img src={image} />);
    }

    renderDescriptions() {
        return _.map(this.state.descriptions, description => <p>{description}</p>);
    }

    renderSteps() {
        return _.map(this.state.steps, step => <p>{step}</p>);
    }

    submitOutput() {
        this.setState({meals: [...this.state.meals, this.state.meal],
            images: [...this.state.images, this.state.image],
            descriptions: [...this.state.descriptions, this.state.description],
            steps: [...this.state.steps, this.state.step]});
    }

    renderOutput() {
        /*
         * TODO:
         * Create a new list item eveytime button is pressed
         */
        return (
                <li>
                    {this.renderMeals()}
                    { this.renderImages()}
                    {this.renderDescriptions()}
                    {this.renderSteps()}
                 </li>
                );
    }

    render() {
        return(
                <div>
                    <h2>Today you should eat this</h2>
                    <input placeholder="Image url" 
                           type="url" 
                           onChange={e => this.setState({image: e.target.value})} />
                
                    <input 
                        onChange={e => this.setState({meal: e.target.value})} 
                        value={this.state.meal}
                        type="text"
                        placeholder="Meal name"/>
                
                    <textarea placeholder="Description" 
                              onChange={e => this.setState({description: e.target.value})} />
                
                    <textarea placeholder="Steps"
                              onChange={e => this.setState({step: e.target.value})}/>
                
                    <button
                        onClick={() => this.submitOutput()} >
                        Add meal
                    </button>
                
                    <ul id="food-items">
                        {this.renderOutput()}
                    </ul>
                </div>
                                        );
                            }
                        }
                        ;

                        export default Meal;
