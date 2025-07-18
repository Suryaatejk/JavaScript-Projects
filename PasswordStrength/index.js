var pass =document.getElementById("password");
var msg=document.getElementById("message");
var diff=document.getElementById("diff");
var toggle =document.getElementById("togglePassword");
toggle.addEventListener ('click', () => {
    if(pass.type=== "password") {
        pass.type="text";
        toggle.textContent="Hide";
    }
    else {
        pass.type="password";
        toggle.textContent="Show";
    }
 });

pass.addEventListener('input' , () => {
    const value=pass.value;
    const len=value.length;
    const hasLetter= /[a-zA-z]/.test(value);
    const hasNumber= /\d/.test(value);

    if(len>0) {
        msg.style.display ="block";
    }
    else {
        msg.style.display="none";
    }
    if(!hasLetter || !hasNumber) {
        diff.innerHTML="should contain both letters and numbers.";
        pass.style.borderColor="red";
        msg.style.color="red";
    }

    else if(len<4) {
        diff.innerHTML= "weak.";
        pass.style.borderColor="red";
        msg.style.color="red";
    }
    else if (len>=4 && len<=8) {
        diff.innerHTML= "medium.";
        pass.style.borderColor="orange";  
        msg.style.color="orange";
    }
    else {
        diff.innerHTML="strong.";
        pass.style.borderColor="green";
        msg.style.color="green";
    }

})