// get value of a browser Cookie
const getCookie = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

// set value of a browser Cookie
const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toGMTString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
};

// Clear All Cookies
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

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

// Find the number of days between two days
const dayDifference = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86_400_000)

// Generate Random Hex
const randomHex = () => `#${Math.floor(Math.random() * 0xff_ff_ff).toString(16).padEnd(6, "0")}`;

// Log Time from Date
const timeFromDate = date => date.toTimeString().slice(0, 8);

// Shuffle an Array
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
