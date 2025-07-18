var pass =document.getElementById("password");
var msg=document.getElementById("message");
var diff=document.getElementById("diff");

pass.addEventListener('input' , () => {
    const len=pass.value.length;
    if(len>0) {
        msg.style.display ="block";
    }
    else {
        msg.style.display="none";
    }

    if(len<4) {
        diff.innerHTML= "weak.";
        pass.style.borderColor="red";
        msg.style.color="red";
    }
    else if (len>4 && len<=8) {
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