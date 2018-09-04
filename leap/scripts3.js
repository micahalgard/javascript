var DnaTranscriber = function () {
}//DnaTranscriber is an object function

//assign the function toRna to the prototype of DnaTranscriber
DnaTranscriber.prototype.toRna = function (dnaTranscriber) {//pass dnaTranscriber through the function

    var splitString = dnaTranscriber.split("");//split up the string contained in dna into an array, assign it to split string

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

    let dnaTranscriber = new DnaTranscriber();//assign dnaTranscriber to a new instannce od DnaTranscriber
    console.log(dnaTranscriber.toRna("ACGTGGTCTTAA")); //call the function attached to the object DnaTranscriber, pass those letters through