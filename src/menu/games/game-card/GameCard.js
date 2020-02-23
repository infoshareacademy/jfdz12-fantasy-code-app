import React from "react";
import {Card, Divider,Button} from "semantic-ui-react";
import {GameDetails} from "../game-details/index.js";

export default function GameCard(props){
    return(
        <Card >
        <Card.Content>
          <Card.Header textAlign="center">{props.title}</Card.Header>
          <Divider/>
              <Card.Meta>{props.localization}</Card.Meta>
          <Card.Description>
                
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
           <GameDetails 
            title={props.title}
            localization={props.localization}
            date={props.date}
            playerMax={props.playerMax}  
            playerCur={props.playerCur}  
            reqLvl={props.reqLvl}
            descript={props.descript}
           />
          </div>
        </Card.Content>
      </Card>
    )
}