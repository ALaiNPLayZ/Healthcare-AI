import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { PythonShell } from 'python-shell';
import { errorHandler } from './middleware/errorHandler.js';
import userRoutes from './routes/userRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import mentalHealthRoutes from './routes/mentalHealthRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/mental-health', mentalHealthRoutes);

// AI Prediction endpoint
app.post('/api/predict', async (req, res) => {
  try {
    const options = {
      mode: 'text',
      pythonPath: 'python3',
      pythonOptions: ['-u'],
      scriptPath: './ai',
      args: [JSON.stringify(req.body)]
    };

    PythonShell.run('predict.py', options).then(results => {
      res.json({ prediction: results[0] });
    });
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});