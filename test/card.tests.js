'use strict';

const expect = require('chai').expect;
const cheerio = require('cheerio');
const surfCards = require('../index');

describe('Cards', function() {

  it('should return html string', function() {

    let rendered = surfCards.render({});
    expect(rendered).to.be.a('string');
    expect(rendered.indexOf('<div')).to.be.at.least(0);

  });
  
  it('should add time', function() {

    let rendered = surfCards.render({time: ['2pm']});
    expect(rendered.indexOf('<td class="time">2pm</td>'))
      .to.be.at.least(0);

  });

  it('should add a windspeed', function() {

    let rendered = surfCards.render({windspeed: ['12']});
    expect(rendered.indexOf('<td class="wind">12mph</td>'))
      .to.be.at.least(0);

  });

  it('should add swell', function() {

    let rendered = surfCards.render({swell: ['1-2']});
    expect(rendered.indexOf('<td class="swell">1-2ft</td>'))
      .to.be.at.least(0);

  });

});
