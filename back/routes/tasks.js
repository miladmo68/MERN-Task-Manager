
import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// GET /api/tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

// POST /api/tasks
router.post('/', async (req, res) => {
  const { title } = req.body;
  const task = await Task.create({ title });
  res.status(201).json(task);
});

// DELETE /api/tasks/:id
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
