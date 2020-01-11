import React from "react";
import { Button, Card } from 'semantic-ui-react'

 export class GameCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            games:[],
            loading: false,
            error: null,
            expanded: false
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
                    games: resp
               })) 
            .catch(error=>this.setState({
                error:"err occ"
            }))  
    }

    displayGameKind(){
            return(this.state.games.map(game=>
    <Card>
      <Card.Content>
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          {game.title}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='blue'>
            Details
          </Button>
        </div>
      </Card.Content>
    </Card> 
     ))
    }
    render(){
        return(
            <div>
                <Card.Group margin="12px">
                  {this.displayGameKind()}
                </Card.Group>
                  
                  
            </div>
        )
    }
}







