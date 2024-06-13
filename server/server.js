const express = require('express');
const app = express();
const AuthRouter = require('./Routes/AuthRoutes.js');
const mongoose = require("mongoose");
const { connectToDb , isConnected} = require('./db.js');
require("dotenv").config();

app.use(express.json());
app.use(AuthRouter)

app.get('/', (req, res) => {
    isConnected() ? res.send('Connected to Database Successfully..!!') : res.send('Error while connecting to Database..!!')
});

app.listen(process.env.PORT, () => {
    connectToDb()
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});