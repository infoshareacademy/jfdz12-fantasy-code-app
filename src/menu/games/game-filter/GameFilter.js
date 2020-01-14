import React from "react"
import { Segment, Form } from "semantic-ui-react"
export default class GameFilter extends React.Component{
render(){
    return(
      <Segment inverted color="blue">
        <Form>
        <label>
          Search: 
        <input onChange={this.props.onChange}></input>
        
        </label>
        </Form>
      </Segment>
        
    )
}
}