var DnaTranscriber = function () {
};

DnaTranscriber.prototype.toRna = function (dnaTranscriber) {
    
    var splitString = dnaTranscriber.split("");

    for(i=0; i<splitString.length; i++) {

        switch (splitString[i]) {
            case "A":
                splitString[i] = "U";
                break;
            case "G":
                splitString[i] = "C";
                break;
            case "T":
                splitString[i] = "A";
                break;
            case "C":
                splitString[i] = "G";
                break;
            default:
                throw new Error("Invalid input");

        }
    }
    var joinArray = splitString.join("");

    return joinArray;

};

module.exports = DnaTranscriber;