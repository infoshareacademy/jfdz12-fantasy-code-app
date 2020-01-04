import React from 'react';
import UsersChart from './UsersChart';
import GamesChart from './GamesChart';

export function Home() {
    return (
        <div>
            <div>Welcome to Board App! Feel free to look around!</div>
            <div>
                <GamesChart />
                <UsersChart />
            </div>
        </div>
    );
};