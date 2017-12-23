import React from 'react'
// Third Party Components
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"

  >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
  </Modal>
)

export default OptionModal
