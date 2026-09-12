
// ===============================
// Cart.js - آکادمی رکاد
// ===============================

// گرفتن سبد خرید از localStorage
let cart = JSON.parse(localStorage.getItem("rokadCart")) || [];

// المان‌ها
const cartItemsContainer = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");

// ===============================
// نمایش سبد خرید
// ===============================

function renderCart() {

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `<p class="empty">سبد خرید شما خالی است</p>`;

        totalPriceEl.textContent = "0 تومان";

        return;

    }

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `

            <div class="item-info">

                <h3>${item.name}</h3>

                <p>${item.price.toLocaleString()} تومان</p>

            </div>

            <button onclick="removeItem(${index})">

                حذف

            </button>

        `;

        cartItemsContainer.appendChild(div);

    });

    totalPriceEl.textContent = total.toLocaleString() + " تومان";

}

// ===============================
// حذف آیتم
// ===============================

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("rokadCart", JSON.stringify(cart));

    renderCart();

}

// ===============================
// ثبت نهایی (شبیه‌سازی پرداخت)
// ===============================

function checkout() {

    if (cart.length === 0) {

        alert("سبد خرید شما خالی است!");

        return;

    }

    alert("ثبت نام شما با موفقیت انجام شد 🎉");

    // پاک کردن سبد خرید
    cart = [];

    localStorage.removeItem("rokadCart");

    renderCart();

    // برگشت به صفحه اصلی
    window.location.href = "index.html";

}

// اجرای اولیه
renderCart();