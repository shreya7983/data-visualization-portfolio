import { Router } from 'express';
import {
  getDashboards,
  getDashboardById,
  getTools,
  getCategories,
  getStats
} from '../controllers/dashboardController.js';

const router = Router();

// Routes
router.get('/dashboards', getDashboards);
router.get('/dashboards/:id', getDashboardById);
router.get('/tools', getTools);
router.get('/categories', getCategories);
router.get('/stats', getStats);

export default router;
