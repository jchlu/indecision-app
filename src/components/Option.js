import React from 'react'

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
      <button className="button button--link" onClick={(e) => {
        // Rather than passing the whole event, just pass the option text
        props.handleDeleteOption(props.optionText)
      }}>remove</button>
    </div>
  )
} // End of Option stateless functional component definition

export default Option
