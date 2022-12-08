import React from "react"
import Modal from 'react-bootstrap/Modal'

const ModalWindow = ({ payload }) => {
  return (
    <Modal show={true}>
        {payload}
    </Modal>
  )
}

export { ModalWindow as default }