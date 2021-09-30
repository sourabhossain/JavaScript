// get value of a browser Cookie
const getCookie = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

// set value of a browser Cookie
const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toGMTString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
};

// Convert RGB to Hex
const rgbToHex = (r, g, b) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

// Convert Hex to RGB
const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

// Check if Date is Valid
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

// Find the day of year
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

