function showDate() {
		var date = new Date();
		var d = date.getDate(); // dd
		var m = date.getMonth()+1; // mmm
		var y = date.getFullYear() // yyyy

		if(d < 10){ //show single digit if less than 10
			d = "0" + d;
		}

		if (m  < 10) { // show single digit if less than 10
			m = "0" +  m;
		}

		if (m == 1){
		m = "Jan";
		}

		if (m == 2){
		m = "Feb";
		}

		if (m == 3){
		m = "Mar";
		}

		if (m == 4){
		m = "Apr";
		}

		if (m == 5){
		m = "May";
		}

		if (m == 6){
		m = "Jun";
		}

		if (m == 7){
		m = "Jul";
		}

		if (m == 8){
		m = "Aug";
		}

		if (m == 9){
		m = "Sept";
		}

		if (m == 10){
		m = "Oct";
		}

		if (m == 11){
		m = "Nov";
		}

		if (m == 12){
		m = "Dec";
		}

		var today = d + ' ' + m + ' ' + y;
		document.getElementById('todaysDate').innerHTML = today;
}

showDate();


	//var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];