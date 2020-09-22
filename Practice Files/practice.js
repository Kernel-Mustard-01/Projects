/*

// Sets

function mySet() {

    var collection = [];
  
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
  };
  this.values = function() {
      return collection;
  };

  this.add = function (element) {
      if(!this.has(element)){
          collection.push(element);
          return true;
      }
      return false;
  };
  this.remove = function(element) {
     if (this.has(element)) {
         index = collection.indexOf(element);
         collection.splice(index,1);
         return true;
     }
     return false;
  };
  this.size = function() {
      return collection.length;
  };
  
  this.union = function(otherSet) {
      var unionSet = new mySet();
      var firstSet = this.values();
      var secondSet =otherSet.values();
      firstSet.forEach(function(e) {
          unionSet.add(e);
      });
      secondSet.forEach(function(e){
          unionSet.add(e);
      });
      return unionSet;
  };

  this.intersection = function(otherSet) {
      var intersectionSet = new mySet();
      var firstSet = this.value();
      firstSet.forEach(function(e) {
          if(otherSet.has(e)) {
            intersectionSet.add(e);
          }
      });
      return intersectionSet;
  };

  this.subset = function (otherSet) {
      var firstSet = this.values();
      return firstSet.every(function (value) {
          return otherSet.has(value);
      });
  };
 }
 var setA = new mySet();
 var setB = new mySet();
 setA.add("a");
 setB.add("b");
 setB.add("c");
 setB.add("a");
 setB.add("d");
 console.log(setA.subset(setB));


/*
var Stack = function () {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
    }

    this.size = function() {
        return this.count;
    }

    this.peek = function () {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());





/* Stacks

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