const person= require('./person');

const eventEmitter = require('./references/events_demo');
const obj = new person('kashif', '38')
obj.greet();
console.log('I am testing');



const eventObj = new eventEmitter();
eventObj.on('message',data=>{
    console.log('Data returned is', data);
})

eventObj.log('Hello World')

eventObj.log('Hello World V4')