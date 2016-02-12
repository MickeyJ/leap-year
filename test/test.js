var code = require('../main.js');
var expect = require('chai').expect;

describe('it should', function(){

  it('returns true for 2016', function(){
    expect(code.isLeapYear(2016)).to.equal(true);
  });

  it('returns true for 2015', function(){
    expect(code.isLeapYear(2015)).to.equal(false);
  });

  it('returns true for 1600', function(){
    expect(code.isLeapYear(1600)).to.equal(true);
  });

  it('returns true for 1700', function(){
    expect(code.isLeapYear(1700)).to.equal(false);
  })


});