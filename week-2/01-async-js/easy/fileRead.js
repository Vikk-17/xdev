const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
    console.log("Data of the file is: ");
    console.log(data);
});

let a = 0;
for(let i = 0; i<10; i++){
    a = a + i;
}
console.log(a);
