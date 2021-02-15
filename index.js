'use strict';

const core = require('@actions/core');
const path = require('path');

const config = require('./src/config');
const { notBlankOrElse } = require('./src/utils');

const http = require('https');
const fs = require('fs');

async function createSnapshot(url, filePath, fileName) {
  try {
    const file = path.join(filePath, fileName);
    console.log(`Generating screenshot with parameters: url=${url}, file=${file}\n`);

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }

    const image = fs.createWriteStream(file);
    await http.get(url, resp => {
      resp.pipe(image);
    });
  } catch (e) {
    console.error(e);
  }
}

async function run() {
  const url = core.getInput('url');
  const width = notBlankOrElse(core.getInput('width'), config.width);
  const height = notBlankOrElse(core.getInput('height'), config.height);

  const target = `${config.url}?url=${url}&width=${width}&height=${height}`;
  const fileName = notBlankOrElse(core.getInput('name'), config.name);
  const filePath = notBlankOrElse(core.getInput('path'), config.path);
  const fileExtension = notBlankOrElse(core.getInput('extension'), config.extension);

  await createSnapshot(target, filePath, `${fileName}.${fileExtension}`);

  core.setOutput('image', 'image downloaded in root directory');
}

module.exports = run;

if (require.main === module) {
  run();
}
