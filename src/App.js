import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      color: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    console.log("handling");
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <div className="App">
        <form>
          <input 
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={this.handleChange}
            name="lastName"
          />
          <input
            type="text"
            placeholder="Color"
            onChange={this.handleChange}
            name="color"
          />
        </form>
        <h1 style={{color: this.state.color}}>{this.state.firstName} {this.state.lastName}</h1>
      </div>
    );
  }
  
}

export default App;
