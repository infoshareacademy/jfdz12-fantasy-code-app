import React from 'react';
import { Form } from 'semantic-ui-react';
import firebase from 'firebase';
import { Redirect } from "react-router-dom";



export class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            levelId: 1,
            class: 'Novice',
            friends: 0
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        const email = this.state.email;
        const password = this.state.password;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
                fetch(`https://fantasyapp-9473b.firebaseio.com/players/${response.user.uid}.json`, {
                    method: 'PUT',
                    body: JSON.stringify(this.state)
                })
                .then(() => {
                    this.setState({redirect: true})
                })
            })
        
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/players' />
        }

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                        onChange={this.handleChange}
                        name='nick'
                        label='Nick'
                        placeholder='Nick'
                        id='form-input-nick'
                    />
                    <Form.Input
                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                        onChange={this.handleChange}
                        name='email'
                        label='Email'
                        placeholder='Email'
                        id='form-input-email'
                        input='email'
                    />
                    <Form.Input
                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                        fluid
                        onChange={this.handleChange}
                        name='password'
                        label='Password'
                        placeholder='Password'
                        id='form-input-password'
                        input='password'
                    />
                    <Form.Input
                        // error='Please enter your last name'
                        fluid
                        onChange={this.handleChange}
                        name='avatar'
                        label='Avatar URL'
                        placeholder='Avatar URL'
                    />
                    <Form.Input
                        // error='Please enter your last name'
                        fluid
                        onChange={this.handleChange}
                        name='city'
                        label='City'
                        placeholder='City'
                    />
                    <Form.Checkbox
                        label='I agree to the Terms and Conditions'
                    // error={{
                    //     content: 'You must agree to the terms and conditions',
                    //     pointing: 'left',
                    // }}
                    />
                    <Form.Button
                        content='Submit'
                        type="submit"
                    />
                </Form>
            </div>
        )
    }
}