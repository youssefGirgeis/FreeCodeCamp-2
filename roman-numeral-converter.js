/*
Convert the given number into a roman numeral.
*/


function convertToRoman(num) {

var arr = [];
var romanNumral= '';

var basicRoman = [[1,'I'], [4,'IV'], [5,'V'], [9,'IX'], [10,'X'], [40,'XL'], [50,'L'], [90,'XC'], [100,'C'],[400,'CD'],[500,'D'],[900,'CM'], [1000,'M']];
  while(num > 0){

    for(var i=0; i<basicRoman.length; i++){
        
    if(num === 0){
      break;
    }else if(num === basicRoman[i][0]){
        num = num - basicRoman[i][0];
        romanNumral += basicRoman[i][1];
        
      }else if(num < basicRoman[i][0]){
        num = num - basicRoman[i-1][0];
        romanNumral += basicRoman[i-1][1];
        break;
          
      }else if(num > 1000){
        num = num - 1000;
        romanNumral += basicRoman[basicRoman.length - 1][1];
      }
    }
  }

console.log(romanNumral);
 return(romanNumral);
}


convertToRoman(36);
convertToRoman(2014);
convertToRoman(1023);
convertToRoman(891);
convertToRoman(798);
convertToRoman(83);
