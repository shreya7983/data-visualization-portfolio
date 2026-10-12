import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend development and production
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Request logger for analytical debugging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Data Atelier REST API is active',
    timestamp: new Date().toISOString()
  });
});

// Mount API routes under /api
app.use('/api', dashboardRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint ${req.originalUrl} not found on this server`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'production' ? null : err.message
  });
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`  DATA ATELIER — Express API Server Running`);
  console.log(`  Port: http://localhost:${PORT}`);
  console.log(`  Endpoints:`);
  console.log(`  • GET http://localhost:${PORT}/api/dashboards`);
  console.log(`  • GET http://localhost:${PORT}/api/dashboards/:id`);
  console.log(`  • GET http://localhost:${PORT}/api/tools`);
  console.log(`  • GET http://localhost:${PORT}/api/categories`);
  console.log(`  • GET http://localhost:${PORT}/api/stats`);
  console.log(`===============================================`);
});
