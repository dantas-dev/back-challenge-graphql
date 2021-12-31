const bcrypt = require('bcrypt');

const encryptPassword = async password => {
    return await bcrypt.hash(password, 8);
}

const decryptPassword = async ( passwordUser, password ) => {
    return await bcrypt.compare(password, passwordUser);
}

module.exports = { encryptPassword, decryptPassword } 