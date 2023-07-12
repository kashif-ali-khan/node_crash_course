const fs = require('fs');
const path = require('path');


const currentPath = path.join(__dirname,'/test');

// Make Directory
fs.mkdir(currentPath,{},err=>{

})

// Write Content to FIle
const fileToWrite = path.join(__dirname,'/test','demo.txt');
fs.writeFile(fileToWrite,'Hello world',(err)=>{
    if(err){
        throw err;
    }

    // Append content to file
    fs.appendFile(fileToWrite,"\nNew Content Appended",err=>{

    })

})