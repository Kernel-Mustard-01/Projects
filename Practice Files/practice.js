// Stacks

var letters = [];

var word = "racecar"

var rword = "";

for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}



















/*
Sym([1, 2, 3], [5, 2, 1, 4]);

function sym() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
        arguments.push(arguments[i]);
    }
    return args;
}

console.log(args)
*/