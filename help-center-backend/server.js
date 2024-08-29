const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const cardRoutes = require('./routes/cards');


dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.json());

// Database configuration
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

// API Routes
app.use('/api/cards', cardRoutes);

// Basic endpoint to check if server is running
app.get('/ping', (req, res) => res.send('Server is running'));

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
