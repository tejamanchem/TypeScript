var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Who are you?', function (name) {
    console.log("Hey there ".concat(name, "!"));
    readline.close();
});
