import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  return (
    <div>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={props.onReset}
      >
        Reset
      </button>

      {props.counters.map(counter => (
        <Counter
          key={counter.id}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          counter={counter}
        />
      ))}
    </div>
  );
}

// class Counters extends React.Component {
//   render() {
//     const {onReset, counters, onDelete, onIncrement} = this.props
//     return (
//       <div>
//         <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
//         {counters.map(counter => (
//           <Counter
//             key={counter.id}
//             onDelete={onDelete}
//             onIncrement={onIncrement}
//             counter={counter}
//           />
//         ))}
//       </div>
//     );
//   }
// }
export default Counters;
