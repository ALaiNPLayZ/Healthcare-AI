import express from 'express';
import { User } from '../models/User.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get user's health metrics
router.get('/', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('healthMetrics');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user.healthMetrics);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update health metrics
router.post('/update', authenticateToken, async (req, res) => {
  try {
    const { height, weight, bloodPressure, heartRate, temperature } = req.body;
    
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.healthMetrics = {
      height: height || user.healthMetrics?.height,
      weight: weight || user.healthMetrics?.weight,
      bloodPressure: bloodPressure || user.healthMetrics?.bloodPressure,
      heartRate: heartRate || user.healthMetrics?.heartRate,
      temperature: temperature || user.healthMetrics?.temperature
    };

    await user.save();
    res.json({ message: 'Health metrics updated successfully', healthMetrics: user.healthMetrics });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get health metrics history (if you want to implement tracking over time)
router.get('/history', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('healthMetricsHistory');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user.healthMetricsHistory || []);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;