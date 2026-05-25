require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

const errorHandler = require('./middleware/error');

const userRoutes = 
    require("./routes/users");

app.use("/api/users", userRoutes);

app.get ('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/tasks', require('./routes/task'));

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});