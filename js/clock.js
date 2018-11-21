function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  
    if(h >= 12){
     var session = "PM";
    } else{
      var session = "AM";
    }

      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        
        document.getElementById("myClock").innerText = time; //for firefox users
        document.getElementById("myClock").textContent = time; // for I.E users

        setTimeout(showTime, 1000);
}

showTime();