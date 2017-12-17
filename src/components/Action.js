import React from 'react'

const Action = (props) => {
  return (
    <div>
      {/* {this.props.hasOptions && <button onClick={this.handlePick}>What should I do?</button>} */}
      <button
        className="big-button"
        disabled={!props.hasOptions}
        onClick={props.handlePick}
      >
          What should I do?
      </button>
    </div>
  )
} // End of Action stateless functional component definition

export default Action
