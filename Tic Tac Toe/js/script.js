let v = 1;
let cnt = 0;

function getData(x) {
    if (v == 1) {
        let one = "X";
        document.getElementById('a' + x).value = one;
        document.getElementById('a' + x).disabled = true;
        v = 0;
    }
    else {
        let two = "O";
        document.getElementById('a' + x).value = two;
        document.getElementById('a' + x).disabled = true;
        v = 1;
    }

    cnt++;

    if (cnt == 9) {
        document.getElementById('result').innerHTML = "Game is Over";
    }

    win();
}

function win() {

    v1 = document.getElementById('a1').value;
    v2 = document.getElementById('a2').value;
    v3 = document.getElementById('a3').value;
    v4 = document.getElementById('a4').value;
    v5 = document.getElementById('a5').value;
    v6 = document.getElementById('a6').value;
    v7 = document.getElementById('a7').value;
    v8 = document.getElementById('a8').value;
    v9 = document.getElementById('a9').value;

    if (v1 == 'X' && v2 == 'X' && v3 == 'X' || (v4 == "X" && v5 == 'X' && v6 == 'X') || (v7 == 'X' && v8 == 'X' && v9 == 'X') || (v1 == 'X' && v4 == 'X' && v7 == 'X') || (v2 == 'X' && v5 == 'X' && v8 == 'X') || (v3 == 'X' && v6 == 'X' && v9 == 'X') || (v1 == 'X' && v5 == 'X' && v9 == 'X') || (v3 == 'X' && v5 == 'X' && v7 == 'X')) {
        document.getElementById('result').innerHTML = "X is Won";
        disable_btn();
    }

    else if (v1 == 'O' && v2 == 'O' && v3 == 'O' || (v4 == "O" && v5 == 'O' && v6 == 'O') || (v7 == 'O' && v8 == 'O' && v9 == 'O') || (v1 == 'O' && v4 == 'O' && v7 == 'O') || (v2 == 'O' && v5 == 'O' && v8 == 'O') || (v3 == 'O' && v6 == 'O' && v9 == 'O') || (v1 == 'O' && v5 == 'O' && v9 == 'O') || (v3 == 'O' && v5 == 'O' && v7 == 'O')) {
        document.getElementById('result').innerHTML = "O is Won";
        disable_btn();
    }
}

function disable_btn() {
    for (i = 1; i <= 9; i++) {
        document.getElementById('a' + i).disabled = true;
    }
}

function reset() {
    location.reload();
}