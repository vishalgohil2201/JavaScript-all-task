ref();
function ref() {
    const u_alphabet1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const u_randomLetter1 = u_alphabet1[Math.floor(Math.random() * u_alphabet1.length)];

    const l_alphabet1 = 'nopqrstuvwxyz';
    const l_randomLetter1 = l_alphabet1[Math.floor(Math.random() * l_alphabet1.length)];

    const l_alphabet2 = 'abcdefghijklm';
    const l_randomLetter2 = l_alphabet2[Math.floor(Math.random() * l_alphabet2.length)];

    const no1 = Math.floor(Math.random() * 4);
    const no2 = Math.floor((Math.random() * 4) + 3);
    const no3 = Math.floor((Math.random() * 3) + 7);

    let code = document.getElementById('captcha-code-id').value = u_randomLetter1 + no1 + l_randomLetter1 + no2 + no3 + l_randomLetter2;
}

function check() {
    let enter_code = document.getElementById('enter_captcha-id').value;

    let cd = document.getElementById('captcha-code-id').value;

    if (cd == enter_code) {
        alert('Your captcha code is correct');
        document.getElementById('enter_captcha-id').value = null;
    }
    else {
        alert('Please enter the valid captcha code');
    }
}

function refresh() {
    ref();
}