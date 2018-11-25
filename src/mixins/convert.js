let convertBtn = document.querySelector('#convertBtn');
let videoId = document.querySelector('#videoId').value;
const axios = require('axios');

// Online service URL
const API_URL = `https://www.easy-youtube-mp3.com/download.php?v=${videoId}`; 

// Event-listener for the convert button
convertBtn.addEventListener('click', () => {
    axios.get(`${API_URL}`);
    // Handle the promise
});