const express = require('express');
// const mongoose = require('mongoose');
const connectDB = require('./config/connection')
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB Connected
connectDB()

const contactRoutes = require('./routes/contactRoutes');
const sendMessageRoutes = require('./routes/messageRoutes');

app.use('/api/contacts', contactRoutes);
app.use('/api/sendMessage', sendMessageRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
