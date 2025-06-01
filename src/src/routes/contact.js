const express = require('express');
const router = express.Router();

// In-memory contacts store (replace with DB in production)
let contacts = [];

// POST /api/contacts
router.post('/', (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }
  contacts.push({ name, phone });
  res.status(201).json({ message: 'Contact added', contacts });
});

// GET /api/contacts
router.get('/', (req, res) => {
  res.json({ contacts });
});

module.exports = router;
