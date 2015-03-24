Implement these Underscore.js Methods

1. First -  [http://underscorejs.org/#first](http://underscorejs.org/#first)
2. Last - [http://underscorejs.org/#last](http://underscorejs.org/#last)
3. Uniq - [http://underscorejs.org/#uniq](http://underscorejs.org/#uniq)
4. Pluck - [http://underscorejs.org/#pluck](http://underscorejs.org/#pluck)
4. Contains - [http://underscorejs.org/#contains](http://underscorejs.org/#contains)

### How to tackle this assignment

0. Fork and Clone the repo and then run npm install to make sure you pull in Chai.
1. First, start with some research, make sure you know exactly what these five functions do before you try to implement them on your own.
2. The "describe" and "it" blocks have been written for you, so start by writing the appropriate tests that match what is inside the "it" block.
3. Once your tests are written, try to write a function that makes the test pass.

### Bonus

Implement the function flatten  - [http://underscorejs.org/#flatten](http://underscorejs.org/#flatten) - you will need to use recursion to solve this.

******
In-Class Excercise
  Array.push re-implemented:
  function pusho(arr, item){
    if(Array.isArray(arr)){
    arr.splice(arr.length, 0, item);
    return arr.length;
    }
    throw TypeError("The first character must be an array");
  }

  obj = {a:"apple", b:"banana", c:"cantelope"}
  for(var fruit in obj){
    console.log( "Fruit " + fruit + " = " + obj[fruit]);
  }

  .map function
  function mapo(arr, callback){
    var arr1 = [];
    arr.forEach(function(e){
    arr1.push(callback(e));
    });
    return arr1;
  }

  .filter
  function filtero(arr, callback){
    var arr1 = [];
    arr.forEach(function(e){
    if(callback(e)){
    arr1.push(e);
    }
    });
    return arr1
  }

  Object Constructor
  var House = function(rooms, parking){
    this.rooms = rooms,
    this.parking = parking
  };

  object instance method
  House.prototype.showRooms = function(){alert("This house has " + this.rooms + "rooms");};

  Object class property
  House.prototype.neighborhood = [];

  ***Runs say("Hello")("world") and returns => "Hello world"
  var say = function(string1) {
    return (function(string2){
      return string1 + " " + string2;
      });
  }
