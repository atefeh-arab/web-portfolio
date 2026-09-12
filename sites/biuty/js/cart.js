let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");

function renderCart(){

container.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total += parseInt(item.price.replace(/\D/g,''))*item.quantity;

container.innerHTML += `

<div class="cart-item">

<img src="${item.image}" width="120">

<h3>${item.name}</h3>

<p>${item.price}</p>

<p>تعداد: ${item.quantity}</p>

<button onclick="removeItem(${index})">حذف</button>

</div>

`;

});

container.innerHTML += `<h2>جمع کل: ${total.toLocaleString()} تومان</h2>`;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

renderCart();

}

renderCart();