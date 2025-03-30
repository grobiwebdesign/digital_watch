function showDate() {
    var date = new Date(); // Example: Easter Sunday 2025 (April 20)
    
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();

    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;

    // Months of the year
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    m = monthNames[m - 1];

    var today = d + ' . ' + m + ' . ' + y;
    document.getElementById('todaysDate').innerHTML = today;

    // Holiday dates
    const mEssage = document.getElementById('holidayDate');
    const holidays = {
        "01-Jan": "Happy New Year!",
        "25-Jan": "Rabbie Burns Day",
        "01-Mar": "St Davids Day",
        "17-Mar": "St Patricks Day",
        "31-Oct": "Happy Halloween!",
        "05-Nov": "Bonfire Night",
        "30-Nov": "St Andrews Day",
        "25-Dec": "Merry Christmas!",
        "26-Dec": "Boxing Day",
        "28-Dec": "Bank Holiday"
    };

    // Get dynamic Easter Sunday
    let easter = getEasterSunday(y);
    let easterMonth = monthNames[easter.month - 1];
    // Get Parents days
    let motheringSunday = getMothersDay(y);
    let fathersDay = getFathersDay(y);

    let key = d + "-" + m;
    if (holidays[key]) {
        mEssage.innerHTML = holidays[key];
        mEssage.style.display = "block";
    }
      else if (d === easter.day && m === easterMonth) mEssage.innerHTML = "Easter Sunday!";
      else if (d === easter.day + 1 && m === easterMonth) {
        mEssage.innerHTML = "Easter Monday";
    }
    else if (d === motheringSunday.day && m === monthNames[motheringSunday.month - 1]) {
        mEssage.innerHTML = "Happy Mother’s Day";
    } 
    else if (d === fathersDay.day && m === monthNames[fathersDay.month - 1]) {
        mEssage.innerHTML = "Happy Father’s Day";
    } 
      else {
        mEssage.style.display = "none";
    }
}

function getEasterSunday(year) {
    var f = Math.floor,
        a = year % 19,
        b = f(year / 100),
        c = year % 100,
        d = f(b / 4),
        e = b % 4,
        g = f((8 * b + 13) / 25),
        h = (19 * a + b - d - g + 15) % 30,
        i = f(c / 4),
        k = c % 4,
        l = (32 + 2 * e + 2 * i - h - k) % 7,
        m = f((a + 11 * h + 22 * l) / 451),
        month = f((h + l - 7 * m + 114) / 31), // March or April
        day = ((h + l - 7 * m + 114) % 31) + 1; // Day of month

    return { day, month };
}

// Calculate UK Mother's Day (Fourth Sunday of Lent)
function getMothersDay(year) {
    let easter = getEasterSunday(year);
    let lentStart = new Date(year, easter.month - 1, easter.day); // Easter Sunday
    lentStart.setDate(lentStart.getDate() - 42); // Lent starts 40 days before, plus Ash Wednesday

    let motheringSunday = new Date(lentStart);
    motheringSunday.setDate(lentStart.getDate() + (7 - lentStart.getDay()) % 7 + 21); // Fourth Sunday of Lent

    return { day: motheringSunday.getDate(), month: motheringSunday.getMonth() + 1 };
}

// Calculate UK Father's Day (Third Sunday of June)
function getFathersDay(year) {
    let date = new Date(year, 5, 1); // Start of June (Month 5 in JS)
    let firstSunday = date.getDate() + ((7 - date.getDay()) % 7); // First Sunday
    let fathersDay = firstSunday + 14; // Third Sunday

    return { day: fathersDay, month: 6 };
}

// Update the date every second to transition smoothly at midnight
setInterval(showDate, 1000);
showDate();