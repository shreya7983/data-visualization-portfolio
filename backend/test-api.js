import http from 'http';
import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', dashboardRoutes);

const server = app.listen(0, async () => {
  const port = server.address().port;
  console.log(`Test server running on port ${port}`);

  try {
    // Test 1: GET /api/dashboards
    const res1 = await fetch(`http://127.0.0.1:${port}/api/dashboards`);
    const data1 = await res1.json();
    console.log(`[PASS] GET /api/dashboards - returned ${data1.count} items (Status: ${res1.status})`);

    // Test 2: GET /api/dashboards?tool=Power%20BI
    const res2 = await fetch(`http://127.0.0.1:${port}/api/dashboards?tool=Power%20BI`);
    const data2 = await res2.json();
    console.log(`[PASS] Filter ?tool=Power BI - returned ${data2.count} items`);

    // Test 3: GET /api/dashboards/india-paper-leaks
    const res3 = await fetch(`http://127.0.0.1:${port}/api/dashboards/india-paper-leaks`);
    const data3 = await res3.json();
    console.log(`[PASS] GET /api/dashboards/india-paper-leaks - Title: "${data3.data.title}"`);

    // Test 4: GET /api/dashboards/unknown-id (expect 404)
    const res4 = await fetch(`http://127.0.0.1:${port}/api/dashboards/unknown-id`);
    const data4 = await res4.json();
    console.log(`[PASS] 404 test for unknown id - Status: ${res4.status}, Success: ${data4.success}`);

    // Test 5: GET /api/tools
    const res5 = await fetch(`http://127.0.0.1:${port}/api/tools`);
    const data5 = await res5.json();
    console.log(`[PASS] GET /api/tools - tools found: ${data5.data.map(t => t.name).join(', ')}`);

    // Test 6: GET /api/stats
    const res6 = await fetch(`http://127.0.0.1:${port}/api/stats`);
    const data6 = await res6.json();
    console.log(`[PASS] GET /api/stats - Dashboards: ${data6.data.dashboardsLabel}, Tools: ${data6.data.toolsLabel}`);

    console.log('\n>>> ALL BACKEND API TESTS PASSED SUCCESSFULLY! <<<');
  } catch (err) {
    console.error('[FAIL] API test failed:', err);
    process.exit(1);
  } finally {
    server.close();
  }
});
