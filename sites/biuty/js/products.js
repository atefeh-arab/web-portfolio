const products = [

{
name:"رژ لب مات",
category:"آرایش",
price:420000,
image:"images/p1.jpg"
},

{
name:"سرم ویتامین C",
category:"پوست",
price:690000,
image:"images/p2.jpg"
},

{
name:"کرم آبرسان",
category:"پوست",
price:510000,
image:"images/p3.jpg"
},

{
name:"عطر زنانه",
category:"عطر",
price:1450000,
image:"images/p4.jpg"
},

{
name:"ماسک مو",
category:"مو",
price:380000,
image:"images/p5.jpg"
},

{
name:"شامپو بدون سولفات",
category:"مو",
price:520000,
image:"images/p6.jpg"
}

];

const container=document.getElementById("allProducts");

function showProducts(list){

container.innerHTML="";

list.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.category}</p>

<h2>${product.price.toLocaleString()} تومان</h2>

<button class="cart-btn">
افزودن به سبد
</button>

</div>

</div>

`;

});

}

showProducts(products);

document.getElementById("categoryFilter").addEventListener("change",function(){

let value=this.value;

if(value=="all"){

showProducts(products);

return;

}

showProducts(products.filter(product=>product.category==value));

});

document.getElementById("sortProducts").addEventListener("change",function(){

let value=this.value;

let copy=[...products];

if(value=="cheap"){

copy.sort((a,b)=>a.price-b.price);

}

if(value=="expensive"){

copy.sort((a,b)=>b.price-a.price);

}

showProducts(copy);

});