import React from "react";
import Counter from "./counter";
import {MyContext} from './context';

// const Counters = (props) => {
//   return (
//     <div>
//       <button
//         className="btn btn-primary btn-sm m-2"
//         onClick={props.onReset}
//       >
//         Reset
//       </button>

//       {props.counters.map(counter => (
//         <Counter
//           // key={counter.id}
//           // onDelete={props.onDelete}
//           // onIncrement={props.onIncrement}
//           // counter={counter}
//         />
//       ))}
//     </div>
//   );
// }

class Counters extends React.Component {
  static contextType = MyContext;
  render() {
    const {handleReset, counters} = this.context;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
