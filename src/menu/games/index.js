import React from "react";
import {  Card, Dimmer, Loader, Segment, Container  } from 'semantic-ui-react'
import GameCard from "./game-card/GameCard.js";
import GameFilter from "./game-filter/GameFilter.js";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export class GameCardColection extends React.Component{
    constructor(props){
        super(props)
        this.state={
            games:[],
            loading: true,
            error: null,
            sortByName:"",
            sortByCity:"",
            sortByPlayerCount:"",
            date:0
        }
    }
    handleSortByName=(event)=>{
      this.setState({
        sortByName: event.target.value
      })
    }
    handleSortByCity=(event)=>{
      this.setState({
        sortByCity: event.target.value
      })
    }
    handleDateChange =(event, date)=> {
      this.setState({date: date.value});
    };
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
                game=>game.title.toLowerCase().includes(this.state.sortByName.toLowerCase()))
              .filter(game=>game.localization.city.toLowerCase().includes(this.state.sortByCity.toLowerCase()))
              .filter(game=> new Date(game.date)===this.state.date)
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
                <GameFilter 
                sortByName={this.handleSortByName}
                sortByCity={this.handleSortByCity}
                />
                <SemanticDatepicker onChange={this.handleDateChange}/>
                {console.log(this.state.date)}
                <Segment inverted color="blue">
                  <Container fluid>
                  <Card.Group className="ui centered grid" textAlign="center">
                    {this.displayGameKind()}
                  </Card.Group>
                  </Container>
                </Segment>
            </div>
        )
    }
}