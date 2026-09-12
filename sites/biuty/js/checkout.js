const form=document.getElementById("checkoutForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("سفارش شما با موفقیت ثبت شد 🌸");

localStorage.removeItem("cart");

window.location.href="index.html";

});