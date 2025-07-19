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
    const hasLower=/[a-z]/.test(value);
    const hasUpper= /[A-z]/.test(value);
    const hasNumber= /\d/.test(value);
    const hasSpec= /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const commonpat= [
        "password","123456","name@123", "admin","qwerty","letminin" , "@123" ,"@456", "@012"
    ];

    if(len>0) {
        msg.style.display ="block";
    }
    else {
        msg.style.display="none";
    }

    if(commonpat.some(pattern => value.toLowerCase().includes(pattern))) {
        diff.innerHTML="is too simple."
        pass.style.borderColor="red";
        msg.style.color="red";
    }

    else if(!(hasUpper && hasNumber && hasLower && hasSpec)) {
        diff.innerHTML="should contain both letters and numbers and special characters.";
        pass.style.borderColor="red";
        msg.style.color="red";
    }

    else if(len<6) {
        diff.innerHTML= "weak.";
        pass.style.borderColor="red";
        msg.style.color="red";
    }
    else if (len>=6 && len<=10) {
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