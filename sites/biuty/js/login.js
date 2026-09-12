const password=document.getElementById("password");

const eye=document.getElementById("showPassword");

eye.onclick=()=>{

if(password.type=="password"){

password.type="text";

eye.classList.replace("fa-eye","fa-eye-slash");

}

else{

password.type="password";

eye.classList.replace("fa-eye-slash","fa-eye");

}

}