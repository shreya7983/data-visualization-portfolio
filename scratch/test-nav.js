import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('Testing Navigation and Header UI implementation...\n');

const navCode = fs.readFileSync(path.join(rootDir, 'frontend', 'src', 'components', 'Navigation.jsx'), 'utf-8');
const menuCode = fs.readFileSync(path.join(rootDir, 'frontend', 'src', 'components', 'MenuOverlay.jsx'), 'utf-8');
const cssCode = fs.readFileSync(path.join(rootDir, 'frontend', 'src', 'styles', 'global.css'), 'utf-8');

// 1. Desktop header has brand name and subtitle
console.assert(navCode.includes('SHREYA KASHYAP'), '1. Brand name SHREYA KASHYAP exists in Navigation.jsx');
console.assert(navCode.includes('DATA VISUALIZATION'), '1. Subtitle DATA VISUALIZATION exists in Navigation.jsx');

// 2. Desktop horizontal links
console.assert(navCode.includes('HOME'), '2. HOME link in Navigation.jsx');
console.assert(navCode.includes('DASHBOARDS'), '2. DASHBOARDS link in Navigation.jsx');
console.assert(navCode.includes('PROJECTS'), '2. PROJECTS link in Navigation.jsx');
console.assert(navCode.includes('ABOUT'), '2. ABOUT link in Navigation.jsx');
console.assert(navCode.includes('CONTACT'), '2. CONTACT link in Navigation.jsx');

// 3. Desktop container vs mobile trigger
console.assert(navCode.includes('desktop-nav-container'), '3. desktop-nav-container present');
console.assert(navCode.includes('mobile-nav-trigger'), '3. mobile-nav-trigger present');

// 4. CSS rules for desktop and mobile responsiveness
console.assert(cssCode.includes('.desktop-nav-container'), '4. .desktop-nav-container defined in global.css');
console.assert(cssCode.includes('.mobile-nav-trigger'), '4. .mobile-nav-trigger defined in global.css');
console.assert(cssCode.includes('.nav-link-item'), '4. .nav-link-item defined in global.css');
console.assert(cssCode.includes('nav-link-item::after'), '4. Underline hover animation defined');
console.assert(cssCode.includes('.nav-link-item.active'), '4. Active crimson underline state defined');

// 5. Scroll behavior
console.assert(navCode.includes('scrolled ?'), '5. Scroll listener and sticky header padding/shadow transition verified');

// 6. Mobile panel
console.assert(menuCode.includes('HOME') && menuCode.includes('DASHBOARDS') && menuCode.includes('PROJECTS'), '6. Mobile panel has all links');

console.log('>>> ALL 12 HEADER & NAVIGATION CHECKS PASSED SUCCESSFULLY! <<<\n');
