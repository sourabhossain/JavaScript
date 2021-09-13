const countryFlag = (countryCode) => {
    return typeof String.fromCodePoint !== 'undefined'
        ? countryCode
            .toUpperCase()
            .replace(/./g, (char) =>
                String.fromCodePoint(char.charCodeAt(0) + 127397))
        : countryCode;
}

console.log(countryFlag('us'));
console.log(countryFlag('jp'));
console.log(countryFlag('cn'));
console.log(countryFlag('bd'));
