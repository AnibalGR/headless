const fs = require('fs');
const path = '/srv/users/fullcast/apps/headless/frontend/src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Fix the DEFAULT_HOME_DATA syntax error
content = content.replace(`trustedByText
              trustedByMarqueeSpeed
              trustedByLogoSize: 'TRUSTED BY THE REVOPS LEADERS OF TOMORROW',`, `trustedByText: 'TRUSTED BY THE REVOPS LEADERS OF TOMORROW',`);

// 2. Add to GraphQL query where it actually belongs
const graphqlQueryMatch = /heroSubheadline\s+trustedByText/;
content = content.replace(graphqlQueryMatch, `heroSubheadline\n              trustedByText\n              trustedByMarqueeSpeed\n              trustedByLogoSize`);

fs.writeFileSync(path, content);
console.log('Fixed syntax and updated GraphQL query!');
