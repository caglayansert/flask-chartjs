var years = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
// For drawing the lines
var africa = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
var asia = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267];
var europe = [168, 170, 178, 190, 203, 276, 408, 547, 675, 734];
var latinAmerica = [40, 20, 10, 16, 24, 38, 74, 167, 508, 784];
var northAmerica = [6, 3, 2, 2, 7, 26, 82, 172, 312, 433];


var ctx = document.getElementById("myCanvas").getContext("2d");
var myCanvas = new Chart(ctx, {
  type: 'line',
  data: {
	labels: years,
	datasets: [{
		data: africa,
		label: "Africa",
		borderColor: "#3e95cd",
		fill: false
	  },
	  {
		data: asia,
		label: "Asia",
		borderColor: "#8e5ea2",
		fill: false
	  },
	  {
		data: europe,
		label: "Europe",
		borderColor: "#3cba9f",
		fill: false
	  },
	  {
		data: latinAmerica,
		label: "Latin America",
		borderColor: "#e8c3b9",
		fill: false
	  },
	  {
		data: northAmerica,
		label: "North America",
		borderColor: "#c45850",
		fill: false
	  }
	]
  },
  options: {
	//   maintainAspectRatio: false,
	  scales: {
		  yAxes : [{
			  gridLines: {
				  display: false
			  }
		  }]
	  }

  }
});
