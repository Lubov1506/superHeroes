const express = require('express');
const router =  require('./routes');

const app = express();

app.use(express.json());
app.use('/api', router);

app.use((error, req,res, next)=>{
    const status = error.status || 500;

    res.status(status).send({
      errors: [{ message: error.message || 'Server error' }]
    });
});

module.exports = app;