import React from 'react';
import firebase from "firebase";


export const UserContext = React.createContext(null);

class UserContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: 'home',
            user: null,
            redirectToReferrer: false
        }

        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user })
        });
        const authRef = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user)
            } else {
                console.log('not logged')
            }
        });

        this.setState({
            ref: authRef
        });
    }

    componentWillUnmount() {
        if(this.state.ref) {
            this.state.ref();
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    handleSignOut = () => {
        firebase.auth().signOut();
    };
    
    handleSubmit = () => {
        const email = this.state.email;
        const password = this.state.password;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
        this.setState({
            redirectToReferrer: true
        });
        console.log('proba logowania')
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    checkUser = () => {
        console.log(this.state.user)
    }

    getAvatarUrl = () => {
        if (this.state.user) {
            firebase.database().ref(`players/${this.state.user.uid}/avatar`).once('value')
                .then(value => {
                    this.setState({
                        url: value
                    })
                })
                .then(() => {
                    console.log(this.state.url)
                })
        }
    };

    render() {
        const context = {
            activeItem: this.state.activeItem,
            user: this.state.user,
            redirectToReferrer: this.state.redirectToReferrer,
            email: this.state.email,
            password: this.state.password,
            componentDidMount: this.componentDidMount,
            componentWillUnmount: this.componentWillUnmount,
            handleItemClick: this.handleItemClick,
            handleSignOut: this.handleSignOut,
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            checkUser: this.checkUser,
            getAvatarUrl: this.getAvatarUrl
        };
        return (
            <UserContext.Provider value={context}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserContextProvider;