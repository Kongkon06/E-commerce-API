const express = require('express');
const Route = require('./Routes/routes');
const app = express();

app.use('/api',Route);

app.listen(3000,()=>console.log('Api is online'));