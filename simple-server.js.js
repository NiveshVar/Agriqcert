const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'ULTRA FAST API', status: 'working' });
});

app.post('/api/login', (req, res) => {
  res.json({ success: true, token: 'test_token', user: { email: req.body.email, role: 'exporter' } });
});

app.post('/api/batches', (req, res) => {
  res.json({ success: true, batchId: Math.random(), status: 'submitted' });
});

app.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
});