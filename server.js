const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use MySQL database
const pool = require('./config/mysql-database');


app.use(cors());
app.use(express.json());

// Test routes
app.get('/test', (req, res) => {
  res.json({ message: 'Quick test response', timestamp: new Date().toISOString() });
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as time, VERSION() as version');
    res.json({
      database: 'MySQL DATABASE',
      time: result.rows[0].time,
      version: result.rows[0].version
    });
  } catch (error) {
    res.status(500).json({ database: 'error', error: error.message });
  }
});

// REAL API ROUTES - Use batch routes
app.use('/api/batches', require('./routes/batches'));


// Add after other routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/inspections', require('./routes/inspections'));

app.use('/api/certificates', require('./routes/certificates'));


// Debug endpoint to check all data
app.get('/api/debug/all', async (req, res) => {
  try {
    const batches = await pool.query('SELECT * FROM batches');
    const inspections = await pool.query('SELECT * FROM inspections');
    const certificates = await pool.query('SELECT * FROM certificates');
    
    res.json({
      batches: batches.rows,
      inspections: inspections.rows,
      certificates: certificates.rows,
      counts: {
        batches: batches.rows.length,
        inspections: inspections.rows.length,
        certificates: certificates.rows.length
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} with MOCK DATABASE`);
  console.log(`✅ Test basic: http://localhost:${PORT}/test`);
  console.log(`✅ Test database: http://localhost:${PORT}/test-db`);
  console.log(`🔧 Using MOCK database - you can switch to real DB later`);
});