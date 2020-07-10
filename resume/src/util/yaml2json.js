const fs = require('fs');
const yaml = require('js-yaml');

function yaml2json(path) {
  const data = yaml.safeLoad(fs.readFileSync(path, 'utf8'));
  return JSON.stringify(data);
}

module.exports = yaml2json;
