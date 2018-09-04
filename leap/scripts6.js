// var post = {
//     id: 2,
//     title: 'hello javascript',
//     displayTitle: function(){ //defines displayTitle as a function
//         console.log(post.title); //logs the value at title
//     }
// };

// post.displayTitle(); //calls the function located at displayTitle

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var post = { //creates the object post
//     id: 2,
//     title: 'hello javascript',
// };

// post.displayTitle = function(){ //creates displayTitle: function() and adds it as a key value pair to the object post
//     console.log(post.title);
// }

// post.displayTitle(); //calls the function located at post { displayTitle: calls this part} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var post = {
//     id: 2,
//     title: 'Hello JavaScript',
//     getTitleMarkUp: function(tag){
//         var markup = '';

//         markup += '<' + tag + '>';
//         markup += post.title;
//         markup += '<' + tag + '>';

//         return markup;
//     }
// };

// var titleHTML = post.getTitleMarkUp('h2'); //find the object post, find the key getTitleMarkUp, find the function() in the value of getTitleMarkUp
//                                            //pass the h2 to it, assign the result of the function to titleHTML, 

// console.log(titleHTML); // log the value of titleHTML

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Particle() {
    this.x = 100;
    this.y = 99;
}

var p = new Particle(); //new keyword indicates that we want to turn the function Particle into a constructor function
                        //it means make a new object, and assign the new object to the keyword this

function setup() {
    createCanvas (600, 300);
}
var particle = {
    x:100,
    y: 99
}
console.log(particle);



