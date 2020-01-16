import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Segment, Input, Icon } from 'semantic-ui-react'
import Links from './Links';

export default class MenuSecondaryPointing extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary size='massive' color='blue'>
                    <Link to="/">
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        >
                            <Icon name='home'/>
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
                    <Menu.Menu position='right' color='blue'>
                        <Menu.Item>
                            <Input
                                transparent
                                icon={{ name: 'search', link: true }}
                                placeholder='Search...'
                            />
                        </Menu.Item>
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>

                <Segment>
                    <Links />
                </Segment>
            </div>
        )
    }
}