function game1(n) {
    let v2 = document.getElementById('a2').value;
    let v4 = document.getElementById('a4').value;

    if (v2 == '') {
        document.getElementById('a2').value = n;
        document.getElementById('a1').value = '';
    }

    if (v4 == '') {
        document.getElementById('a4').value = n;
        document.getElementById('a1').value = '';
    }
}


function game2(n) {
    let v1 = document.getElementById('a1').value;
    let v3 = document.getElementById('a3').value;
    let v5 = document.getElementById('a5').value;

    if (v1 == '') {
        document.getElementById('a1').value = n;
        document.getElementById('a2').value = '';

    }
    if (v3 == '') {
        document.getElementById('a3').value = n;
        document.getElementById('a2').value = '';
    }

    if (v5 == '') {
        document.getElementById('a5').value = n;
        document.getElementById('a2').value = '';
    }

}

function game3(n) {
    let v2 = document.getElementById('a2').value;
    let v6 = document.getElementById('a6').value;

    if (v2 == '') {
        document.getElementById('a2').value = n;
        document.getElementById('a3').value = '';
    }

    if (v6 == '') {
        document.getElementById('a6').value = n;
        document.getElementById('a3').value = '';
    }
}

function game4(n) {
    let v1 = document.getElementById('a1').value;
    let v5 = document.getElementById('a5').value;
    let v7 = document.getElementById('a7').value;

    if (v1 == '') {
        document.getElementById('a1').value = n;
        document.getElementById('a4').value = '';
    }

    if (v5 == '') {
        document.getElementById('a5').value = n;
        document.getElementById('a4').value = '';
    }

    if (v7 == '') {
        document.getElementById('a7').value = n;
        document.getElementById('a4').value = '';
    }
}

function game5(n) {
    let v2 = document.getElementById('a2').value;
    let v4 = document.getElementById('a4').value;
    let v6 = document.getElementById('a6').value;
    let v8 = document.getElementById('a8').value;


    if (v2 == '') {
        document.getElementById('a2').value = n;
        document.getElementById('a5').value = '';
    }

    if (v4 == '') {
        document.getElementById('a4').value = n;
        document.getElementById('a5').value = '';
    }

    if (v6 == '') {
        document.getElementById('a6').value = n;
        document.getElementById('a5').value = '';
    }

    if (v8 == '') {
        document.getElementById('a8').value = n;
        document.getElementById('a5').value = '';
    }

}

function game6(n) {
    let v5 = document.getElementById('a5').value;
    let v3 = document.getElementById('a3').value;
    let v9 = document.getElementById('a9').value;

    if (v5 == '') {
        document.getElementById('a5').value = n;
        document.getElementById('a6').value = '';
    }

    if (v3 == '') {
        document.getElementById('a3').value = n;
        document.getElementById('a6').value = '';
    }

    if (v9 == '') {
        document.getElementById('a9').value = n;
        document.getElementById('a6').value = '';
    }
}

function game8(n) {
    let v5 = document.getElementById('a5').value;
    let v7 = document.getElementById('a7').value;
    let v9 = document.getElementById('a9').value;

    if (v5 == '') {
        document.getElementById('a5').value = n;
        document.getElementById('a8').value = '';
    }

    if (v7 == '') {
        document.getElementById('a7').value = n;
        document.getElementById('a8').value = '';
    }

    if (v9 == '') {
        document.getElementById('a9').value = n;
        document.getElementById('a8').value = '';
    }
}

function game7(n) {
    let v4 = document.getElementById('a4').value;
    let v8 = document.getElementById('a8').value;


    if (v4 == '') {
        document.getElementById('a4').value = n;
        document.getElementById('a7').value = '';
    }

    if (v8 == '') {
        document.getElementById('a8').value = n;
        document.getElementById('a7').value = '';
    }
}

function game9(n) {
    let v8 = document.getElementById('a8').value;
    let v6 = document.getElementById('a6').value;

    if (v8 == '') {
        document.getElementById('a8').value = n;
        document.getElementById('a9').value = '';
    }

    if (v6 === '') {
        document.getElementById('a6').value = n;
        document.getElementById('a9').value = '';
    }
}

function reset() {
    location.reload();
}

let a = [];
function random() {

    let bttn = document.getElementsByClassName('btn');
    for (i = 0; i < 9;) {
        let no = Math.floor((Math.random() * 9) + 1);

        if (!a.includes(no)) {
            a.push(no);
            i++;
        }
    }

    for (i = 0; i < 9; i++) {
        if (a[i] == 9) {
            a[i] = '';
        }
        bttn[i].value = a[i];
    }
}
random();