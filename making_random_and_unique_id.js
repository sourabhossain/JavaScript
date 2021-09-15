const makeRandomId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
};

const uniqueID = (prefix, length = 8) => {
    return prefix + makeRandomId(length);
};

const makeRandomNumber = (length) => {
    let result = '';
    const characters = '0123456789';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
};

const uniqueNumber = (prefix, length = 8) => {
    return prefix + makeRandomNumber(length);
};

console.log(makeRandomId(4));
console.log(makeRandomId(5));
console.log(makeRandomId(6));
console.log(uniqueID('prefix-'));
console.log(makeRandomNumber(11));
console.log(uniqueNumber('prefix-'));
