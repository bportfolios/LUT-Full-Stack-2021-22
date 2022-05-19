const fs = require("fs");
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created..,");
// });

//create and write to file
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hi there!", (err) => {
//   if (err) throw err;
//   console.log("File wrote...");
//   //file append
//   fs.appendFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     "Hi there 2!",
//     (err) => {
//       if (err) throw err;
//       console.log("File wrote...");
//     }
//   );
// });

//read file
// fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

//read file
fs.rename(
    path.join(__dirname, "/test", "hello.txt"), 
    path.join(__dirname, "/test", "helloworld.txt"), 
    (err) => {
        if (err) throw err;
        console.log("File rename ..");
    });
