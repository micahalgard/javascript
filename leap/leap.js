
var Year = function (year) { //Year is equal to a function object. when passed through the test
    this.year = year;        //It will result in Year{year: 2016}
};                           //This only exists in theory right now, It will only turn into an object once 'new Year' is called, once that is called it invokes that function, which then produces the object. with only 'new Year()' called, it will result in Year {year: undefined}   

Year.prototype.isLeap = function () { //adds a new prototype to the Year object
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

// let Year = {
//     protype : {
//         isLeap : function
//     }
//     this : {
//         year = year;
//     }
// }

// module.exports = Year;
