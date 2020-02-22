import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Segment, Container, Icon, Button, Image } from 'semantic-ui-react'
import Links from './Links';
import firebase from "firebase";

import avatarPlaceholder from '../menu/login/assets/avatar-placeholder.png'

export default class Navabar extends Component {
    state = {
        user: null,
        url: this.props.avatarUrl
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleSignOut = () => {
        firebase.auth().signOut();
    };

    // Jak to ograc?
    // `players/${this.state.user.uid}/avatar`
    getAvatarUrl = () => {
        if (this.state.user) {
            firebase.database().ref(`players/${this.state.user.uid}`)
            .once('value').then(snapshot =>
                snapshot.val() && this.setState({url: snapshot.val().avatar})
            )
                // .then(url => {
                    // this.setState({
                        // url
                    // })
                    // console.log
                // })
        }
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user })
        });
    }

    // || this.state.url !== this.props.avatarUrl

    componentDidUpdate() {
        if (!this.state.url ) {
            this.getAvatarUrl();
        }
    }

    render() {
        const { activeItem } = this.state
        console.log(this.state)

        return (
                <Container>
                    <Menu pointing secondary size='massive' color='blue'>
                        <Link to="/">
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                            >
                                <Icon name='home' />
                            </Menu.Item>
                        </Link>
                        <Link to="/games">
                            <Menu.Item
                                name='games'
                                active={activeItem === 'games'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                        <Link to="/players">
                            <Menu.Item
                                name='players'
                                active={activeItem === 'players'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                        <Menu.Menu position='right'>
                            {
                                !!this.state.user
                                ? <>
                                        <Image 
                                            src={this.state.url || avatarPlaceholder} 
                                            avatar 
                                        />
                                        <Link to='/profile'>
                                            <Menu.Item name={`Hello ${this.state.user.email}`} />
                                        </Link>
                                        <Button inverted onClick={this.handleSignOut}>Sign out</Button>

                                    </>
                                :  <Link to="/sign-in">
                                        <Menu.Item 
                                            name='sign-in'
                                            active={activeItem === 'sign-in'}
                                            onClick={this.handleItemClick}
                                        />
                                    </Link>
                            }

                        </Menu.Menu>
                    </Menu>

                    <Segment>
                        <Links />
                    </Segment>
                </Container>
        )
    }
}

// import React from 'react';
// import { Link } from "react-router-dom";


