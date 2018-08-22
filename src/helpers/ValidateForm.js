const ValidateForm = (value, rules, name) => {
    let valid = true;
    const errors = [];

    if(rules.required){
        valid = value.trim() !== '' && valid;
        errors.push({ message : `${ name } is required.`})
    };

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        valid = pattern.test(value) && valid;
        errors.push({ message : `${ name } is not a valid email.`})
    };

    if(rules.minLength){
        valid = value.length >= rules.minLength && valid;
        errors.push({ message : `${ name } must be more then ${ rules.minLength } characters.`})
    };

    return {
        valid,
        errors
    }
}

export default ValidateForm;