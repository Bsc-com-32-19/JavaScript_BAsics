//tolocalString() returns a string with a language 
//sensitive representation of this

// number.tolocalString(locale,{options});

//'locale' specify that the language (undefined = default)
//'options' object with formatting options.

let myNum = 200;
// myNum = myNum.toLocaleString("en-US", {style:"currency", currency:"MKW"}); // us English
// //myNum = myNum.toLocaleString("hi-IN"); //hindi
// myNum = myNum.toLocaleString("de-DE"); // standard German

// myNum = myNum.toLocaleString(undefined, {style:"percent"});// convert num to percent
myNum = myNum.toLocaleString(undefined, { style:"unit", unit: "celsius" });



console.log(myNum);