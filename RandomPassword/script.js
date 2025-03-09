const passBox = document.getElementById("passw");
const length=12;
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const char="!@#$%^&*()_+/*-";

const all=upper+lower+num+char;

function createpass() {
    let pass="";
    pass+=upper[Math.floor(Math.random() * upper.length)];
    pass+=lower[Math.floor(Math.random() * lower.length)];
    pass+=num[Math.floor(Math.random() * num.length)];
    pass+=char[Math.floor(Math.random() * char.length)];

    while(pass.length<length)  {
        pass += all[Math.floor(Math.random() * all.length)];
    }     
    passBox.value=pass;
}

function copypass() {
    passBox.select();
    navigator.clipboard.writeText(passBox.value);
    alert("Password copied");
}