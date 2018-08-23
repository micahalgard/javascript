var DnaTranscriber = function () {
}

DnaTranscriber.prototype.toRna = function (dnaTranscriber) {

    var splitString = dnaTranscriber.split("");

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

    let dnaTranscriber = new DnaTranscriber();
    console.log(dnaTranscriber.toRna("ACGTGGTCTTAA")); 