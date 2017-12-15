import React from 'react'
import Option from './Option'

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <button onClick={props.handleResetOptions}>Reset to Default</button>
      {
        props.options.length > 0 &&
          props.options.map((option) => {
            return (
              <Option
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
              />
            )
          })
      }
    </div>
  )
} // End of Options stateless functional component definition

export default Options
