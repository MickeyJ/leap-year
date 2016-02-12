module.exports = {

  isLeapYear: function(y){

    if((y % 100 === 0) && (y % 400 !== 0)) return false;
    else return y % 4 === 0;
  }
};