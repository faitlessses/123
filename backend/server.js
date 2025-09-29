const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/api/health', (req, res) => {
  res.status(200).send('Backend is running!');
});

// Resident API Routes
const residentRoutes = require('./routes/residents');
app.use('/api/residents', residentRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});