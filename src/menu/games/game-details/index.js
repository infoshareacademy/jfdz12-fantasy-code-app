import React from "react";
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react'


export class GameDetails extends React.Component{
    render(){
        return(
            
            <Modal trigger={<Button  color="orange" size="large">Details</Button>} basic size='small' closeIcon>
                <Header icon='chess' content='Game Details' />
                    <Modal.Content>
                        <Container fluid>
                       <h3>
                       Title:  {this.props.title}
                       </h3>
                        <p>
                        Localization:  {this.props.localization}
                        </p>
                        <p>
                        Date:  {this.props.date}
                        </p>
                        <p>
                           Players:  {this.props.playerCur} /{this.props.playerMax}
                        </p>
                        <p>
                        ReQuired Level:  {this.props.reqLvl}
                        </p>
                        <p>
                        {this.props.descript}
                        </p>
                        </Container>
                    </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted>
                        <Icon name='remove' /> Report
                    </Button>
                    <Button color='green' inverted>
                        <Icon name='checkmark' /> Join
                    </Button>
                </Modal.Actions>
            </Modal>
                  
           
        )
    }
}
