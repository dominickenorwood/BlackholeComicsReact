import React, { Component } from 'react';
import axios from 'axios';

import classes from './Comic.css';

class Comic extends Component {
    state = {
        valid: true,
        errors: [],
        success: [],
        selectedFile: null
    }

    fileChangeHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    uploadHandler = event => {
        console.log(this.state.selectedFile);
        axios.post('https://blackhole-comics.appspot.com', this.state.selectedFile)
            .then(response => {
                console.log('Uploaded Image')
                console.log(response);
            })
            .catch(error => console.log('[Error]', error.response))
    }

    render() {

        return (
            <div className={ classes.Layout }>
                <input type="file" onChange={ this.fileChangeHandler } />
                <button onClick={ this.uploadHandler }>Upload!</button>
            </div>
        )
    }
}

export default Comic;