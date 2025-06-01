require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

// Routes
app.use('/api/contacts', require('./routes/contact'));
app.use('/api/register-phone', require('./routes/phone'));

// Health check
app.get('/', (req, res) => res.json({ message: 'MHA Branded App API running' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
