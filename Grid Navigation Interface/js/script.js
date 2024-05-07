let no = document.getElementsByClassName('box');
    function left() {
        let left;
        for (let i = 0; i < no.length; i++) {
            if (no[i].getAttribute("style")) {
                left = i;
            }
        }
        console.log(left)
        for (i = 0; i < no.length; i++) {
            no[i].removeAttribute("style");
        }
        no[left].style.backgroundColor = "red";
        if (left == 10) {
            left = 14;
        } else if (left == 5) {
            left = 9;
        } else if (left == 15) {
            left = 19;
        } else if (left == 20) {
            left = 24;
        } else if (left == 0) {
            left = 4;
        } else {
            left -= 1;
        }
        for (i = 0; i < no.length; i++) {
            no[i].removeAttribute("style");
        }
        no[left].style.backgroundColor = "red";
    }
    function right() {
        let right;
        for (let i = 0; i < no.length; i++) {
            if (no[i].getAttribute("style")) {
                right = i;
            }
        }
        console.log(right)
        for (i = 0; i < no.length; i++) {
            no[i].removeAttribute("style");
        }
        no[right].style.backgroundColor = "red";
        if (right == 14) {
            right = 10;
        } else if (right == 4) {
            right = 0;
        } else if (right == 9) {
            right = 5;
        } else if (right == 19) {
            right = 15;
        } else if (right == 24) {
            right = 20;
        } else {
            right += 1;
        }
        for (i = 0; i < no.length; i++) {
            no[i].removeAttribute("style");
        }
        no[right].style.backgroundColor = "red";
    }
    function up() {
        let up;
        for (let i = 0; i < no.length; i++) {
            if (no[i].getAttribute("style")) {
                up = i;
            }
        }
        console.log(up)
        if (up == 2) {
            up = 22;
        } else if (up == 1) {
            up = 21;
        } else if (up == 0) {
            up = 20;
        } else if (up == 3) {
            up = 23;
        } else if (up == 4) {
            up = 24;
        }
        else {
            up -= 5;
        }
        for (i = 0; i < no.length; i++) {
            no[i].removeAttribute("style");
        }
        no[up].style.backgroundColor = "red";
    }
    function down() {
        let down;
        for (let i = 0; i < no.length; i++) {
            if (no[i].getAttribute("style")) {
                down = i;
            }
        }
        console.log(down)
        if (down == 22) {
            down = 2;
        } else if (down == 21) {
            down = 1;
        } else if (down == 20) {
            down = 0;
        } else if (down == 23) {
            down = 3;
        } else if (down == 24) {
            down = 4;
        }
        else {
            down += 5;
        }
        for (i = 0; i < no.length; i++) {
            no[i].removeAttribute("style");
        }
        no[down].style.backgroundColor = "red";
    }
    function topLeft() {
        let tl;
        for (let i = 0; i < no.length; i++) {
            if (no[i].getAttribute("style")) {
                tl = i;
            }
        }
        console.log(tl)
        if (tl == 0) {
            tl = 24;
        } else if (tl == 1) {
            tl = 19;

        } else if (tl == 2) {
            tl = 14;

        } else if (tl == 3) {
            tl = 9;

        } else if (tl == 4) {
            tl = 4;

        } else if (tl == 5) {
            tl = 23;
        }
        else if (tl == 10) {
            tl = 22;
        }
        else if (tl == 15) {
            tl = 21;
        }
        else if (tl == 20) {
            tl = 20;
        }
        else {
            tl -= 6
        }
        for (i = 0; i < no.length; i++) {
            no[i].removeAttribute("style");
        }
        no[tl].style.backgroundColor = "red";
    }
    function topRight() {
        let tr;
        for (let i = 0; i < no.length; i++) {
            if (no[i].getAttribute("style")) {
                tr = i;
            }
        }
        console.log(tr)
        if (tr == 4) {
            tr = 20;
        } else if (tr == 3) {
            tr = 15;
        } else if (tr == 2) {
            tr = 10;
        } else if (tr == 1) {
            tr = 5;
        } else if (tr == 0) {
            tr = 0;
        } else if (tr == 9) {
            tr = 21;
        } else if (tr == 14) {
            tr = 22
        } else if (tr == 19) {
            tr = 23
        } else if (tr == 24) {
            tr = 24
        } else {
            tr -= 4
        }
        for (i = 0; i < no.length; i++) {
            no[i].removeAttribute("style");
        }
        no[tr].style.backgroundColor = "red"

    }
    function bottomLeft() {
        let bl;
        for (let i = 0; i < no.length; i++) {
            if (no[i].getAttribute("style")) {
                bl = i;
            }
        }
        console.log(bl)
        if (bl == 20) {
            bl = 4;
        } else if (bl == 15) {
            bl = 3;
        } else if (bl == 10) {
            bl = 2;
        } else if (bl == 5) {
            bl = 1;
        } else if (bl == 0) {
            bl = 0;
        } else if (bl == 21) {
            bl = 9;
        } else if (bl == 22) {
            bl = 14
        } else if (bl == 23) {
            bl = 19
        } else if (bl == 24) {
            bl = 24
        } else {
            bl += 4
        }
        for (i = 0; i < no.length; i++) {
            no[i].removeAttribute("style");
        }
        no[bl].style.backgroundColor = "red"

    }
    function bottomRight() {
        let br;
        for (let i = 0; i < no.length; i++) {
            if (no[i].getAttribute("style")) {
                br = i;
            }
        }
        console.log(br)
        if (br == 24) {
            br = 0;
        } else if (br == 19) {
            br = 1;

        } else if (br == 14) {
            br = 2;

        } else if (br == 9) {
            br = 3;

        } else if (br == 4) {
            br = 4;
        }
        else if (br == 20) {
            br = 20;
        }
        else if (br == 21) {
            br = 15;
        }
        else if (br == 22) {
            br = 10;
        }
        else if (br == 23) {
            br = 5;
        } else {
            br += 6
        }
        for (i = 0; i < no.length; i++) {
            no[i].removeAttribute("style");
        }
        no[br].style.backgroundColor = "red";
    }