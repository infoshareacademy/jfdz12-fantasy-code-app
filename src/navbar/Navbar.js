import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Menu, Segment } from 'semantic-ui-react'
import Links from './Links';

export default class MenuExampleTabularOnRight extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Grid>
                <Grid.Column stretched width={12}>
                    <Segment>
                        <Links />
                    </Segment>
                </Grid.Column>

                <Grid.Column width={4}>
                    <Menu fluid vertical tabular='right' size='massive'>
                        <Link to="/">
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                            />
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
                    </Menu>
                </Grid.Column>
            </Grid>
        )
    }
}