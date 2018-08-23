
var Year = function (year) {
    this.year = year;
};

Year.prototype.isLeap = function (year) {
    var result = false;

    if ((this.year % 4 ) == 0 ) {
        if (( this.year % 100 ) != 0 ){
            result = true;
        }
        else if (( this.year % 400 ) == 0){
            result = true;
        }
    }
    return result
};

module.exports = Year;
