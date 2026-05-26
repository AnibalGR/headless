const fs = require('fs');
const path = '/srv/users/fullcast/apps/headless/frontend/package.json';
let pkg = JSON.parse(fs.readFileSync(path, 'utf8'));

delete pkg.scripts.postbuild;
delete pkg.reactSnap;

fs.writeFileSync(path, JSON.stringify(pkg, null, 2));
console.log('Cleaned package.json');
