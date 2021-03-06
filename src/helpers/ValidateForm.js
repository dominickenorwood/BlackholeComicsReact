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

    if(rules.username){
        let messages = '';

        if(value.length <= 8){
            messages = 'have more then 8 characters';
        }

        if(value.length >= 20){
            messages = 'have less then 20 characters';
        }

        const pattern = /^.{8,20}$/;
        valid = pattern.test(value) && valid;
        errors.push({ message : `${ name } must ${ messages }.` })
    }

    if(rules.isPassword){
        const messages = [];
        const patterns = {
            minLength: {
                pattern: /^(?=.{8,})/,
                message: 'be more then 8 characters'
            },
            upperChar: {
                pattern: /^(?=.*[A-Z])/,
                message: 'contain 1 uppercase character'
            },
            number: {
                pattern: /^(?=.*[0-9])/,
                message: 'contain 1 number'
            },
            special: {
                pattern: /^(?=.*[!@#\$%\^&\*])/,
                message: 'contain one of these special characters [ ! @ # $ % ^ & * ]'
            }
        }
        for(const key in patterns){
            if(!patterns[key].pattern.test(value)){
                messages.push(patterns[key].message);
            }
        }
        const pattern = /^(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
        valid = pattern.test(value) && valid;
        errors.push({ message : `${ name } must ${ messages.join(', ') }.` })
    }

    if(rules.matchVal){
        valid = value === rules.val ? true : false;
        errors.push({ message : `${ name } does not match`})
    }

    return {
        valid,
        errors
    }
}

export default ValidateForm;