import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Form } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Home from '../home/Home';
import { UserContext } from '../../context/UserContext';



export const LoginPage = () => {
    const context = useContext(UserContext);

    if (context.redirectToReferrer === true) {
        return <Redirect exact to="/" component={Home} />
    }

    return (
        <div>
            <Form onSubmit={context.handleSubmit}>
                <Form.Input
                    // error={{ content: 'Please enter your first name', pointing: 'below' }}
                    fluid
                    onChange={context.handleChange}
                    label='Email'
                    placeholder='Email'
                    id='form-input-email'
                    input='email'
                    name='email'
                />
                <Form.Input
                    // error={{ content: 'Please enter your first name', pointing: 'below' }}
                    fluid
                    onChange={context.handleChange}
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
};