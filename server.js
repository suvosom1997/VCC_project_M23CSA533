const express = require('express');
const service = express();
const PORT = 4001;

service.get('/status', (req, res) => {
    res.send('Hello from VM1');
});

service.listen(PORT, () => {
    console.log(`VM1 service listening on port ${PORT}`);
});
