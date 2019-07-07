import React from 'react'

export default function Couter({ value, incre, couter, delete }) {

  return (
    <>
      <span>{this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.couter)}>Increment</button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.couter.id)}>Delete</button>
    </>
  )
}

getBadgeClasses() {
  let classes = "badge m-2 badge-";
  classes += this.props.couter.value === 0 ? "warning" : "primary";
  return classes;
} 

formatCount() {
  const {value} = this.props.couter
  return value === 0 ? 'Zero' : value;
}
