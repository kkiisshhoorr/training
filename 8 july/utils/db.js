import mongoose, { connect } from "mongoose";
import  dotenv from 'dotenv';
dotenv.config();
export const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};



export const isDbConnected = () => {
    return mongoose.connection.readyState === 1;
};


export const getDbStatus = () => {
    const states = {
        0: 'disconnected',
        1: 'connected', 
        2: 'connecting',
        3: 'disconnecting'
    };
    return states[mongoose.connection.readyState] || 'unknown';
};