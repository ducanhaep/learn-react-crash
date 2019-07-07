import React from 'react'
import Couter from './couter';

export default function Couters({ value, incre, couter }) {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>
      {this.state.couters.map(couter => 
        <Couter 
          key={couter.id}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          couter={couter}
        />
      )}
      <Couter value={value} incre={incre} couter={couter}/>
    </div>
  )
}

handleDelete = couterId => {
  const couters = this.state.couters.filter(item => item.id !== couterId)
  this.setState({ couters })
}

handleReset = () => {
  const couters = this.state.couters.map(item => {
    item.value = 0;
    return item;
  });
  this.setState({ couters })
}
