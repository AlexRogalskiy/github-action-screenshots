'use strict';

const core = require('@actions/core');
const path = require('path');
const http = require('https');
const fs = require('fs');

const config = require('./src/config');
const { notBlankOrElse } = require('./src/utils');

async function createSnapshot(url, filePath, fileName, fileExtension) {
  const imagePath = path.join(filePath, `${fileName}.${fileExtension}`);
  console.log(`
    Generating screenshot with parameters: url=${url}, file=${imagePath}
    `);

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }

  const image = fs.createWriteStream(imagePath);
  await http.get(url, resp => {
    resp.pipe(image);
  });

  return imagePath;
}

async function run() {
  const url = core.getInput('url', { required: true });
  const width = notBlankOrElse(core.getInput('width'), config.width);
  const height = notBlankOrElse(core.getInput('height'), config.height);
  const fullPage = notBlankOrElse(core.getInput('fullPage'), config.fullPage);
  const encoding = notBlankOrElse(core.getInput('encoding'), config.encoding);

  const fileName = notBlankOrElse(core.getInput('name'), config.name);
  const filePath = notBlankOrElse(core.getInput('path'), config.path);
  const fileExtension = notBlankOrElse(core.getInput('type'), config.type);

  const target = `${config.url}?url=${url}&width=${width}&height=${height}&fullPage=${fullPage}&encoding=${encoding}&type=${fileExtension}`;

  try {
    const imagePath = await createSnapshot(target, filePath, fileName, fileExtension);
    core.info(`Storing screenshot image by path: ${imagePath}`);
    core.setOutput('image', imagePath);
  } catch (e) {
    core.setFailed(`Cannot create screenshot image by path: ${filePath}/${fileName}, message: ${e.message}`);
  }
}

module.exports = run;

if (require.main === module) {
  run();
}
