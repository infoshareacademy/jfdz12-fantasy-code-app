import React, { Component, useContext } from 'react';
import { Link } from "react-router-dom";
import { Menu, Segment, Container, Icon, Button, Image } from 'semantic-ui-react'
import Links from './Links';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const context = useContext(UserContext);

    const handleItemClick = (e, { name }) => {
        context.handleItemClick(name);
    };

    const componentDidMount = () => {
        context.componentDidMount();
    };

    console.log(context)
    return (
        <Container>
            <Menu pointing secondary size='massive' color='blue'>
                <Link to="/">
                    <Menu.Item
                        name='home'
                        active={context.activeItem === 'home'}
                        onClick={context.handleItemClick}
                    >
                        <Icon name='home' />
                    </Menu.Item>
                </Link>
                <Link to="/games">
                    <Menu.Item
                        name='games'
                        active={context.activeItem === 'games'}
                        onClick={context.handleItemClick}
                    />
                </Link>
                <Link to="/players">
                    <Menu.Item
                        name='players'
                        active={context.activeItem === 'players'}
                        onClick={() => context.handleItemClick}
                    />
                </Link>
                <Menu.Menu position='right' color='blue'>
                    {/* <Button inverted onClick={() => context.checkUser}>Check User</Button> */}

                    {/* <Auth>
                            <Link to="/login">
                                <Menu.Item
                                    name='login'
                                    active={activeItem === 'login'}
                                    onClick={this.handleItemClick}
                                />
                            </Link>
                        </Auth> */}

                    {
                        !!context.state.user
                            ? <>
                                <Image src={context.state.user.avatar} avatar />
                                {/* <Link to='/profile'>
                                        <Menu.Item name={`Hello ${this.state.user.nick}`} />
                                    </Link> */}
                                <Link to="/profile">
                                    <Menu.Item
                                        name={`Hello ${context.state.user.nick}`}
                                        active={context.activeItem === 'profile'}
                                        onClick={context.handleItemClick}
                                    />
                                </Link>
                                <Button inverted onClick={context.handleSignOut}>Sign out</Button>

                            </>
                            :
                            <Link to="/login">
                                <Menu.Item
                                    name='login'
                                    handleSubmit={context.handleSubmit}
                                    redirectToReferrer={context.state.redirectToReferrer}
                                    user={context.state.user}
                                    active={context.activeItem === 'login'}
                                    onClick={context.handleItemClick}
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



