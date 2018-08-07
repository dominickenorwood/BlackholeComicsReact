const ValidateForm = (value, rules) => {
    let valid = true;

    if(rules.required){
        valid = value.trim() !== '' && valid;
    };

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        valid = pattern.test(value) && valid;
    };

    if(rules.minLength){
        valid = value.length >= rules.minLength && valid;
    };

    return valid;
}

export default ValidateForm;