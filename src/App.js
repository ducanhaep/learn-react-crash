import React, { Component } from 'react'
import Counters from './counters';
import NavBar from "./navbar";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
      ]
    }
  }
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({ counters });
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(item => item.id !== counterId)
    this.setState({ counters })
  }
  
  handleReset = () => {
    const counters = this.state.counters.map(item => {
      item.value = 0;
      return item;
    });
    this.setState({ counters })
  }

  render() {
    return (
      <>
        <NavBar totalCounter={this.state.counters.filter(item => item.value > 0).length}/>
        <main className="container">
          <Counters 
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </>
    )
  }
}
