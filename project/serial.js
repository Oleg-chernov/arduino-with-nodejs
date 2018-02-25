var express = require("express"); //подключаем express
var SerialPort = require("serialport"); //подключаем serialport
var serialport = new SerialPort("/dev/ttyUSB0"); //устанавливаем порт с которого будем получать данные

var dataArduino = '';
var app = express();

app.use(express.static(__dirname + "/public"));

serialport.on('data', function (data) {
	dataArduino = data.toString('utf8'); // получаем данные, преобразуем её к нормальному виду и записываем в переменную

});

app.post("/data", function(request, response){
	response.send(dataArduino); //при запросе отправляем значение dataArduino
});

serialport.on('open', function () {
	console.log('Serial Port Opend'); // открываем последовательный порт
});

app.listen(3000); //назначаем порт для сервера