const mongoose = require('mongoose');
const MongoURI = process.env.MONGO_URI;

const connectDB = mongoose.connect(MongoURI).then((res)=>console.log(`Database successfully connected \n${res}`)).catch((err)=>console.error('Database Connection Failed => '+err));

module.exports = connectDB;