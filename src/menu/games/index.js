import React from "react";
import { Button, Card, Divider, Dimmer, Loader, Image, Segment  } from 'semantic-ui-react'
import {GameDetails} from "./game-details/index"
export class GameCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            games:[],
            loading: true,
            error: null,
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        fetch("/plays.json")
            .then(resp=>resp.json())
            .then(resp=>
               this.setState({
                    games: resp,
                    loading:false
               })) 
            .catch(error=>this.setState({
                error:"err occ"
            }))  
    }
    displayGameKind(){
            return(this.state.games.map(game=>
    <Card key={game.id}>
      <Card.Content>
        <Card.Header textAlign="center">{game.title}</Card.Header>
        <Divider/>
            <Card.Meta>{game.localization.city}</Card.Meta>
        <Card.Description>
              
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
         <GameDetails 
          title={game.title}
          localization={game.localization.place}
          date={game.date}
          playerMax={game.palyer.max}  
          playerCur={game.palyer.current}  
          reqLvl={game.ReqLevelID}
          descript={game.Description}
         />
        </div>
      </Card.Content>
    </Card> 
     ))
    }
    render(){
      if(this.state.loading){
        return(
          <Segment>
          <Dimmer active>
            <Loader size='massive'>Loading</Loader>
          </Dimmer>
    
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
        )
      }else return(
        
            <div>
                <Card.Group margin="12px">
                  {this.displayGameKind()}
                </Card.Group>
            </div>
        )
    }
}