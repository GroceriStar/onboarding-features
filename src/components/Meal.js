import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, ListGroup, ListGroupItem, Form, Input, FormGroup, Label } from 'reactstrap';

const mealArray = [];

class Meal extends Component {
    state = {
        name: '',
        names: [],
        image: '',
        images: [],
        description: '',
        descriptions: [],
        step: '',
        steps: []
    };

    submitOutput() {
        this.setState({names: [...this.state.names, this.state.name],
            images: [...this.state.images, this.state.image],
            descriptions: [...this.state.descriptions, this.state.description],
            steps: [...this.state.steps, this.state.step]});

        this.renderArray();
    }

    renderArray() {
        mealArray.push(
                <ListGroupItem color="info">
                    <h2>{this.state.name}</h2>
                    <img src={this.state.image} alt="not found" />
                                                                                    
                    <h3>Steps:</h3>
                    <p>{this.state.description}</p>
                    <dl>
                        <dt>Steps:</dt>
                        <dd>{this.state.step}</dd>
                    </dl>
                </ListGroupItem>
                );
    }

    render() {
        return(
                <Container>
                    <h2>Today you should eat this</h2>
                    <Form>
                        <FormGroup>
                            <Label>
                                Image URL
                            </Label>
                            <Input placeholder="https://example.com" 
                                   type="url"
                                   onChange={e => this.setState({image: e.target.value})} />
                        </FormGroup>
                
                        <FormGroup>
                            <Label>
                                Meal Name
                            </Label>
                            <Input 
                                onChange={e => this.setState({name: e.target.value})} 
                                value={this.state.name}
                                type="text"/>
                        </FormGroup>
                
                        <FormGroup>
                            <Label>
                                Description
                            </Label>
                            <Input type="textarea" 
                                   onChange={e => this.setState({description: e.target.value})} />
                        </FormGroup>
                
                        <FormGroup>
                            <Label>
                                Steps
                            </Label>
                            <Input type="textarea"
                                   onChange={e => this.setState({step: e.target.value})}/>
                        </FormGroup>
                        
                        <Button color="primary"
                                onClick={() => this.submitOutput()}>
                            Add meal
                        </Button>
                
                    </Form>
                
                    <ListGroup id="food-items">
                        {mealArray}
                    </ListGroup>
                </Container>
                                        );
                            }
                        }
                        ;

                        export default Meal;
