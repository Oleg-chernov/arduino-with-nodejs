var dataArduino = []



setInterval(function(){
	$.ajax({
		type: 'POST',
		url: '/data',
		data: 'no',
		success: function (data) {
			dataArduino.push(Number(data));
	
			new Chartist.Line('.ct-chart', {
			  labels: dataArduino,
			  series: [dataArduino]
			},  {
			  fullWidth: false,
			  chartPadding: {
				right: 40
			  }});
		},
		error: function (xhr, str) {
			alert(xhr.responseCode);
		}
	});
	console.log(dataArduino)
}, 500)

document.querySelector('#clear').onclick = () => {
	dataArduino = [];
}
