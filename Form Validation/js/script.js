function frm() {
    // Username
    let username = document.getElementById('un').value;

    if (username == '') {
        alert("Please Enter the Username..!");
        return false;
    }

    //Password
    let pw = document.getElementById('pw').value;

    let uppercase = /(?=.*?[A-Z])/;
    let lowercase = /(?=.*?[a-z])/;
    let digit = /(?=.*?[a-z])/;
    let special_char = /(?=.*?[#?!@$%^&*-])/;
    let minimum_no = /(.{8,})/;

    if (pw == '') {
        alert('Please enter the password');
        return false;
    }

    if (pw != '') {
        //upperCase
        if (uppercase.test(pw) == false) {
            alert("Enter the one uppercase(A - Z)");
            return false;
        }

        //lowerCase
        if (lowercase.test(pw) == false) {
            alert("Enter the one lowercase(a - z)");
            return false;
        }
        // digits
        if (digit.test(pw) == false) {
            alert("Enter the one digit(0 - 9)");
            return false;
        }

        // specialcharacter
        if (special_char.test(pw) == false) {
            alert("Enter the one Special character (!@#$%^&*)");
            return false;
        }

        // MinimumNo
        if (minimum_no.test(pw) == false) {
            alert("Enter the minimum 8 digits");
            return false;
        }
    }

    // Check Confirm password
    let cpw = document.getElementById('cpw').value;

    if (pw != cpw) {
        alert('Please Enter Confirm Valide password');
        return false;
    }

    //Gender
    let gender = document.getElementsByName('gen');

    if (username != '' && pw != '' && cpw != '') {
        if (gender[0].checked == false && gender[1].checked == false) {
            alert('Please Enter your gender');
            return false;
        }
    }

    //City
    let city = document.getElementById('city').value;

    if (city == '') {
        alert("Please Select your city");
        return false;
    }

    // Hobby
    let cnt = 0;
    let hobby = document.getElementsByName('hby');

    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i].checked == true) {
            cnt++;
        }
    }

    if (cnt < 2) {
        alert("Please enter your hobby");
        return false;
    }
}