var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    var newArr = [];
    if(n){
      for (var i = 0; i < n; i++) {
        newArr.push(array[i]);
      }
      return newArr;
    } else {
      return array[0];
    }
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    var newArr = [];
    if(n){
      for (var i = n, k = array.length - n; i > 0; i--, k++) {
        newArr.push(array[k]);
      }
      return newArr;
    } else {
      return array[array.length -1];
    }
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var newArr = [];
    array.forEach(function(el){
      if(newArr.indexOf(el) < 0){
        newArr.push(el);
      }
    });
    return newArr;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    var newArr = [];
    array.forEach(function(obj){
      newArr.push(obj[key]);
    });
    return newArr;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    return array.indexOf(target) > -1? true : false;
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    var newArr = [];
    array.forEach(function(el){
      if(Array.isArray(el)){
        newArr = newArr.concat(myFunctions.flatten(el));
      } else {
        newArr.push(el);
      }
    });
    return  newArr;
  }
};
module.exports = myFunctions;
