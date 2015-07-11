'use strict';

const fs = require('fs');
const hbs = require('handlebars').create();

const template = String(fs.readFileSync(__dirname + '/surfcard.hbs'));
const css = fs.readFileSync(__dirname + '/style.css').toString();
const surfCard = hbs.compile(template);

/**
 * *
 * @param options
 * @returns {string} - Built html SurfCard as string
 */
var build = function(options) {

  options.style = css;
  return surfCard(options);

};

exports.build = build;
