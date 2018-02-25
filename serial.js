var SerialPort = require("serialport");
var serialport = new SerialPort("/dev/ttyUSB0");

serialport.on('open', function () {
	console.log('Serial Port Opend');
	serialport.on('data', function (data) {
		console.log(data.toString('utf8'));
	});
});
