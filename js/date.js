function showDate() {
		var date = new Date();
		var d = date.getDay(); // dd
		var m = date.getMonth()+1; // mmm
		var y = date.getFullYear() // yyyy

		if(d < 10){
			d = "0" + d;
		}

		if (m  < 10) {
			m = "0" +  m;
		}

		if (m == 11){
			m = "Nov";
		}

		var today = d + ':' + m + ':' + y;
		document.getElementById('date').innerHTML = today;
}

showDate();


	//var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];