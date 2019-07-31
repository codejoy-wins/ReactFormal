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
            value={this.state.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={this.handleChange}
            name="lastName"
            value={this.state.lastName}
          />
          <input
            type="text"
            placeholder="Color"
            onChange={this.handleChange}
            name="color"
            value={this.state.color}
          />
        </form>
        <h1 style={{color: this.state.color}}>{this.state.firstName} {this.state.lastName}</h1>
        <footer>
          <a href="https://maxjann.com">Jann Software</a>
        </footer>
      </div>
    );
  }
  
}

export default App;
