'use strict';

const fs = require('fs');
const hbs = require('handlebars').create();

const template = fs.readFileSync(__dirname + '/surfcard.hbs').toString();
const css = fs.readFileSync(__dirname + '/style.css').toString();
const surfCard = hbs.compile(template);

/**
 * *
 * @param options
 * @returns {string} - Built html SurfCard as string
 */
let build = function(options) {

  let data = Object.create(options);
  data.style = css;
  return surfCard(data);

};

exports.build = build;
