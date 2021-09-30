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
