const axios = require('axios');
const URL = 'http://192.168.100.8:4001/status'; // Replace with VM1's actual IP

axios.get(URL)
    .then(res => {
        console.log('Response from VM1:', res.data);
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
