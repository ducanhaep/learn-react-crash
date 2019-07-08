import React from "react";

// export default class Counter extends React.Component {
//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.props.counter.value === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { value } = this.props.counter;
//     return value === 0 ? "Zero" : value;
//   }
//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           className="btn btn-secondary btn-sm"
//           onClick={() => this.props.onIncrement(this.props.counter)}
//         >
//           Increment
//         </button>
//         <button
//           className="btn btn-danger btn-sm m-2"
//           onClick={() => this.props.onDelete(this.props.counter.id)}
//         >
//           Delete
//         </button>
//       </div>
//     );
//   }
// }

const Counter = props => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { value } = props.counter;
    return value === 0 ? "Zero" : value;
  };
  
  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => props.onIncrement(props.counter)}
      >
        Increment
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.counter.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
