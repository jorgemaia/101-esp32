//this file has a code to create a client using node package MQTT, sending messages each 5 seconds 

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://broker.hivemq.com:1883')
var topic = 'sensor/temperature'
var message = 'Hello MQTT from Node.js'


client.on('connect', function () {
    setInterval(function() {
        client.publish(topic, message);
        console.log("Message sent!", message);
    }, 5000);
})
