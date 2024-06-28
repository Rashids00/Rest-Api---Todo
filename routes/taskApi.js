const express = require('express');
const router = express.Router();
const {addTask, listTask, getTask, updateStatus, deleteTask, editTask} = require('../controllers/taskController');

router.post('/tasks', addTask);
router.get('/tasks', listTask);
router.get('/tasks/:id', getTask);
router.put('/tasks/:id', updateStatus);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/edit/:id', editTask)

module.exports = router;