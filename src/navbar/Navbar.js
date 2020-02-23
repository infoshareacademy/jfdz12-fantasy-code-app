import React, { Component, useContext } from 'react';
import { Link } from "react-router-dom";
import { Menu, Segment, Container, Icon, Button, Image } from 'semantic-ui-react'
import Links from './Links';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const context = useContext(UserContext);

    const handleItemClick = (e, { name }) => {
        context.handleItemClick(e, { name });
    };

    const componentDidMount = () => {
        context.componentDidMount();
    };

    return (
        <Container>
            <Menu pointing secondary size='massive' color='blue'>
                <Link to="/">
                    <Menu.Item
                        name='home'
                        active={context.activeItem === 'home'}
                        onClick={handleItemClick}
                    >
                        <Icon name='home' />
                    </Menu.Item>
                </Link>
                <Link to="/games">
                    <Menu.Item
                        name='games'
                        active={context.activeItem === 'games'}
                        onClick={handleItemClick}
                    />
                </Link>
                <Link to="/players">
                    <Menu.Item
                        name='players'
                        active={context.activeItem === 'players'}
                        onClick={() => handleItemClick}
                    />
                </Link>
                <Menu.Menu position='right' color='blue'>

                    {
                        !!context.user
                            ? <>
                                <Image src={context.user.avatar} avatar />
                                <Link to="/profile">
                                    <Menu.Item
                                        name={`Hello ${context.user.nick}`}
                                        active={context.activeItem === 'profile'}
                                        onClick={handleItemClick}
                                    />
                                </Link>
                                <Button inverted onClick={context.handleSignOut}>Sign out</Button>

                            </>
                            :
                            <Link to="/login">
                                <Menu.Item
                                    name='login'
                                    handleSubmit={context.handleSubmit}
                                    redirectToReferrer={context.redirectToReferrer}
                                    active={context.activeItem === 'login'}
                                    onClick={handleItemClick}
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

export default Navbar;



