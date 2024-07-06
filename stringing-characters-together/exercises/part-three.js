//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let firstInitial = language.slice(0,1);
let fifthInitial = language.slice(4,5);
console.log(firstInitial + fifthInitial);

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.replace("JavaScript", "js").toUpperCase());

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${language[0] + language[4]}'.`)

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.charAt(0).concat(language.charAt(4)).toLowerCase());

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let firstWord = notTitleCase.charAt(0).toUpperCase().concat(notTitleCase.substring(1,5));
let secondWord = notTitleCase.charAt(6).toUpperCase().concat(notTitleCase.substring(7));
console.log(`${firstWord} ${secondWord}`);
