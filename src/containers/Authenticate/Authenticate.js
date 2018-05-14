import React, { Component } from 'react';

import Aux from '../../hoc/Auxillary/Auxillary';
import Login from '../../components/User/Login/Login';
import Register from '../../components/User/Register/Register';

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