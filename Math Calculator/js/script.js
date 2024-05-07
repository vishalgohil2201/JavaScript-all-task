function calc(n) {
    document.getElementById('display').value += n;
}

let fv, sv;
function sign(s) {
    fv = document.getElementById('display').value;

    document.getElementById('display').value = "";

    v = s;
}

function ans() {

    sv = document.getElementById('display').value;

    if (v == '+') {
        sum = parseFloat(fv) + parseFloat(sv);
        document.getElementById('display').value = sum;
    }
    else if (v == '-') {
        sub = parseFloat(fv) - parseFloat(sv);
        document.getElementById('display').value = sub;
    }
    else if (v == 'X') {
        mul = parseFloat(fv) * parseFloat(sv);
        document.getElementById('display').value = mul;
    }
    else if (v == '/') {
        div = parseFloat(fv) / parseFloat(sv);
        document.getElementById('display').value = div;
    }
    else if (v == '%') {
        rem = parseFloat(fv) % parseFloat(sv);
        document.getElementById('display').value = rem;
    }
}

function clearAll() {
    document.getElementById('display').value = "";
}

function clearOne() {

    let one = document.getElementById('display').value;
    let x = one.substring(0, one.length - 1);

    document.getElementById('display').value = x;
}