var name1 = "Emma Watson";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
console.log(name1.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
