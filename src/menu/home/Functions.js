import React from 'react';
import { Reveal, Image } from 'semantic-ui-react';

export default function Functions () {
    return (
        <div className='Home__Functions--container'>
            <div className='Home__Functions--items'>
                <Reveal animated='move'>
                    <Reveal.Content visible>
                        <h3 className='Home__Functions--header--1'>Join open games</h3>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='medium' />
                        <p className='Home__Functions--description--1'>Browse, join, appear and play!</p>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <h3 className='Home__Functions--description--2'>Browse by game type or title, city or venue. Check who's already in, join if you're deemed worthy, and have fun playing!</h3>
                    </Reveal.Content>
                </Reveal>
                <Reveal animated='move'>
                    <Reveal.Content visible>
                        <h3 className='Home__Functions--header--2'>Open your own game</h3>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='medium' />
                        <p className='Home__Functions--description--2'>Set up table and invite players!</p>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <h3 className='Home__Functions--description--1'>Pick game title, set number and required level of players, pick date location, reserve table, invite friends or wait for new ones to make. And have fun playing!</h3>
                    </Reveal.Content>
                </Reveal>
                <Reveal animated='move'>
                    <Reveal.Content visible>
                        <h3 className='Home__Functions--header--1'>Make friends</h3>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='medium' />
                        <p className='Home__Functions--description--1'>Rate players and mark friends!</p>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <h3 className='Home__Functions--description--2'>Browse through our registered users database to mark friends, rate players and invite opponents to your open games!</h3>
                    </Reveal.Content>
                </Reveal>
                <Reveal animated='move'>
                    <Reveal.Content visible>
                        <h3 className='Home__Functions--header--2'>Find game-friendly spots</h3>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='medium' />
                        <p className='Home__Functions--description--2'>Reserve a table for your game!</p>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                    <h3 className='Home__Functions--description--1'>Tired of looking for game-friendly pub? Browse through our database, select venues and book tables for your games!</h3>
                    </Reveal.Content>
                </Reveal>
            </div>
        </div>
    );
};