let sec = 0;
let mnt = 0;
let hr = 0;

let double_zero = padWithLeadingZeros(0, 2);

document.getElementById('second-zero').innerHTML = double_zero;
document.getElementById('minute-zero').innerHTML = double_zero;
document.getElementById('hour-zero').innerHTML = double_zero;

function time() {
    let stp = setInterval(function () {

        //Second
        if (sec < 60) {
            sec++;
            document.getElementById('second').innerHTML = '' + sec;

            if (sec < 10)
                document.getElementById('second-zero').innerHTML = 0;
            else
                document.getElementById('second-zero').innerHTML = null;

            //Minute
            if (sec == 60) {
                sec = 0;
                mnt++;
                document.getElementById('minute').innerHTML = '' + mnt;

                if (mnt < 10)
                    document.getElementById('minute-zero').innerHTML = 0;
                else
                    document.getElementById('minute-zero').innerHTML = null;

                //Hour
                if (mnt == 60) {
                    mnt = 0;
                    hr++;
                    document.getElementById('hour').innerHTML = '' + hr;

                    if (hr < 10)
                        document.getElementById('hour-zero').innerHTML = 0;
                    else
                        document.getElementById('hour-zero').innerHTML = null;

                    if (hr == 24) {
                        hr = 0;
                    }
                }
            }
        }

        temp = stp;
    }, 1000);
}

function start_btn() {
    time();
}

function stop_btn() {
    clearInterval(temp);
}

function restart_btn() {
    clearInterval(temp);
    sec = 0;
    mnt = 0;
    hr = 0;

    document.getElementById('second').innerHTML = double_zero;
    document.getElementById('second-zero').innerHTML = null;

    document.getElementById('minute').innerHTML = double_zero;
    document.getElementById('minute-zero').innerHTML = null;

    document.getElementById('hour').innerHTML = double_zero;
    document.getElementById('hour-zero').innerHTML = null;
}

function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}