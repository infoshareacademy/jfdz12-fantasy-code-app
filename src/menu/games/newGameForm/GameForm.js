import React from "react";
import { Form } from 'semantic-ui-react'

const optionsPlayers = [
    { key: '1', text: '1', value: 1 },
    { key: '2', text: '2', value: 2 },
    { key: '3', text: '3', value: 2 },
    { key: '4', text: '4', value: 3 },
    { key: '5', text: '5', value: 4 },
    { key: '6', text: '6', value: 5 },
    { key: '7', text: '7', value: 6 },
    { key: '8', text: '8', value: 7 },
    { key: '9', text: '9', value: 8 },
  ];

const optionsReqLVL= [
    { key: '1', text: '1', value: 1 },
    { key: '2', text: '2', value: 2 },
    { key: '3', text: '3', value: 2 },
    { key: '4', text: '4', value: 3 },
  ]  


  const initialState = {
    title:"",
    localization: {city:"",place:""},
    date:"",
    palyer:{max:0,current:0},
    ReqLevelID: 0,
    description:""
  }

export default class GameForm extends React.Component {
  state = {
      ...initialState
};

handleOnChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
};

handleLocalizationOnChange = (event) => {
    this.setState({
        localization: {...this.state.localization, [event.target.name]: event.target.value}
    })
};

handlePlayerOnChange = (_, event) => {
    console.log(event.value)
    console.log(event.name)
    this.setState({
        palyer: {...this.state.palyer, [event.name]: event.value}
    })
};

handleReqLVLOnChange=(_,event)=>{
    this.setState({
        ReqLevelID: event.value
    })
}

handleonClick=(event)=>{
    event.preventDefault();
    const formattedFormData = {
        ...this.state,
        palyer: {max: parseInt(this.state.palyer.max), current: parseInt(this.state.palyer.current)}
    };
    fetch("https://fantasyapp-9473b.firebaseio.com/plays.json",{
        method: "POST",
        body: JSON.stringify(formattedFormData)
    })
    .then(()=>{
        this.setState(initialState)
        this.props.onAdd()
    })
    .catch(err=>err.message)
}

  render() {
    const { title, localization, date, palyer, ReqLevelID, description } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="Game" placeholder="Game name" name={"title"} value={title} onChange={this.handleOnChange}/>
          <Form.Input fluid label="City" placeholder="City" name={"city"} value={localization.city} onChange={this.handleLocalizationOnChange}/>
          <Form.Input fluid label="Localization" name={"place"} placeholder="Pub, Bar , House" value={localization.place} onChange={this.handleLocalizationOnChange}/>
          <Form.Input fluid label="Date" name={"date"} placeholder="YYYY-MM-DD" value={date} onChange={this.handleOnChange}/>
          <Form.Select
            fluid
            name={"max"}
            label='Max players'
            options={optionsPlayers}
            placeholder='1'
            value={palyer.max}
            onChange={this.handlePlayerOnChange}
          />
        <Form.Select
            fluid
            name={"max"}
            label='Required level'
            options={optionsReqLVL}
            placeholder='1'
            value={ReqLevelID}
            onChange={this.handleReqLVLOnChange}
          />
        </Form.Group>
        <Form.TextArea name={"description"}  label="Descripton" placeholder="Game Description" value={description} onChange={this.handleOnChange}/>
        <Form.Button onClick={this.handleonClick}>Create new Game</Form.Button>
      </Form>
    );
  }
}
