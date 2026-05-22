const fs = require('fs');

const path = '/srv/users/fullcast/apps/headless/frontend/src/components/LogoMarquee.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Update component signature
const sigRegex = /export default function LogoMarquee\(\{ eyebrowText, logos \}\) \{/;
content = content.replace(sigRegex, `export default function LogoMarquee({ eyebrowText, logos, speed, size }) {`);

// 2. Add inline styles variables to the section
const sectionRegex = /<section className="logo-marquee-section">/;
content = content.replace(sectionRegex, `<section className="logo-marquee-section" style={{ '--marquee-speed': \`\${speed || 25}s\`, '--logo-height': \`\${size || 80}px\`, '--logo-width': \`\${(size || 80) * 2.75}px\` }}>`);

fs.writeFileSync(path, content);
console.log('LogoMarquee.jsx updated with inline styles variables!');
