
function square() {
    document.getElementById('shapes').style.width = "100px";
    document.getElementById('shapes').style.height = "100px";
    document.getElementById('shapes').style.backgroundColor = "darkseagreen";
    document.getElementById('shapes').style.border = "none";
    document.getElementById('shapes').style.transform = "none";
    document.getElementById('shapes').style.borderRadius = "0";
}

function rectangle() {
    document.getElementById('shapes').style.width = "200px";
    document.getElementById('shapes').style.height = "100px";
    document.getElementById('shapes').style.backgroundColor = "darkslateblue";
    document.getElementById('shapes').style.border = "none";
    document.getElementById('shapes').style.transform = "none";
    document.getElementById('shapes').style.borderRadius = "0";
}

function roundedRectangle() {
    document.getElementById('shapes').style.width = "150px";
    document.getElementById('shapes').style.height = "100px";
    document.getElementById('shapes').style.backgroundColor = "indianred";
    document.getElementById('shapes').style.borderRadius = "15px";
    document.getElementById('shapes').style.border = "none";
    document.getElementById('shapes').style.transform = "none";
}


function circle() {
    document.getElementById('shapes').style.width = "100px";
    document.getElementById('shapes').style.height = "100px";
    document.getElementById('shapes').style.backgroundColor = "lightsteelblue";
    document.getElementById('shapes').style.borderRadius = "50%";
    document.getElementById('shapes').style.border = "none";
    document.getElementById('shapes').style.transform = "none";
}

function oval() {
    document.getElementById('shapes').style.width = "160px";
    document.getElementById('shapes').style.height = "100px";
    document.getElementById('shapes').style.backgroundColor = "navajowhite";
    document.getElementById('shapes').style.borderRadius = "50%";
    document.getElementById('shapes').style.border = "none";
    document.getElementById('shapes').style.transform = "none";

}

function triangleUp() {
    document.getElementById('shapes').style.width = "0";
    document.getElementById('shapes').style.height = "0";
    document.getElementById('shapes').style.borderLeft = "50px solid transparent";
    document.getElementById('shapes').style.borderRight = "50px solid transparent";
    document.getElementById('shapes').style.borderBottom = "100px solid slategray";
    document.getElementById('shapes').style.backgroundColor = "transparent";
    document.getElementById('shapes').style.borderRadius = "0";
    document.getElementById('shapes').style.borderTop = "none";
    document.getElementById('shapes').style.transform = "none";
}

function triangleDown() {
    document.getElementById('shapes').style.width = "0";
    document.getElementById('shapes').style.height = "0";
    document.getElementById('shapes').style.borderLeft = "50px solid transparent";
    document.getElementById('shapes').style.borderRight = "50px solid transparent";
    document.getElementById('shapes').style.borderTop = "100px solid slategray";
    document.getElementById('shapes').style.backgroundColor = "transparent";
    document.getElementById('shapes').style.borderRadius = "0";
    document.getElementById('shapes').style.borderBottom = "none";
    document.getElementById('shapes').style.transform = "none";
}

function triangleLeft() {
    document.getElementById('shapes').style.width = "0";
    document.getElementById('shapes').style.height = "0";
    document.getElementById('shapes').style.borderTop = "50px solid transparent";
    document.getElementById('shapes').style.borderBottom = "50px solid transparent";
    document.getElementById('shapes').style.borderRight = "100px solid slategray";
    document.getElementById('shapes').style.backgroundColor = "transparent";
    document.getElementById('shapes').style.borderRadius = "0";
    document.getElementById('shapes').style.borderLeft = "none";
    document.getElementById('shapes').style.transform = "none";
}

function triangleRight() {
    document.getElementById('shapes').style.width = "0";
    document.getElementById('shapes').style.height = "0";
    document.getElementById('shapes').style.borderTop = "50px solid transparent";
    document.getElementById('shapes').style.borderBottom = "50px solid transparent";
    document.getElementById('shapes').style.borderLeft = "100px solid slategray";
    document.getElementById('shapes').style.backgroundColor = "transparent";
    document.getElementById('shapes').style.borderRadius = "0";
    document.getElementById('shapes').style.borderRight = "none";
    document.getElementById('shapes').style.transform = "none";
}

function triangleTopLeft() {
    document.getElementById('shapes').style.width = "0";
    document.getElementById('shapes').style.height = "0";
    document.getElementById('shapes').style.borderTop = "100px solid palevioletred"
    document.getElementById('shapes').style.borderRight = "100px solid transparent"
    document.getElementById('shapes').style.backgroundColor = "transparent";
    document.getElementById('shapes').style.borderRadius = "0";
    document.getElementById('shapes').style.borderLeft = "none";
    document.getElementById('shapes').style.borderBottom = "none";
    document.getElementById('shapes').style.transform = "none";
}

function triangleTopright() {
    document.getElementById('shapes').style.width = "0";
    document.getElementById('shapes').style.height = "0";
    document.getElementById('shapes').style.borderTop = "100px solid palevioletred"
    document.getElementById('shapes').style.borderLeft = "100px solid transparent"
    document.getElementById('shapes').style.backgroundColor = "transparent";
    document.getElementById('shapes').style.borderRadius = "0";
    document.getElementById('shapes').style.borderRight = "none";
    document.getElementById('shapes').style.borderBottom = "none";
    document.getElementById('shapes').style.transform = "none";
}

function triangleBottomLeft() {
    document.getElementById('shapes').style.width = "0";
    document.getElementById('shapes').style.height = "0";
    document.getElementById('shapes').style.borderBottom = "100px solid palevioletred"
    document.getElementById('shapes').style.borderRight = "100px solid transparent"
    document.getElementById('shapes').style.backgroundColor = "transparent";
    document.getElementById('shapes').style.borderRadius = "0";
    document.getElementById('shapes').style.borderLeft = "none";
    document.getElementById('shapes').style.borderTop = "none";
    document.getElementById('shapes').style.transform = "none";

}

function triangleBottomRight() {
    document.getElementById('shapes').style.width = "0";
    document.getElementById('shapes').style.height = "0";
    document.getElementById('shapes').style.borderBottom = "100px solid palevioletred"
    document.getElementById('shapes').style.borderLeft = "100px solid transparent"
    document.getElementById('shapes').style.backgroundColor = "transparent";
    document.getElementById('shapes').style.borderRadius = "0";
    document.getElementById('shapes').style.borderRight = "none";
    document.getElementById('shapes').style.borderTop = "none";
    document.getElementById('shapes').style.transform = "none";

}

function trapezoid() {
    document.getElementById('shapes').style.width = "100px";
    document.getElementById('shapes').style.height = "0";
    document.getElementById('shapes').style.borderLeft = "30px solid transparent";
    document.getElementById('shapes').style.borderRight = "30px solid transparent";
    document.getElementById('shapes').style.borderBottom = "100px solid cornflowerblue";
    document.getElementById('shapes').style.backgroundColor = "transparent";
    document.getElementById('shapes').style.borderRadius = "0";
    document.getElementById('shapes').style.borderTop = "none";
    document.getElementById('shapes').style.transform = "none";
}

function parallelogram() {
    document.getElementById('shapes').style.width = "200px";
    document.getElementById('shapes').style.height = "100px";
    document.getElementById('shapes').style.backgroundColor = "coral";
    document.getElementById('shapes').style.transform = "skew(20deg)";
    document.getElementById('shapes').style.border = "none";
    document.getElementById('shapes').style.borderRadius = "0";
}