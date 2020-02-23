import React from "react";
import { Button, Header, Icon, Modal, Container } from "semantic-ui-react";

export class GameDetails extends React.Component {
  // `${BASE_URL}/burgers/${this.props.burger.id}.json`

  removeGame = () => {
    console.log(this.props);
    fetch(
      `https://fantasyapp-9473b.firebaseio.com/plays/${this.props.gameid}.json`,
      {
        method: "DELETE"
      }
    ).then(this.props.onAdd());
  };

  render() {
    return (
      <Modal
        trigger={
          <Button color="orange" size="large">
            Details
          </Button>
        }
        basic
        size="small"
        closeIcon
      >
        <Header icon="chess" content="Game Details" />
        <Modal.Content>
          <Container fluid>
            <h3>Title: {this.props.title}</h3>
            <p>Localization: {this.props.localization}</p>
            <p>Date: {this.props.date}</p>
            <p>
              Players: {this.props.playerCur} /{this.props.playerMax}
            </p>
            <p>ReQuired Level: {this.props.reqLvl}</p>
            <p>{this.props.descript}</p>
          </Container>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            color="red"
            onClick={() => this.removeGame(this.props.gameid)}
            inverted
          >
            <Icon name="remove" /> Delete Game
          </Button>
          <Button color="green" inverted>
            <Icon name="checkmark" /> Join
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
