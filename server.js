const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const taskApi = require('./routes/taskApi')
const {serverError} = require('./middlewares/errorHandler')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api', taskApi);
app.use(serverError);

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_OPTIONS}`
).then(() => {
    console.log('Connected to mongodb');
}).catch((e) => console.log(e))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
    