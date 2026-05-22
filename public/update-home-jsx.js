const fs = require('fs');

const path = '/srv/users/fullcast/apps/headless/frontend/src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Generate GraphQL fields
let graphqlFields = '';
for (let i = 1; i <= 20; i++) {
  graphqlFields += `
              trustedByLogo${i} {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }`;
}

// Replace in GraphQL
const graphqlRegex = /trustedByLogo1\s*\{\s*node\s*\{\s*sourceUrl\s*srcSet\s*sizes\s*altText\s*\}\s*\}(?:[\s\S]*?)trustedByLogo6\s*\{\s*node\s*\{\s*sourceUrl\s*srcSet\s*sizes\s*altText\s*\}\s*\}/;
content = content.replace(graphqlRegex, graphqlFields.trim());

// 2. Generate logo array elements
let arrayElements = '';
for (let i = 1; i <= 20; i++) {
  arrayElements += `          homeData.trustedByLogo${i}?.node,\n`;
}

// Replace in JSX
const arrayRegex = /logos=\{\[\s*homeData\.trustedByLogo1\?\.node,[\s\S]*?homeData\.trustedByLogo6\?\.node\s*\]\.filter\(Boolean\)\}/;
content = content.replace(arrayRegex, `logos={[\n${arrayElements}        ].filter(Boolean)}`);

fs.writeFileSync(path, content);
console.log('Home.jsx updated with 20 logos!');
