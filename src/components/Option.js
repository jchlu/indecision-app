import React from 'react'

const Option = (props) => {
  return (
    <p>
      {props.optionText}
      <button onClick={(e) => {
        // Rather than passing the whole event, just pass the option text
        props.handleDeleteOption(props.optionText)
      }}>remove</button>
    </p>
  )
} // End of Option stateless functional component definition

export default Option
