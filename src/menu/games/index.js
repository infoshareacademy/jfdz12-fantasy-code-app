import React from "react";
import {  Card, Dimmer, Loader, Segment, Container  } from 'semantic-ui-react'
import GameCard from "./game-card/GameCard.js";
import GameFilter from "./game-filter/GameFilter.js";
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
            date:0,
            hideFullGames: true
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
    handleHideFullGames=()=>{
      this.setState(prevState=>({
        hideFullGames: !prevState.hideFullGames
      }))
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
                game=>game.title.toLowerCase().includes(this.state.sortByName.toLowerCase()))
              .filter(game=>game.localization.city.toLowerCase().includes(this.state.sortByCity.toLowerCase()))
              .filter(game=>{
                const pickedDate = new Date(this.state.date).getTime();
                const pickedGameTostring = pickedDate.toString().substring(0,6)
                const pickedGameBacktoNumber = parseInt(pickedGameTostring);
                const gameDate= new Date(game.date).getTime();
                const gameDateToString = gameDate.toString().substring(0,6);
                const gameDateBackToNumber = parseInt(gameDateToString);
                if(!pickedDate){
                  return this.state.games
                }else if(gameDateBackToNumber === pickedGameBacktoNumber)
                  return game
              })
              .filter(game=>{
                if(this.state.hideFullGames){
                  return this.state.games
                  }else if(game.palyer.max !== game.palyer.current){
                return game}
              })
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
                onChange={this.handleDateChange}
                onSlide={this.handleHideFullGames}
                />
                <Segment center inverted color="blue">
                  <Container >
                  <Card.Group className="ui centered grid" textAlign="center">
                    {this.displayGameKind()}
                  </Card.Group>
                  </Container>
                </Segment>
            </div>
        )
    }
}