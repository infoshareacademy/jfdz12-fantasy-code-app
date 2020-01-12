import React from "react";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


export class GameDetails extends React.Component{
    render(){
        return(
            
            <Modal trigger={<Button basic color="blue" size="large">Details</Button>} basic size='small'>
                <Header icon='chess' content='Game Details' />
                    <Modal.Content>
                        <p>
                        Title:  {this.props.title}<br/>
                        Localization:  {this.props.localization}<br/>
                        Date:  {this.props.date}<br/>
                        Players:  {this.props.playerCur} /{this.props.playerMax}<br/>
                        ReQuired Level:  {this.props.reqLvl}<br/>
                        {this.props.descript}

                        </p>
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
