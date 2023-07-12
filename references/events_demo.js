const EventEmitter = require('events');
const uuid = require('uuid');
class MyEmitter extends EventEmitter{

    log(message){
        this.emit('message', {
            id:uuid.v4(),
            message
        })
    }
}

module.exports = MyEmitter;