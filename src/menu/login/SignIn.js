import React from 'react';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'
import firebase from "firebase";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class Sign extends React.Component {
    state = {
        email: '',
        password: '',
        redirect: false,
        levelId: 1,
        class: 'Novice',
        friends: 0
    };

    handleOnChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    };

    // once trzeba uzyc zeby sciagnac URL
    // var userId = firebase.auth().currentUser.uid;
    // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   // ...
    // });

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
                        this.setState({ redirect: true })
                    })
            })
    }

    handleOnClick = (event) => {
        event.preventDefault();

        this.isSignUp() ? this.signUp() : this.signIn();
    };

    isSignUp = () => {
        return this.props.match.path.includes('sign-up');
    };

    signIn = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    redirect: true
                })
            })
    };

    signUp = () => {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    redirect: true
                })
            })
    };

    render() {
        const { email, password, redirect } = this.state;
        console.log(this.state)

        if (redirect) {
            return <Redirect to={'/'} />
        }

        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        {this.isSignUp() ? 'Welcome stranger' : 'Log-in to your account'}
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input
                                fluid icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                                value={email}
                                name='email'
                                onChange={this.handleOnChange}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={password}
                                name='password'
                                onChange={this.handleOnChange}
                            />
                            {this.isSignUp()
                                ?
                                <>
                                    <Form.Input
                                        // error={{ content: 'Please enter your first name', pointing: 'below' }}
                                        onChange={this.handleOnChange}
                                        name='nick'
                                        placeholder='Nick'
                                        id='form-input-nick'
                                    />
                                    <Form.Input
                                        // error='Please enter your last name'
                                        fluid
                                        onChange={this.handleOnChange}
                                        name='avatar'
                                        placeholder='Avatar URL'
                                    />
                                    <Form.Input
                                        // error='Please enter your last name'
                                        fluid
                                        onChange={this.handleOnChange}
                                        name='city'
                                        placeholder='City'
                                    />
                                    <Form.Checkbox
                                        label='I agree to the Terms and Conditions'
                                    // error={{
                                    //     content: 'You must agree to the terms and conditions',
                                    //     pointing: 'left',
                                    // }}
                                    /></>
                                : 'Log-in to your account'
                            }

                            {this.isSignUp()
                                ? <Button color='blue' fluid size='large' type='submit'>
                                    Register
                            </Button>
                                : <Button color='blue' fluid size='large' onClick={this.handleOnClick}>
                                    Login
                            </Button>}

                        </Segment>
                    </Form>
                    <Message>
                        {this.isSignUp()
                            ? <>Already register? <Link to="/login">Sign In</Link></>
                            : <>New to us? <Link to="/register">Sign Up</Link></>}

                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Sign;