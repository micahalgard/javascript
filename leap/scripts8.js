var Cipher = function () {
};                       

Cipher.prototype.encode = function(str){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var end = Math.floor((Math.random() * 25) + 1);
    var start = Math.floor(Math.random() * Math.floor(end))
    var key1 = alphabet.slice(start, end);
    var key2 = key1.join('');
    var newStr = '';
    var newKey = '';
    for(var i=0; i<key2.length; i++){
        var currentKey = key2[i]
        var keyIndex = alphabet.indexOf(currentKey);
        newKey += keyIndex + ',';
    }
    for(var i = 0; i<str.length; i++){
        var currentLetter = str[i];
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + 0;
        newStr += alphabet[newIndex];
    }
    // return [newStr, newKey, key1];
    return [newStr, newKey];
}

var cipher = new Cipher;

console.log(cipher.encode('iamapandabear'))



// var key = cipher.key();
//loop through the the length of the message, also loop through the key.
//take a key, get its index number from the alphabet, shift over letters in a message that many times


// Cipher.prototype.decode = function(str, num) {//this function requires 2 arguements, a string and a number
//     var lowerCaseStr = str.toLowerCase();//sets all letters to lowercase
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');//splits the alphabet into an array
//     var newStr = '';//sets a newStr to an empty string

//     for(var i = 0; i < lowerCaseStr.length; i++) {//for loop that loops through every letter in the string
//         var currentLetter = lowerCaseStr[i];//the current letter in the loop
//         if(currentLetter === ' '){//if the current index is a space
//             newStr;//set it to nothing
//             continue;//start the loop over again
//         }
//         var currentIndex = alphabet.indexOf(currentLetter);//search alpahbet for the current letter, get its index value. index of a is 1
//         var newIndex = currentIndex + num.length;//add 2 to the current index value
//         if(newIndex > 25) newIndex = newIndex - 26;//if index value is greater then 25, subtract 26
//         if(newIndex < 0) newIndex = newIndex + 26;//if the index value is less then 0, add 26
//         if(str[i] === str[i].toUpperCase()) {//if the original index number, was equal to the index number of the string turned uppercase, 
//             newStr += alphabet[newIndex].toUpperCase();//take the empty string add the letter with the new index number, make it uppercase
//         }
//         else newStr += alphabet[newIndex];//take empty string, add a letter with the index number equal to newIndex
//     }
//     return newStr;//once the for loop is done, return the value of newString, wich should be the value of the converted string. defined on line 17.
// }

// const cipher = new Cipher();

//take the index numbers of a section of the alphabet, loop through those numbers, then loop through the message, shifting the message
//over at the current alphabet index value
// Cipher.prototype.key = function(){
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     var end = Math.floor((Math.random() * 25) + 1);
//     var start = Math.floor(Math.random() * Math.floor(end))
//     var key1 = alphabet.slice(start, end);
//     let key2 = key1.join('')
//    return key1;
// }