import React from "react"


export default class GameFilter extends React.Component{
render(){
    return(
        <form style={{padding:"10px"}} >
        <label>
          Search: 
        <input onChange={this.props.onChange}></input>
        </label>
      </form>
    )
}
}