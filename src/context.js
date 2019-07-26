import React, { Component } from "react";
const MyContext = React.createContext();

class Context extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState(
      () => {
        return { counters };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  // handleIncrement = (id) => {
  //   this.setState(prevState => {
  //     const counters = prevState.counters.map(item => {
  //       if (item.id === id) {
  //         item.value++;
  //       }
  //       return item;
  //     })
  //     return({ counters })
  //   })
  // }

  // handleIncrement = id => {
  //   let counters = [...this.state.counters];
  //   const item = counters.find(item => item.id === id);
  //   const index = counters.indexOf(item);
  //   const counter = counters[index];
  //   counter.value++;
  //   this.setState(
  //     () => {
  //       return { counters };
  //     },
  //     () => {
  //       console.log(this.state);
  //     }
  //   );
  // };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(item => item.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(item => {
      item.value = 0;
      return item;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <MyContext.Provider
          value={{
            ...this.state,
            handleDelete: this.handleDelete,
            handleReset: this.handleReset,
            handleIncrement: this.handleIncrement
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </div>
    );
  }
}

export { Context, MyContext };
