import React, { Component } from 'react'
import Couters from './couters';
import NavBar from "./navbar";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      couters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
      ]
    }
  }
  handleIncre = (couter) => {
    const couters = [...this.state.couters];
    const index = couters.indexOf(couter);
    couters[index] = { ...couter }
    couters[index].value++;
    this.setState({ couters });
  }

  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Couters />
        </main>
      </>
    )
  }
}
