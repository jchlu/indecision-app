import React from 'react'
import Option from './Option'

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {props.options.length === 0 ? <p
        className="widget-header__message"
      >
        Please Add an Option
      </p>
        : <button
          className="button button--link"
          onClick={props.handleResetOptions}
        >
          Reset to Default
        </button>
      }
      {
        props.options.length > 0 &&
        props.options.map((option, index) => {
          return (
            <Option
              key={option}
              optionText={option}
              count={index + 1}
              handleDeleteOption={props.handleDeleteOption}
            />
          )
        })
      }
    </div>
  )
} // End of Options stateless functional component definition

export default Options
