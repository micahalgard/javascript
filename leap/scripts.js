function yearCheck() {
    let textEntered = yearInput.value;
    console.log(textEntered)
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

var Year = function (y) {
    this.year = y
};

Year.prototype.isLeap = function () {
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

function test() {
    let v = parseInt(yearInput.value)
    let y = new Year(v)
    answer.innerHTML = y.isLeap()
    // console.log(this.value)
}

buttonPress.addEventListener("click", test);
buttonPress.addEventListener("click", yearCheck);
// yearInput.addEventListener("keyup", yearCheck, false);