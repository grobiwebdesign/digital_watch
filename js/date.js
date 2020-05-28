function showDate() {

	var date = new Date();

	// dd

	var d = date.getDate(); 

	// mmm

	var m = date.getMonth()+1; 

	// yyyy

	var y = date.getFullYear(); 

		//show single digit if less than 10

		if(d < 10){ 

			d = "0" + d;

		}

		// show single digit if less than 10

		if (m  < 10){ 

			m = "0" +  m;

		}

		// Months of the year

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

		var today = d + ' . ' + m + ' . ' + y;
		document.getElementById('todaysDate').innerHTML = today;

		// Holiday dates

		const mEssage = document.getElementById('holidayDate');

			// New Year

			if (d === 1 && m === "Jan"){

				mEssage.innerHTML = "Happy New Year!";

			}

			// Wales

			if (d === 1 && m === "Mar"){

				mEssage.innerHTML = "St Davids Day";
			
			} 

			// St Paddies Day

			if (d === 17 && m === "Mar"){

				mEssage.innerHTML = "St Patricks Day";
			
			} 

			// Halloween

			if (d === 31 && m === "Oct"){

				mEssage.innerHTML = "Happy Halloween!";
			
			}

			// Firework Night

			if (d === 5 && m === "Nov"){

				mEssage.innerHTML = "Guy Fawlkes Day";
			
			} 

			// Scotland day

			if (d === 30 && m === "Nov"){

				mEssage.innerHTML = "St Andrews Day";
			
			}  

			// XMAS

			if (d === 25 && m === "Dec"){

				mEssage.innerHTML = "Merry Christmas!";
			
			} 

			// Boxing

			if (d === 26 && m === "Dec"){

				mEssage.innerHTML = "Boxing Day";
			
			}

			// December Bank

			if (d === 28 && m === "Dec"){

				mEssage.innerHTML = "Bank Holiday";
			
			}  

				else {

					document.getElementById('holidayDate').style.display="none"; 
	 
				} 	
}

showDate();