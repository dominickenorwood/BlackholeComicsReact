import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxillary/Auxillary';
import SiteData from '../../components/User/Account/SiteData/SiteData';
import PhysicalData from '../../components/User/Account/PhysicalData/PhysicalData';
import * as actions from '../../store/actions';
import classes from './User.css';

class User extends Component {
    state = {
        valid: true,
        errors: [],
        success: []
    }

    validateHandler = valid => {
        this.setState({ valid })
    }

    submitHandler = event => {
        event.preventDefault();
        if(this.state.valid){
            console.log('Update User');
            this.props.updateUserAPI( this.props.user );
        }
    }

    componentDidMount(){
        console.log( '[User Props]', this.props );

        if(!this.props.user.userId){
            this.props.getUser( this.props.token, this.props.userId );
        }
    }

    render() {
        let page = <div>Loading Account page...</div>;
        if(this.props.user.userId){
            page = <Aux>
                    <SiteData
                        user={ this.props.user }
                        validateHandler={ this.validateHandler }
                        update={ this.props.updateUser } />
                    <PhysicalData
                        user={ this.props.user }
                        validateHandler={ this.validateHandler }
                        update={ this.props.updateUser } />
                    <button onClick={ this.submitHandler } className={ classes.Button }>Submit</button>
                </Aux>
        }

        return (
            <div className={ classes.Account }>
                { page }
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('[User Map State]', state);
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: (token, userId) => dispatch(actions.getUser(token, userId)),
        updateUser: (user) => dispatch(actions.updateUser(user)),
        updateUserAPI: (user) => dispatch(actions.updateUserAPI(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);