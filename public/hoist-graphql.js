const fs = require('fs');
const path = '/srv/users/fullcast/apps/headless/frontend/src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Hoist the query and fetchGraphQL outside the component
const queryRegex = /const query = `[\s\S]*?`;/;
const queryMatch = content.match(queryRegex);

if (queryMatch) {
  const queryStr = queryMatch[0];
  content = content.replace(queryStr, ''); // Remove from inside

  // Insert above component
  const componentStart = 'export default function Home() {';
  content = content.replace(componentStart, `${queryStr}\n\n// Prefetch data outside of React lifecycle to eliminate waterfall\nlet preloadedDataPromise = fetchGraphQL(query);\n\n${componentStart}`);

  // Replace useEffect fetch logic
  const useEffectRegex = /fetchGraphQL\(query\)[\s\S]*?\}\);/m;
  content = content.replace(useEffectRegex, `preloadedDataPromise
      .then(data => {
        setHomeData(data?.nodeByUri?.homeFields || null);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Error al cargar los datos');
        setLoading(false);
      });`);
}

fs.writeFileSync(path, content);
console.log('Hoisted GraphQL fetch in Home.jsx!');
