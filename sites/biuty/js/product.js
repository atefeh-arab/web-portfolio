const thumbs=document.querySelectorAll(".thumb");

const main=document.getElementById("mainImage");

thumbs.forEach(img=>{

img.onclick=()=>{

main.src=img.src;

thumbs.forEach(t=>t.classList.remove("active"));

img.classList.add("active");

}

});

let count=1;

document.getElementById("plus").onclick=()=>{

count++;

document.getElementById("count").value=count;

}

document.getElementById("minus").onclick=()=>{

if(count>1){

count--;

document.getElementById("count").value=count;

}

}