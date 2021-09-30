// Get Value of a browser Cookie
const getCookie = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();


