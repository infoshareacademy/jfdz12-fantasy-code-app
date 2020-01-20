import React from 'react';
import { Container } from 'semantic-ui-react';

import Functions from './Functions';
import UsersChart from './UsersChart';
import GamesChart from './GamesChart';
import './Home.css';

export default function Home() {
    return (
        <Container>
            <div className='Home'>
                <div className='Home__Welcome'>
                    <h1>Welcome to Board App!</h1>
                    <h2>Game yourself!</h2>
                </div>
                <div>
                    <Functions />
                </div>
                <div className='Home__Charts--container'>
                    <div className='Home__Charts--items'>
                        <GamesChart />
                    </div>
                    <div className='Home__Charts--items'>
                        <UsersChart />
                    </div>
                </div>
                <div style={{visibility: 'hidden'}}>m</div>
            </div>
        </Container>
    );
};