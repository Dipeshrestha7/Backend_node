const fs = require('fs');

// writeFIle
// appendFile
// copyFile
// rename
// unlink

// fs.writeFile("Dipesh.txt", "This is my first file", (err)=>{
//     console.log("File created successfully");
//     if(err){
//         console.error("Error writing file:", err);
//     }
//     else{
//         console.log("File written successfully");
//     }
// })


// fs.appendFile("Dipesh.txt", " What a great file brother", function(err){
//     if(err){
//         console.error("Error writing file:", err);
//     }
//     else{
//         console.log("File appened successfully");
//     }
// })


// fs.rename("Dipesh.txt","Shrestha.txt", function(err){
//     if(err){
//         console.error("Error renaming file:", err);
//     }
//     else{
//         console.log("File renamed successfully");
//     }   
// })

// fs.copyFile("Shrestha.txt","./MyFile/Dipesh.txt",(err) =>{
//     if(err) console.error("Error copying file:", err);
//     else console.log("File copied successfully");
// })

fs.unlink("Shrestha.txt", (err) =>{
    if(err) console.error("Error deleting file:", err);
    else console.log("File deleted successfully");
})

