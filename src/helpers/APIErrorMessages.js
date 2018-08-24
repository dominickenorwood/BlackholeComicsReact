const apiErrorMessages = message => {
    switch(message){
        case('EMAIL_NOT_FOUND') : return 'Email was not found, please register if not a memeber.';
        case('INVALID_PASSWORD') : return 'Invalid password please try again!';
        default: return 'Something went wrong, please try again!'
    }
}

export default apiErrorMessages;