'use strict';

const core = require('@actions/core');
const path = require('path');
const http = require('https');
const fs = require('fs');

const config = require('./src/config');
const { notBlankOrElse } = require('./src/utils');

async function createSnapshot(url, filePath, fileName, fileExtension) {
  try {
    const imagePath = path.join(filePath, `${fileName}.${fileExtension}`);
    console.log(`Generating screenshot with parameters: url=${url}, file=${imagePath}\n`);

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }

    const image = fs.createWriteStream(imagePath);
    await http.get(url, resp => {
      resp.pipe(image);
    });

    return imagePath;
  } catch (e) {
    console.error(e);
  }
}

async function run() {
  const url = 'https://www.brainyquote.com/quote_of_the_day';//score.getInput('url');
  const width = 400;//notBlankOrElse(core.getInput('width'), config.width);
  const height = 400;//notBlankOrElse(core.getInput('height'), config.height);
  const fullPage = notBlankOrElse(core.getInput('fullPage'), config.fullPage);
  const encoding = notBlankOrElse(core.getInput('encoding'), config.encoding);

  const fileName = notBlankOrElse(core.getInput('name'), config.name);
  const filePath = notBlankOrElse(core.getInput('path'), config.path);
  const fileExtension = notBlankOrElse(core.getInput('type'), config.type);

  const target = `${config.url}?url=${url}&width=${width}&height=${height}&fullPage=${fullPage}&encoding=${encoding}&type=${fileExtension}`;

  const imagePath = await createSnapshot(target, filePath, fileName, fileExtension);

  core.setOutput('image', imagePath);
}

module.exports = run;

if (require.main === module) {
  run();
}
