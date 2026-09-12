
// ===============================
// Courses.js - آکادمی رکاد
// مدیریت سبد خرید دوره‌ها
// ===============================

// گرفتن سبد خرید از localStorage
let cart = JSON.parse(localStorage.getItem("rokadCart")) || [];

// ===============================
// افزودن به سبد خرید
// ===============================

function addToCart(name, price) {

    // بررسی اینکه قبلاً اضافه نشده باشد
    const exists = cart.find(item => item.name === name);

    if (exists) {

        alert("این دوره قبلاً به سبد خرید اضافه شده است.");

        return;

    }

    // افزودن آیتم جدید
    cart.push({
        name: name,
        price: price
    });

    // ذخیره در localStorage
    localStorage.setItem("rokadCart", JSON.stringify(cart));

    alert("دوره با موفقیت به سبد خرید اضافه شد 🎉");

}

// ===============================
// نمایش تعداد آیتم‌ها (اختیاری)
// ===============================

function updateCartCount() {

    const cartCount = document.querySelector(".cart-count");

    if (cartCount) {

        cartCount.textContent = cart.length;

    }

}

// اجرای اولیه
updateCartCount();

// ===============================
// نمایش در کنسول برای تست
// ===============================

console.log("Courses JS Loaded - Rokad Academy");