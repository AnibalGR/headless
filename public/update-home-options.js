const fs = require('fs');

const path = '/srv/users/fullcast/apps/headless/frontend/src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add fields to GraphQL query
const graphqlRegex = /trustedByText/;
content = content.replace(graphqlRegex, `trustedByText\n              trustedByMarqueeSpeed\n              trustedByLogoSize`);

// 2. Pass fields to LogoMarquee component
const componentRegex = /<LogoMarquee \n\s*eyebrowText=\{homeData\.trustedByText\}/;
content = content.replace(componentRegex, `<LogoMarquee \n        eyebrowText={homeData.trustedByText} \n        speed={homeData.trustedByMarqueeSpeed}\n        size={homeData.trustedByLogoSize}`);

fs.writeFileSync(path, content);
console.log('Home.jsx updated with speed and size props!');
