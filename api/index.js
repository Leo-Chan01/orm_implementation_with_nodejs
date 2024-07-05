const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
app.use(cors({origin: true}));



app.use((req, res) => {
    res.status(404).json({
        error: 'Endpoint not found',
        message: "The Endpoint you requested doesn't exist. Contact the dev if you're not the owner"
    });
});
const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Api listening to port at https://localhost:${port}`);
});

module.exports = app;