//this file will receive the messages sent by the sensor.js file

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://broker.hivemq.com:1883')
var topic = 'sensor/temperature'

client.on('connect', function () {
    client.subscribe(topic);
}
)

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
   
})
