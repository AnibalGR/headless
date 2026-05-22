const fs = require('fs');

const path = '/srv/users/fullcast/apps/headless/frontend/src/components/LogoMarquee.css';
let content = fs.readFileSync(path, 'utf8');

// 1. Update marquee animation speed
const trackRegex = /\.marquee-track \{\s*display: flex;\s*width: fit-content;\s*animation: scroll-marquee 25s linear infinite;\s*\}/;
content = content.replace(trackRegex, `.marquee-track {
  display: flex;
  width: fit-content;
  animation: scroll-marquee var(--marquee-speed, 25s) linear infinite;
}`);

// 2. Update logo dimensions
const logoRegex = /\.marquee-logo \{\s*flex-shrink: 0;\s*display: flex;\s*align-items: center;\s*justify-content: center;\s*height: 80px;\s*width: 220px;\s*transition: opacity 0\.3s ease, transform 0\.3s ease;\s*opacity: 1;\s*\}/;
content = content.replace(logoRegex, `.marquee-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--logo-height, 80px);
  width: var(--logo-width, 220px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 1;
}`);

fs.writeFileSync(path, content);
console.log('LogoMarquee.css updated with CSS variables!');
