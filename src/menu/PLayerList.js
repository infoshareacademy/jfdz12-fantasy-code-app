import React from 'react';
import { Card, Icon, Image, Segment, Dimmer, Loader, Container } from 'semantic-ui-react';
import PlayersFilter from './player-list/PlayersFilter';


export class PlayerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playersList: [],
            loading: true,
            error: null,
            value: '',
        }
    }
    handleSubmit = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData() {
        // https://fantasyapp-9473b.firebaseio.com
        fetch("https://fantasyapp-9473b.firebaseio.com/players.json")
            .then(resp => resp.json())
            .then(data => {
                const keys = Object.keys(data);
                const formattedData = keys.map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                })
                this.setState({
                    playersList: formattedData,
                    loading: false,
                })
            })
            .catch(error => this.setState({
                error: "err occ",
                loading: false,
            }));


    };

    displayPlayersList() {
        return (
            this.state.playersList
                .filter(player =>
                    player.nick.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase()))
                .map(player =>
                    <Card key={player.id}>
                        <Image src={player.avatar} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{player.nick}</Card.Header>
                            <Card.Meta>
                                {player.levelID}
                            </Card.Meta>
                            <Card.Description>
                                {player.nick[0].toUpperCase() + player.nick.slice(1)}
                                is a {player.class[0].toLowerCase() + player.class.slice(1) + " "}
                                living in {player.city}.
                  </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui grid'>
                                <a>
                                    <Icon name='user' />
                                    {player.friends}
                                </a>
                                <a>
                                    <Icon name='heart' color="red" />
                                </a>
                            </div>
                        </Card.Content>
                    </Card>
                ))
    }
    render() {
        if (this.state.loading) {
            return (
                <Segment>
                    <Dimmer active>
                        <Loader size='massive'>Loading</Loader>
                    </Dimmer>

                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Segment>
            )
        } else return (
            <div>
                <Container>
                    <PlayersFilter onChange={this.handleSubmit} />
                </Container>

                <Segment inverted color="black">
                    <Container fluid>
                        <Card.Group className="ui centered rgrid" textAlign="center">
                            {this.displayPlayersList()}
                        </Card.Group>
                    </Container>
                </Segment>
            </div>
        )
    }
}