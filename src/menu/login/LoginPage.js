import React from 'react';
import firebase from 'firebase';
import { Form, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";





export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        const email = this.state.email;
        const password = this.state.password;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

    }

    componentDidMount() {
        const authRef = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user)
            } else {
                console.log('not logged')
            }
        });

        this.setState({
            ref: authRef
        })
    }

    componentWillUnmount() {
        if(this.state.ref) {
            this.state.ref();
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                        fluid
                        onChange={this.handleChange}
                        label='Email'
                        placeholder='Email'
                        id='form-input-email'
                        input='email'
                        name='email'
                    />
                    <Form.Input
                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                        fluid
                        onChange={this.handleChange}
                        label='Password'
                        placeholder='Password'
                        id='form-input-password'
                        input='password'
                        name='password'
                    />
                    <Form.Button
                        content='Login'
                        type="submit"
                    />

                    <Link to="/register">
                        Not registered yet?
                    </Link>
                </Form>
            </div>
        )
    }
}