// Jako użytkownik, chcę móc zobaczyć produkty oznaczone jako moje ulubione, na osobnej liście z której mogę przejść do widoku produktu.

// co trzeba zrobic - nazwe folderu games zmienic na sessions jako rozgrywki a nazwe games uzyc do folderu w ktorym beda strony profilowe gier

import React from 'react';
import {Link} from 'react-router-dom';

const games = [1, 2, 3];
const allGames = [
    {
        "gameID":1,
        "gameName":"bitewna"
    },
    {
        "gameID":2,
        "gameName":"karciana"
    },
    {
        "gameID":3,
        "gameName":"planszowa"
    },
    {
        "gameID":4,
        "gameName":"imprezowa"
    }
];

function displayGames() {
    return allGames
        .filter(game => games.includes(game.gameID))
        .map(game => (
        <div key={game.toString()}>
            {}
            <Link>
                {game}
            </Link>
        </div>
    ));
}



export function FavouriteListOfGames(){
    return (
        <div>
            {displayGames()}
        </div>
    )
}