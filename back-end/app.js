const express = require('express');
// const mongoose = require('mongoose');
const connectDB = require('./config/connection')
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware to parse JSON-encoded bodies
app.use(express.json());

// Enable CORS for specific origins
app.use(cors({
    origin: 'http://localhost:5173'
  }));

// DB Connected
connectDB()

const contactRoutes = require('./routes/contactRoutes');
const sendMessageRoutes = require('./routes/messageRoutes');
const authRoutes = require('./routes/authRoutes')

app.use('/api/auth', authRoutes)
app.use('/api/contacts', contactRoutes);
app.use('/api/sendMessage', sendMessageRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
