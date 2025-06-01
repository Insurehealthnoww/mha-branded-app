const express = require('express');
const router = express.Router();

// POST /api/register-phone
router.post('/', (req, res) => {
  const { phone } = req.body;
  if (!phone) {
    return res.status(400).json({ error: 'Phone number is required' });
  }
  // Placeholder: store phone or trigger verification logic
  res.status(201).json({ message: 'Phone registered', phone });
});

module.exports = router;
