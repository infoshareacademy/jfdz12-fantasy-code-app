import React from "react"
import { Segment, Form, } from "semantic-ui-react"



export default class GameFilter extends React.Component{
render(){
    return(
      <Segment className="ui left grid" inverted color="blue">
        <Form>
          <Form.Group widths="equal">
            <Form.Input  label="Search by Name" placeholder="Game " onChange={this.props.sortByName}/>
            <Form.Input   label="Search by City" placeholder="City" onChange={this.props.sortByCity}/>
          </Form.Group>
        </Form>
      </Segment>
        
    )
}
}