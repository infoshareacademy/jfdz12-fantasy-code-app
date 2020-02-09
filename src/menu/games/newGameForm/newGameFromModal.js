import React from 'react'
import { Button,Modal } from 'semantic-ui-react';
import GameForm from "./GameForm"

const NewGameFormModal = (props) => (
  <Modal trigger={<Button>Create New Game</Button>}>
    <Modal.Header>Create New Game</Modal.Header>
    <Modal.Content >
        <GameForm onAdd={props.onAdd}/>
    </Modal.Content>
  </Modal>
)

export default NewGameFormModal