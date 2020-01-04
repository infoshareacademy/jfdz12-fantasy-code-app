import React from "react";

import { withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Grid, Container} from '@material-ui/core';


 class GameCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            games:[],
            loading: false,
            error: null,
            expanded: false
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        fetch("/plays.json")
            .then(resp=>resp.json())
            .then(resp=>
               this.setState({
                    games: resp
               })) 
            .catch(error=>this.setState({
                error:"err occ"
            }))  
    }

    handleExpandClick = () => {
        this.setState((prevState)=>({expanded:!prevState.expanded}));
      };
      

    
    displayGameKind(){
        const classes = this.props.classes
        console.log(this.state.games)
        console.log(classes)
            return(this.state.games.map(
                game=>
                <Grid  item xs={3}>
                <Card key={game.id} className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="game" className={classes.avatar}>
                      {game.id}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={game.title}
                  subheader={game.date}
                />
               
                <CardContent>
                    <ul>
                      <li>
                        Gracze: {game.palyer.current}/ {game.palyer.max}
                      </li>
                      <li>
                        Wymagany poziom: {game.ReqLevelID}
                      </li>
                      <li>
                        Miasto: {game.localization.city}
                      </li>
                      <li>
                        Miejsce: {game.localization.place}
                      </li>
                    </ul>
                    
                  <Typography variant="body2" color="textSecondary" component="p">
                    
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton>
                    <ExpandMoreIcon/>
                  </IconButton>
                </CardActions>
              </Card>
              </Grid>
            )
        )
    }
    render(){
        return(
            <div>
                {this.state.error?<p>Error Occured</p>:null}
                <Container maxWidth="xl">
                <Grid  container
                  direction="row"
                  justify="center"
                  alignItems="center" 
                  spacing={2}>
                    <Container maxWidth="xl"></Container>
                  {this.displayGameKind()}
                  </Grid>
                  </Container>
            </div>
        )
    }
}

export default  withStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }))(GameCard)





