var code = require('../main.js');
var expect = require('chai').expect;

describe('should return true only for', function(){

  it('returns true for 2016', function(){
    expect(code.isLeapYear(2016)).to.equal(true);
  });

});