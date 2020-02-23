import React from 'react';
import {Redirect} from 'react-router';
import { Form } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Home from '../home/Home';





export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        if (this.props.redirectToReferrer === true) {
            return <Redirect exact to="/" component={Home}/>
        }
        
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Input
                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                        fluid
                        onChange={this.props.handleChange}
                        label='Email'
                        placeholder='Email'
                        id='form-input-email'
                        input='email'
                        name='email'
                    />
                    <Form.Input
                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                        fluid
                        onChange={this.props.handleChange}
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