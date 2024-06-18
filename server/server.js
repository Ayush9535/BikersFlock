const express = require('express');
const app = express();
const AuthRouter = require('./Routes/AuthRoutes.js');
const mongoose = require("mongoose");
const { connectToDb , isConnected} = require('./db.js');
const Messagerouter = require('./Routes/MessagesRoutes.js');
const ConversationRouter = require('./Routes/ConversationRouter.js');
const UserRouter = require('./Routes/UserRouter.js');
const PostRouter = require('./Routes/PostRoutes.js');
const cookieParser  = require('cookie-parser');
require("dotenv").config();

app.use(express.json());
app.use(cookieParser())

app.use(AuthRouter)
app.use(Messagerouter)
app.use(ConversationRouter)
app.use(UserRouter)
app.use(PostRouter)

app.get('/', (req, res) => {
    isConnected() ? res.send('Connected to Database Successfully..!!') : res.send('Error while connecting to Database..!!')
});

app.listen(process.env.PORT, () => {
    connectToDb()
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});