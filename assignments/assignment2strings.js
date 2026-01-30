let str = "   Hello I love JavaScript. javascript is Awesome!   ";

let finalStr = str.trim().toLowerCase().replace(/javascript/gi, "JS");
finalStr = finalStr.charAt(0).toUpperCase() + finalStr.slice(1);

let wordCount = finalStr.split(/\s+/).length;

console.log("Final String:", finalStr);
console.log("Word Count:", wordCount);
