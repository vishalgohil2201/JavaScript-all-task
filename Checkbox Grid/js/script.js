function cb(n) {
    let c = document.getElementsByName('check');

    let i, j, k;
    if (n == 1) {
        for (i = 0; i < 100; i++) {
            c[i].checked = true;
        }
    }

    if ((n == 11) || (n == 21) || (n == 31) || (n == 41) || (n == 51) || (n == 61) || (n == 71) || (n == 81) || (n == 91)) {
        for (j = n - 1; j < n + 9; j++) {
            c[j].checked = true;
        }
    }

    if (n == 2 || n == 3 || n == 4 || n == 5 || n == 6 || n == 7 || n == 8 || n == 9 || n == 10) {
        for (k = n - 1; k < n + 90; k += 10) {
            c[k].checked = true;
        }
    }
    console.log(c[11]);
}
function resetCheck() {
    let box = document.getElementsByName('check');
    for (i = 0; i < 100; i++) {
        box[i].checked = false;
    }
}