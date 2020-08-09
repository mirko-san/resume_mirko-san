const yaml2json = require('./yaml2json.js');
const fs = require('fs');

async function convertProfileYaml2json() {
  const doc = yaml2json('./src/assets/yml/profile.yml');
  //distディレクトリーがなかったら作る
  function isExistFile(file) {
    try {
      fs.statSync(file);
      return true;
    } catch (err) {
      if (err.code === 'ENOENT') return false;
    }
  }

  if (!isExistFile('./src/assets/dist/json')) {
    fs.mkdirSync('./src/assets/dist/json', { recursive: true });
  }

  await fs.writeFileSync('./src/assets/dist/json/profile.json', doc);
}

convertProfileYaml2json();
