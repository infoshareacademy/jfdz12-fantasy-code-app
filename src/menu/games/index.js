import React from "react";
import {  Card, Dimmer, Loader, Segment, Container  } from 'semantic-ui-react'
import GameCard from "./game-card/GameCard.js";
import GameFilter from "./game-filter/GameFilter.js";


export class GameCardColection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            games:[],
            loading: true,
            error: null,
            value:"",
        }
    }
    handleSubmit=(event)=>{
      this.setState({
        value: event.target.value
      })
    }
    componentDidMount(){
        this.fetchPlaysData()
    }
    fetchPlaysData(){
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
            return(
              this.state.games
              .filter(
                game=>game.title.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase()))
              .map(
                game=>
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
            <div>
                <Container>
                <GameFilter onChange={this.handleSubmit}/>
                </Container>
                <Segment inverted color="blue">
                  <Container fluid>
                  <Card.Group className="ui centered rgrid" textAlign="center">
                    {this.displayGameKind()}
                  </Card.Group>
                  </Container>
                </Segment>
            </div>
        )
    }
}