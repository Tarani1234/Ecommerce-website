import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from './Config/db.js'
import authRoutes from './routes/authroutes.js'
 import productRoute from './routes/Productroutes.js'
dotenv.config();

const app = express();
app.use(express.json());
  connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma"
  ],
  credentials: true
}));
app.use(cookieParser());



app.use('/api/auth', authRoutes);
 app.use('/api/products' ,productRoute);
// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
