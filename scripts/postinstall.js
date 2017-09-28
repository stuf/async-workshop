const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

const required = {
  vendor: [['kefir.js', 'node_modules/kefir/dist/kefir.js']]
};

const dirs = Object.keys(required);

const createdDirs =
  dirs.reduce((res, d) => {
    if (shell.test('-e', '')) {
      shell.cp()
    }
  });
