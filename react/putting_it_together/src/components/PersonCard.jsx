import React, { Component } from 'react';
    
    
class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            last_name: this.props.person['lastName'],
            first_name: this.props.person['firstName'],
            age: this.props.person['age'],
            hairColor: this.props.person['hairColor']
        };
    }

    render(){
        return(
            <div>
                <h1>{ this.state.last_name }, { this.state.first_name }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { this.state.hairColor }</p>
                <button onClick={ () => this.setState({ age: this.state.age+1 }) }>
                    Birthday Button for { this.state.first_name } { this.state.last_name }
                </button>
            </div>
        );
    }
}

export default PersonCard;