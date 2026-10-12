import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '..', 'data', 'dashboards.json');

// Helper to safely load dashboards from JSON file
const loadDashboards = () => {
  try {
    const rawData = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(rawData);
  } catch (err) {
    console.error('Error reading dashboards.json:', err);
    return [];
  }
};

// GET /api/dashboards
// Query parameters: tool, category, featured, search
export const getDashboards = (req, res) => {
  try {
    const { tool, category, featured, search } = req.query;
    let dashboards = loadDashboards();

    if (tool && tool.trim() !== '' && tool.toLowerCase() !== 'all') {
      const normalizedTool = tool.toLowerCase().replace(/[\s_-]/g, '');
      dashboards = dashboards.filter((d) => {
        const itemTool = (d.tool || '').toLowerCase().replace(/[\s_-]/g, '');
        return itemTool.includes(normalizedTool) || normalizedTool.includes(itemTool);
      });
    }

    if (category && category.trim() !== '' && category.toLowerCase() !== 'all') {
      const normalizedCategory = category.toLowerCase().trim();
      dashboards = dashboards.filter((d) => {
        return (d.category || '').toLowerCase().trim() === normalizedCategory;
      });
    }

    if (featured !== undefined) {
      const isFeatured = featured === 'true' || featured === '1';
      dashboards = dashboards.filter((d) => Boolean(d.featured) === isFeatured);
    }

    if (search && search.trim() !== '') {
      const term = search.toLowerCase().trim();
      dashboards = dashboards.filter((d) =>
        (d.title || '').toLowerCase().includes(term) ||
        (d.description || '').toLowerCase().includes(term) ||
        (d.tool || '').toLowerCase().includes(term) ||
        (d.category || '').toLowerCase().includes(term) ||
        (d.dataset || '').toLowerCase().includes(term)
      );
    }

    return res.status(200).json({
      success: true,
      count: dashboards.length,
      data: dashboards
    });
  } catch (error) {
    console.error('getDashboards error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve dashboards',
      error: error.message
    });
  }
};

// GET /api/dashboards/:id
export const getDashboardById = (req, res) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'A valid dashboard ID is required'
      });
    }

    const dashboards = loadDashboards();
    const dashboard = dashboards.find(
      (d) => d.id.toLowerCase() === id.toLowerCase()
    );

    if (!dashboard) {
      return res.status(404).json({
        success: false,
        message: `Dashboard with ID '${id}' was not found`
      });
    }

    return res.status(200).json({
      success: true,
      data: dashboard
    });
  } catch (error) {
    console.error('getDashboardById error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve dashboard detail',
      error: error.message
    });
  }
};

// GET /api/tools
export const getTools = (req, res) => {
  try {
    const dashboards = loadDashboards();
    const toolCounts = {};

    dashboards.forEach((d) => {
      const tool = d.tool || 'Other';
      toolCounts[tool] = (toolCounts[tool] || 0) + 1;
    });

    const tools = Object.keys(toolCounts).map((name) => ({
      name,
      count: toolCounts[name]
    }));

    return res.status(200).json({
      success: true,
      data: tools
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve tools',
      error: error.message
    });
  }
};

// GET /api/categories
export const getCategories = (req, res) => {
  try {
    const dashboards = loadDashboards();
    const categoryCounts = {};

    dashboards.forEach((d) => {
      const cat = d.category || 'Other';
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    const categories = Object.keys(categoryCounts).map((name) => ({
      name,
      count: categoryCounts[name]
    }));

    return res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve categories',
      error: error.message
    });
  }
};

// GET /api/stats
export const getStats = (req, res) => {
  try {
    const dashboards = loadDashboards();
    const uniqueTools = new Set(dashboards.map((d) => d.tool));

    return res.status(200).json({
      success: true,
      data: {
        dashboards: 12,
        dashboardsLabel: "12+",
        tools: uniqueTools.size || 4,
        toolsLabel: "04",
        projects: 8,
        projectsLabel: "08+",
        dataStories: 4,
        dataStoriesLabel: "04"
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve statistics',
      error: error.message
    });
  }
};
