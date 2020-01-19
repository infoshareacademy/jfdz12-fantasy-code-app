import React from 'react';

import Functions from './Functions';
import UsersChart from './UsersChart';
import GamesChart from './GamesChart';
import './Home.css';

export default function Home() {
    return (
        <div className='Home'>
            <div className='Home__Welcome'>Welcome to Board App! Feel free to look around!</div>
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
    );
};