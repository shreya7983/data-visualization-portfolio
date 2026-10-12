import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('----------------------------------------------------');
console.log('   DATA ATELIER — DIGITAL DATA EXHIBITION VERIFICATION   ');
console.log('----------------------------------------------------\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. Check Backend Data
const dataPath = path.join(__dirname, 'backend', 'data', 'dashboards.json');
assert(fs.existsSync(dataPath), 'backend/data/dashboards.json exists');

const dashboards = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
assert(Array.isArray(dashboards) && dashboards.length >= 6, `Loaded ${dashboards.length} dashboards from JSON`);

// 2. Check each dashboard has required core and digital exhibition fields
const coreFields = [
  'id', 'title', 'tool', 'category', 'year', 'image',
  'description', 'objective', 'dataset', 'visualizationApproach',
  'insights', 'chartsUsed', 'accentColor'
];

const exhibitionFields = ['dataDna', 'story', 'visualizations', 'challenge'];

dashboards.forEach((d) => {
  const missingCore = coreFields.filter((field) => d[field] === undefined);
  assert(missingCore.length === 0, `Dashboard '${d.id}' has all core schema fields (missing: ${missingCore.join(', ')})`);

  const missingExhibition = exhibitionFields.filter((field) => d[field] === undefined);
  assert(missingExhibition.length === 0, `Dashboard '${d.id}' has all digital exhibition fields (missing: ${missingExhibition.join(', ')})`);

  // Verify Data DNA completeness
  const dna = d.dataDna || {};
  const dnaFields = ['tool', 'domain', 'year', 'dataset', 'primaryVisuals', 'analysisType', 'granularity'];
  const missingDna = dnaFields.filter(f => !dna[f]);
  assert(missingDna.length === 0, `Dashboard '${d.id}' Data DNA has all attributes (${dnaFields.length} attributes)`);

  // Verify 5-Stage Story
  const story = d.story || {};
  const storyStages = ['question', 'data', 'exploration', 'visualization', 'insight'];
  const missingStory = storyStages.filter(s => !story[s]);
  assert(missingStory.length === 0, `Dashboard '${d.id}' has all 5 story narrative stages`);

  // Verify Deconstruct Modular Visualizations
  assert(Array.isArray(d.visualizations) && d.visualizations.length >= 4, `Dashboard '${d.id}' has ${d.visualizations?.length} modular visualization components`);

  // Verify "Can You Spot the Pattern?" Micro-Challenge
  const ch = d.challenge || {};
  assert(ch.question && Array.isArray(ch.options) && ch.options.length >= 3 && ch.hint, `Dashboard '${d.id}' has valid pattern challenge with hint & ${ch.options?.length} options`);

  // Verify asset exists in frontend/public
  const assetRelativePath = d.image.replace(/^\//, '');
  const assetFullPath = path.join(__dirname, 'frontend', 'public', assetRelativePath);
  assert(fs.existsSync(assetFullPath), `Asset file exists for '${d.id}' at: ${assetRelativePath}`);
});

// 3. Verify Component Files for Digital Exhibition
const components = [
  'DashboardViewer.jsx',
  'DashboardDeconstruct.jsx',
  'DashboardMicroscope.jsx',
  'DashboardStoryMode.jsx',
  'PatternChallenge.jsx',
  'DataDna.jsx',
  'DataPipeline.jsx',
  'ExhibitPagination.jsx',
  'ProjectComposition.jsx',
  'DashboardCard.jsx',
  'CustomCursor.jsx'
];

components.forEach(comp => {
  const compPath = path.join(__dirname, 'frontend', 'src', 'components', comp);
  assert(fs.existsSync(compPath), `Component exists: frontend/src/components/${comp}`);
});

// 4. Verify Frontend Production Build
const distIndex = path.join(__dirname, 'frontend', 'dist', 'index.html');
assert(fs.existsSync(distIndex), 'frontend/dist/index.html exists from production build');

const publicFavicon = path.join(__dirname, 'frontend', 'public', 'favicon.svg');
assert(fs.existsSync(publicFavicon), 'frontend/public/favicon.svg exists');

console.log(`\n====================================================`);
console.log(`TOTAL TESTS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
console.log(`====================================================`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('\n>>> DIGITAL DATA EXHIBITION 100% VERIFIED <<\n');
}
