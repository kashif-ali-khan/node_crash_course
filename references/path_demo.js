const path = require('path');


console.log(path.basename(__filename))
console.log(path.extname(__filename))

// path object
console.log(path.parse(__filename));


//concatenate patho