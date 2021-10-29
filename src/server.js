const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

dotenv.config({path:path.join(path.dirname(__dirname),'config.env')});
const port = process.env.PORT;

const Index = require('./routes/index');

app.use(cors());
app.use('/public',express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger('dev'));

app.use('/',Index);

require('./models/connection');
app.listen(port,()=>console.log(`server is running at http://localhost:${port}`));