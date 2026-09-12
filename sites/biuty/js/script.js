const menuBtn = document.getElementById("menu");

const mobileMenu = document.getElementById("mobileMenu");

const closeBtn = document.getElementById("closeMenu");

const overlay = document.getElementById("overlay");

menuBtn.onclick = ()=>{

mobileMenu.classList.add("active");

overlay.classList.add("active");

}

closeBtn.onclick = ()=>{

mobileMenu.classList.remove("active");

overlay.classList.remove("active");

}

overlay.onclick = ()=>{

mobileMenu.classList.remove("active");

overlay.classList.remove("active");

}
const slides=document.querySelectorAll(".slide");

const dots=document.querySelectorAll(".dot");

const next=document.querySelector(".next");

const prev=document.querySelector(".prev");

let index=0;

function showSlide(i){

slides.forEach(slide=>slide.classList.remove("active"));

dots.forEach(dot=>dot.classList.remove("active"));

slides[i].classList.add("active");

dots[i].classList.add("active");

}

next.onclick=()=>{

index++;

if(index>=slides.length){

index=0;

}

showSlide(index);

}

prev.onclick=()=>{

index--;

if(index<0){

index=slides.length-1;

}

showSlide(index);

}

setInterval(()=>{

index++;

if(index>=slides.length){

index=0;

}

showSlide(index);

},5000);

dots.forEach((dot,i)=>{

dot.onclick=()=>{

index=i;

showSlide(index);

}

});
const products=[

{
name:"رژ لب مات"
},

{
name:"سرم ویتامین C"
},

{
name:"کرم آبرسان"
},

{
name:"ریمل حجم دهنده"
},

{
name:"کرم ضدآفتاب"
},

{
name:"براش آرایشی"
},

{
name:"عطر زنانه"
},

{
name:"تونر پوست"
}

];

const searchIcon=document.querySelector(".fa-magnifying-glass");

const searchBox=document.getElementById("searchBox");

const closeSearch=document.getElementById("closeSearch");

const searchInput=document.getElementById("searchInput");

const searchResults=document.getElementById("searchResults");

searchIcon.onclick=()=>{

searchBox.classList.add("active");

searchInput.focus();

}

closeSearch.onclick=()=>{

searchBox.classList.remove("active");

searchInput.value="";

searchResults.innerHTML="";

}

searchInput.addEventListener("input",()=>{

let value=searchInput.value.trim();

searchResults.innerHTML="";

if(value==="") return;

const filtered=products.filter(product=>

product.name.includes(value)

);

if(filtered.length===0){

searchResults.innerHTML="<p>محصولی پیدا نشد.</p>";

return;

}

filtered.forEach(product=>{

searchResults.innerHTML+=`

<div class="result-item">

${product.name}

</div>

`;

});

});
const hearts=document.querySelectorAll(".heart-btn");

hearts.forEach(btn=>{

btn.onclick=function(){

const icon=this.querySelector("i");

icon.classList.toggle("fa-regular");

icon.classList.toggle("fa-solid");

this.style.background="#ec5f9d";
this.style.color="white";

}

});
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach((button, index) => {

button.onclick = () => {

const product = {

id:index,

name:document.querySelectorAll(".product-info h3")[index].innerText,

price:document.querySelectorAll(".new-price")[index].innerText,

image:document.querySelectorAll(".product-card img")[index].src,

quantity:1

};

const exist = cart.find(item=>item.id===product.id);

if(exist){

exist.quantity++;

}else{

cart.push(product);

}

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert("محصول به سبد خرید اضافه شد.");

}

});

function updateCartCount(){

let count=0;

cart.forEach(item=>{

count+=item.quantity;

});

document.getElementById("cart-count").innerText=count;

document.getElementById("floating-count").innerText=count;

}

updateCartCount();
const newsletter = document.getElementById("newsletterForm");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("با موفقیت عضو خبرنامه شدید 🌸");

newsletter.reset();

});

}
const trendSlider = document.getElementById("trendSlider");

const leftBtn = document.querySelector(".left");

const rightBtn = document.querySelector(".right");

leftBtn.onclick = () => {

trendSlider.scrollLeft -= 320;

}

rightBtn.onclick = () => {

trendSlider.scrollLeft += 320;

}

setInterval(()=>{

trendSlider.scrollLeft += 285;

if(trendSlider.scrollLeft>=trendSlider.scrollWidth-trendSlider.clientWidth){

trendSlider.scrollLeft=0;

}

},4000);
const messages=document.querySelectorAll(".top-message");

let topIndex=0;

setInterval(()=>{

messages[topIndex].classList.remove("active");

topIndex++;

if(topIndex>=messages.length){

topIndex=0;

}

messages[topIndex].classList.add("active");

},4000);

