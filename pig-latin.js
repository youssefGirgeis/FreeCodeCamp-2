/*
Translate the provided string to pig latin.

1. If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add "ay."

Example: Happy = appyh + ay = appyhay

2. If a word starts with two consonants move the two consonants to the end of the word and add "ay."

Example: Child = Ildch + ay = Ildchay

3. If a word starts with a vowel add the word "way" at the end of the word.

Example: Awesome = Awesome +way = Awesomeway


*/

function translatePigLatin(str) {
    
    var vowel = 'aeiou';
    var strArray;
    
    if(vowel.indexOf(str[0]) !== -1){
        
        str = str.concat('way');
    }else if(vowel.indexOf(str[0]) === -1 && vowel.indexOf(str[1]) !== -1){
        
        strArray = str.split('');
        var firstChar = strArray.shift();
        strArray.push(firstChar);
        str = strArray.join('');
        str = str.concat('ay');
    }else{
        
        strArray = str.split('');
        var firstChar = strArray.shift();
        var secondChar = strArray.shift();
        
        strArray.push(firstChar);
        strArray.push(secondChar);
        
        str = strArray.join('');
        str = str.concat('ay');
    }
    
    console.log(str);
    return str;
}

translatePigLatin("eight");
translatePigLatin("algorithm");
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");