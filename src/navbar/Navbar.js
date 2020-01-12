import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

export default () => (
    <Menu inverted>
        <Link to="/">
            <Menu.Item
                name='home'
            />
        </Link>
        <Link to="/games">
            <Menu.Item
                name='games'
            />
        </Link>
    </Menu>
)