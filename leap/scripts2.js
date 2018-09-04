var DnaTranscriber = function (y) {//assign the object function. pass through y
    this.dnaTranscriber = y;//assign y to the value of dnaTranscriber
}

DnaTranscriber.prototype.toRna = function () {//add the prototype toRna to DnaTranscriber

    var splitString = this.dnaTranscriber.split("");//split up the value located in dnaTranscriber into an array, assign it to splitString

    for(i=0; i<splitString.length; i++) {

        if(splitString[i] == "A") {
            splitString[i] = "U";
        } else if(splitString[i] == "G") {
            splitString[i] = "C";
        } else if(splitString[i] == "T") {
            splitString[i] = "A";
        } else if(splitString[i] == "C") {
            splitString[i] = "G";
        }
        else {
            throw new Error("Invalid input")
        }
    }

    var joinArray = splitString.join("");
    return joinArray;
}

    let w = new DnaTranscriber("ACGTGGTCTTAA");//assign w to a new instance of DnaTranscriber with that string assigned to the value of the this

