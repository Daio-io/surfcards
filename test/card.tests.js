'use strict';

const expect = require('chai').expect;
const cheerio = require('cheerio');
const surfCards = require('../index');

describe('Cards', function() {

  it('should return html string', function() {

    let rendered = surfCards.build({});
    
    expect(rendered).to.be.a('string');
    expect(rendered.indexOf('<div')).to.be.at.least(0);

  });

  it('should include css', function() {

    let rendered = surfCards.build({});
    
    expect(rendered).to.be.a('string');
    expect(rendered.indexOf('<style>')).to.be.at.least(0);

  });  
  
  it('should add a location heading', function() {

    let loc = 'Rest Bay';
    let rendered = surfCards.build({location: loc});
    
    expect(rendered).to.be.a('string');
    expect(rendered.indexOf(loc + ' Forecast')).to.be.at.least(0);

  });
  
  it('should add an iframe live webcam feed', function() {

    let webLink = 'some.link';
    let rendered = surfCards.build({webcamLink: webLink});
    
    expect(rendered).to.be.a('string');
    expect(rendered.indexOf(webLink)).to.be.at.least(0);
    expect(rendered.indexOf('<iframe')).to.be.at.least(0);

  });  
  
  it('should not add an iframe live webcam feed if not present', function() {

    let rendered = surfCards.build({});
    
    expect(rendered).to.be.a('string');
    expect(rendered.indexOf('<iframe')).to.eql(-1);

  });

  it('should add time', function() {

    let rendered = surfCards.build({time: ['2pm']});
    
    expect(rendered.indexOf('<td class="time">2pm</td>'))
      .to.be.at.least(0);

  });

  it('should add a windspeed', function() {

    let rendered = surfCards.build({windspeed: ['12']});
    
    expect(rendered.indexOf('<td class="wind">12mph</td>'))
      .to.be.at.least(0);

  });

  it('should add swell', function() {

    let rendered = surfCards.build({swell: ['1-2']});
    
    expect(rendered.indexOf('<td class="swell">1-2ft</td>'))
      .to.be.at.least(0);

  });

});
