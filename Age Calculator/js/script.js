let currentDate = new Date();
let year = currentDate.getFullYear();
let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
let day = currentDate.getDate().toString().padStart(2, '0');

let defaultDate = year + '-' + month + '-' + day;
document.getElementById('cd').value = defaultDate;

function find() {

    // DOB
    let dob = document.getElementById('dob').value;
    let dob_date = new Date(dob);
    let dtime = dob_date.getTime();

    // Current Date
    let cd = document.getElementById('cd').value;
    let c_d = new Date(cd);
    let ctime = c_d.getTime();

    let milliSeconds = ctime - dtime;
    let seconds = Math.floor(milliSeconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let day = Math.floor(hours / 24);
    let weeks = Math.floor(day / 7);
    let month = Math.floor(day / 30.42);
    let years = Math.floor(month / 12);

    if (!dob) {
        alert("Please enter your date of birth..!")
    }
    else {
        document.getElementById('details').innerHTML =
            "Age: " + years + "<br>" +
            "Month: " + month + "<br>" +
            "Weeks: " + weeks.toLocaleString() + "<br>" +
            "Days: " + day.toLocaleString() + "<br>" +
            "Hour: " + hours.toLocaleString() + "<br>" +
            "Minutes: " + minutes.toLocaleString() + "<br>" +
            "Seconds: " + seconds.toLocaleString();
    }
}
function resetButton() {
    document.getElementById('dob').value = '';
    document.getElementById('details').innerHTML = '';
}