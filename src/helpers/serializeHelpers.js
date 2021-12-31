const serializeString = string => {
    if(string) {
        return string.trim().toUpperCase();
    } else {
        return '';
    }
}

const serializePassword = password => {
    if(password) {
        return password.trim();
    } else {
        return '';
    }
}

const serializePrice = value => {
    if(value) {
        return parseFloat(value.toFixed(2));
    } else {
        return '';
    } 
}

module.exports = { serializeString, serializePassword, serializePrice }
