let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlistContainer");

function renderWishlist(){

container.innerHTML="";

if(wishlist.length===0){

container.innerHTML="<h2>هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید.</h2>";

return;

}

wishlist.forEach((item,index)=>{

container.innerHTML += `

<div class="product-card">

<img src="${item.image}">

<div class="product-info">

<h3>${item.name}</h3>

<h2>${item.price}</h2>

<button onclick="removeWish(${index})">

حذف

</button>

</div>

</div>

`;

});

}

function removeWish(index){

wishlist.splice(index,1);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

renderWishlist();

}

renderWishlist();