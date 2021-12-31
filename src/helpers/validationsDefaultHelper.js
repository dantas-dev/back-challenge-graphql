const validationsDefault = {
    StringValidator: (data, min = 3, max = 100, isNull = false) => {

        if(isNull && !data) {
            return true;
        }

        if(!data && !isNull) {
            return false;
        } 

        if(typeof data !== 'string') {
            return false;
        }

        if(data.length < min && !isNull) {
            return false;
        } 

        if(data.length > max) {
            return false;
        } 

        return true;
    },
    
    NumberValidator: (data, min = 1, max = 1000, isNull = false) => {
        if(isNull && !data) {
            return true;
        }

        if(!data && !isNull) {
            return false;
        } 

        if(typeof data !== 'number') {
            return false;
        }

        if(data < min) {
            return false;
        } 

        if(data > max) {
            return false;
        } 

        return true;
    },
}

module.exports = validationsDefault;