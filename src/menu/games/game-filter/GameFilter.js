import React from "react"
import { Segment, Form, Radio,} from "semantic-ui-react"
import SemanticDatepicker from "react-semantic-ui-datepickers";
import NewGameFormModal from "../newGameForm/newGameFromModal";
import "./filters.css"


export default class GameFilter extends React.Component{
render(){
    return(
      <Segment  inverted color="blue">
        <Form style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
          <Form.Group widths="equal">
            <Form.Input  label="Search by Name" placeholder="Game name" onChange={this.props.sortByName}/>
            <Form.Input   label="Search by City" placeholder="Location" onChange={this.props.sortByCity}/>
            <SemanticDatepicker label="Search By Date"onChange={this.props.onChange}/>
            <div className="radio">
              <span className="radio-label">Hide Full games</span>
              <Radio toggle onChange={this.props.onSlide}/>
            </div>
          </Form.Group>
          
        </Form>
        <div className={"button_modal-centering"}>
        <NewGameFormModal  onAdd={this.props.onAdd}/>
        </div>
        
      </Segment>
    )
    }
}