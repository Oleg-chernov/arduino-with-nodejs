var express = require("express");
var SerialPort = require("serialport");
var serialport = new SerialPort("/dev/ttyUSB0");

var dataArduino = '';
var app = express();

app.use(express.static(__dirname + "/public"));

app.post("/data", function(request, response){
	response.send(dataArduino);
});

app.get("/", function(request, response){
     response.send("<h1>Home page</h1>");
});

serialport.on('open', function () {
	console.log('Serial Port Opend');
});
	serialport.on('data', function (data) {
		dataArduino = data.toString('utf8');
	});
app.listen(3000);