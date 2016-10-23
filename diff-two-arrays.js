/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/


function diffArray(arr1, arr2){
    
    var diffArr = [];
        //console.log('test');
        for(var i = 0; i < arr1.length; i++){
            var counter = 0;
            for(var j=0 ; j<arr2.length; j++){
                if(arr1[i] !== arr2[j]){
                    counter++;
                }
            }
            if(counter === arr2.length){
                diffArr.push(arr1[i]);
            }
        }
        
        for(var i = 0; i < arr2.length; i++){
            var counter = 0;
            for(var j=0 ; j<arr1.length; j++){
                if(arr2[i] !== arr1[j]){
                    counter++;
                }
            }
            if(counter === arr1.length){
                diffArr.push(arr2[i]);
            }
        }
    console.log(diffArr);
    return diffArr;
}


diffArray([1, 2, 3, 5, 4], [1, 2, 3, 5]);
diffArray(["pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
