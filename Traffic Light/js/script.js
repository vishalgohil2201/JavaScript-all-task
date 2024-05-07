function red() {
    document.getElementById('red-id').style.backgroundColor = '#D21818';
    document.getElementById('yellow-id').style.backgroundColor = '#eaef89';
    document.getElementById('green-id').style.backgroundColor = '#a0d08c';

    document.getElementById('red-id').style.boxShadow = '0 0 35px #D21818';
    document.getElementById('yellow-id').style.boxShadow = 'none';
    document.getElementById('green-id').style.boxShadow = 'none';
}

function yellow() {
    document.getElementById('yellow-id').style.backgroundColor = '#E3EB38';
    document.getElementById('green-id').style.backgroundColor = '#a0d08c';
    document.getElementById('red-id').style.backgroundColor = '#d59696';

    document.getElementById('yellow-id').style.boxShadow = '0 0 35px #E3EB38';
    document.getElementById('green-id').style.boxShadow = 'none';
    document.getElementById('red-id').style.boxShadow = 'none';
}

function green() {
    document.getElementById('green-id').style.backgroundColor = '#64D437';
    document.getElementById('red-id').style.backgroundColor = '#d59696';
    document.getElementById('yellow-id').style.backgroundColor = '#eaef89';

    document.getElementById('green-id').style.boxShadow = '0 0 35px #64D437';
    document.getElementById('red-id').style.boxShadow = 'none';
    document.getElementById('yellow-id').style.boxShadow = 'none';

}

light();
function light() {
    setTimeout(function () {
        red();
    }, 0)

    setTimeout(function () {
        yellow();
    }, 25000)

    setTimeout(function () {
        green();
    }, 50000)
}

setInterval(function () {
    light();
}, 75000);

