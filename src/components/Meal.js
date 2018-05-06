import React, {Component} from 'react';
import _ from 'lodash';

class Meal extends Component {
    state = {
        meals: [],
        name: '',
        names: [],
        image: '',
        images: [],
        description: '',
        descriptions: [],
        step: '',
        steps: []
    };
    
    renderMeals() {
        return _.map(this.state.meals, meal => <li>{meal}</li>);
    }

    renderNames() {
        return _.map(this.state.names, name => <p>{name}</p>);
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
        this.setState({names: [...this.state.names, this.state.name],
            images: [...this.state.images, this.state.image],
            descriptions: [...this.state.descriptions, this.state.description],
            steps: [...this.state.steps, this.state.step]});
        
        this.setState({meals: [...this.state.meals, this.renderNames() 
        + this.renderImages() + this.renderDescriptions() + this.renderSteps()]}); //add values to meals array
    }

    render() {
        return(
                <div>
                    <h2>Today you should eat this</h2>
                    <input placeholder="Image url" 
                           type="url" 
                           onChange={e => this.setState({image: e.target.value})} />
                
                    <input 
                        onChange={e => this.setState({name: e.target.value})} 
                        value={this.state.name}
                        type="text"
                        placeholder="Meal name"/>
                
                    <textarea placeholder="Description" 
                              onChange={e => this.setState({description: e.target.value})} />
                
                    <textarea placeholder="Steps"
                              onChange={e => this.setState({step: e.target.value})}/>
                
                    <button
                        onClick={() => this.submitOutput()}>
                        Add meal
                    </button>
                
                    <ul id="food-items">
                    {this.renderMeals()}
                    </ul>
                </div>
                                        );
                            }
                        }
                        ;

                        export default Meal;
