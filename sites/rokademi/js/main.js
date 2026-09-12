
// ===============================
// آکادمی رکاد
// main.js
// ===============================

// عناصر صفحه
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// باز کردن منو
if (menuBtn && sidebar && overlay) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.add("active");

        overlay.classList.add("show");

    });

}

// بستن منو
if (closeBtn && sidebar && overlay) {

    closeBtn.addEventListener("click", () => {

        sidebar.classList.remove("active");

        overlay.classList.remove("show");

    });

}

// بستن با کلیک روی پس زمینه
if (overlay && sidebar) {

    overlay.addEventListener("click", () => {

        sidebar.classList.remove("active");

        overlay.classList.remove("show");

    });

}

// ===============================
// جستجوی ساده
// ===============================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function (e) {

        if (e.key === "Enter") {

            const value = this.value.trim();

            if (value === "") {

                alert("لطفاً عبارت موردنظر را وارد کنید.");

                return;

            }

            alert("نتیجه‌ای برای \"" + value + "\" جستجو خواهد شد.");

        }

    });

}

// ===============================
// اسکرول نرم لینک‌ها
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// سال فوتر (در صورت وجود)
// ===============================

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ===============================
// پیام خوش آمد
// ===============================

window.addEventListener("load", () => {

    console.log("به آکادمی برنامه نویسی رکاد خوش آمدید.");

});

// پایان فایل