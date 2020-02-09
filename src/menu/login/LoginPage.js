import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";


export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Input
                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                        fluid
                        label='Nick'
                        placeholder='Nick'
                        id='form-input-nick'
                    />
                    <Form.Input
                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                        fluid
                        label='Password'
                        placeholder='Password'
                        id='form-input-password'
                    />
                    <Form.Button content='Login' />

                    <Link to="/register">
                        Not registered yet?
                    </Link>
                </Form>
            </div>
        )
    }
}