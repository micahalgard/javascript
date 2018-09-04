var Cipher = function (c) { //Year is equal to a function object. when passed through the test
    this.cipher = c;        //It will result in Year{year: 2016}
};                           //This only exists in theory right now, It will only turn into an object once 'new Year' is called, once that is called it invokes that function, which then produces the object. with only 'new Year()' called, it will result in Year {year: undefined}   

Cipher.prototype.key = function () { //adds a new prototype to the Year object
    var test = 'test';
    return test;
};

console.log(new Cipher());