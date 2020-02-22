import React from 'react';

export class SignOut extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    loginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
                console.log(user)
            })
        }
        catch (error) {
            console.log(error.toString())
        }
    }

    signOutUser = () => firebase.auth().signOut().then(function () {
        console.log(user)
    }).catch(function (error) {
        console.log(error.toString())

    });

    render() {
        <button type="button" onPress={() => this.signOutUser()}>
            Sign Out
        </button>
    }
}

export default SignOut;