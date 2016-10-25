/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/



function whatIsInAName(collection, source) {
  
    var arr = [];
    var sourceKeys = Object.keys(source);

    for(var i =0; i< collection.length; i++){
    
        var collectionKeys = Object.keys(collection[i]);
        
        if(collectionKeys.length >= sourceKeys.length){
            
            var counter = 0;
        
            for(var sourceProp in source){

                for(var collectionProp in collection[i]){
                    
                    if(sourceProp === collectionProp && source[sourceProp] === collection[i][collectionProp]){
                        counter++;
                    }
                }
            }
            
            if(counter === sourceKeys.length){
                arr.push(collection[i]);
            }
        }
    }
    
  console.log(arr);
  //return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


/* Smart Solution

function where(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  // Filter array and remove the ones that do not have the keys from source.
  arr = collection.filter(function(obj) {
    //Use the Array method every() instead of a for loop to check for every key from source.
    return keys.every(function(key) {
      // Check if the object has the property and the same value.
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}
/*

