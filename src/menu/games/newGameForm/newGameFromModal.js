import React from 'react'
import { Button,Modal } from 'semantic-ui-react';
import GameForm from "./GameForm"

const NewGameFormModal = (props) => (
  <Modal trigger={<Button inverted color={"yellow"}>Create New Game</Button>}>
    <Modal.Header className="grid ui centered">Create New Game</Modal.Header>
    <Modal.Content >
        <GameForm onAdd={props.onAdd}/>
    </Modal.Content>
  </Modal>
)

export default NewGameFormModal