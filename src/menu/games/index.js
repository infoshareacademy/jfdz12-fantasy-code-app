import React from "react";
import {  Card, Dimmer, Loader, Image, Segment, Container  } from 'semantic-ui-react'

import GameCard from "./game-card/GameCard.js";

export class GameCardColection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            games:[],
            loading: true,
            error: null,
            value: ''
        }
       
    }
    handleSubmit=(event)=>{
      this.setState({
        value: event.target.value
      })
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
            return(this.state.games.filter(
              game=>game.title.includes(this.state.value)
              
            ).map(game=>
              <GameCard
              key={game.id}
              title={game.title}
              localization={game.localization.place}
              date={game.date}
              playerMax={game.palyer.max}  
              playerCur={game.palyer.current}  
              reqLvl={game.ReqLevelID}
              descript={game.Description}
              
              />
                  )
            )}
    render(){
      if(this.state.loading){
        return(
          <Segment>
          <Dimmer active>
            <Loader size='massive'>Loading</Loader>
          </Dimmer>
        </Segment>
        )
      }else return(
        
            <div><Container>
                  <form style={{padding:"10px"}} >
                  <label>
                    Search:
                  <input onChange={this.handleSubmit}></input>
                  </label>
                  
                </form>
            </Container>
                
                <Container >
                <Card.Group margin="12px">
                  {this.displayGameKind()}
                </Card.Group>
                </Container>
            </div>
        )
    }
}