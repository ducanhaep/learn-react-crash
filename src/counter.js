import React from "react";
import {MyContext} from './context';

class Counter extends React.Component {
  static contextType = MyContext;

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
  render() {
    const { handleIncrement, handleDelete } = this.context;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => handleIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => handleDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

// const Counter = props => {
//   const getBadgeClasses = () => {
//     let classes = "badge m-2 badge-";
//     classes += props.counter.value === 0 ? "warning" : "primary";
//     return classes;
//   };

//   const formatCount = () => {
//     const { value } = props.counter;
//     return value === 0 ? "Zero" : value;
//   };
  
//   return (
//     <div>
//       <span className={getBadgeClasses()}>{formatCount()}</span>
//       <button
//         className="btn btn-secondary btn-sm"
//         onClick={() => props.onIncrement(props.counter)}
//       >
//         Increment
//       </button>
//       <button
//         className="btn btn-danger btn-sm m-2"
//         onClick={() => props.onDelete(props.counter.id)}
//       >
//         Delete
//       </button>
//     </div>
//   );
// };

export default Counter;
