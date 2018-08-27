import React, { Component } from 'react';

class Comic extends Component {
    state = {
        valid: true,
        errors: [],
        success: []
    }

    render() {

        return (
            <div>Add a comic</div>
        )
    }
}

export default Comic;