import React from "react"
import { Segment, Form, Radio} from "semantic-ui-react"
import SemanticDatepicker from "react-semantic-ui-datepickers";


export default class GameFilter extends React.Component{
render(){
    return(
      <Segment className="ui left grid" inverted color="blue">
        <Form>
          <Form.Group widths="equal">
            <Form.Input  label="Search by Name" placeholder="Game " onChange={this.props.sortByName}/>
            <Form.Input   label="Search by City" placeholder="City" onChange={this.props.sortByCity}/>
            <SemanticDatepicker label="Search By Date"onChange={this.props.onChange}/>
            <Radio toggle onChange={this.props.onSlide}/>
           
          </Form.Group>
        </Form>
      </Segment>
        
    )
    }
}