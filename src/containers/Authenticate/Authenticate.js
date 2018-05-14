import React, { Component } from 'react';

import Aux from '../../hoc/Auxillary/Auxillary';
import Login from '../../components/Users/Login/Login';
import Register from '../../components/Users/Register/Register';

class Authenticate extends Component {

    state = {};

    componentDidMount(){

    }

    render() {
        return(
            <Aux>
                <div>Authenticate User</div>
                <Login />
                <Register />
            </Aux>
        );
    }
}

export default Authenticate;