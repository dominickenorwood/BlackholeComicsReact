import React, { Component } from 'react';
import { connect } from 'react-redux';

import SiteData from '../../components/User/Account/SiteData/SiteData';
import PhysicalData from '../../components/User/Account/PhysicalData/PhysicalData';
import * as actions from '../../store/actions';
import classes from './User.css';

class User extends Component {

    submitHandler = event => {
        event.preventDefault();
        console.log('Update User')
    }

    componentDidMount(){
        console.log('[User Props]', this.props);
        this.props.getUser(this.props.token, this.props.userId);
    }

    render() {
        return (
            <div className={classes.Account}>
                <SiteData
                    avatar={ this.props.user.avatar }
                    username={ this.props.user.username }
                    email={ this.props.user.email }
                    password={ null }
                    story={ this.props.user.story } />
                <PhysicalData />
                <button onClick={ this.submitHandler } className={ classes.Button }>Submit</button>
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
        getUser: (token, userId) => dispatch(actions.getUser(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);