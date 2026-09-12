
// ===============================
// Login.js - آکادمی رکاد
// ===============================

const phoneInput = document.getElementById("phone");
const sendCodeBtn = document.getElementById("sendCode");
const codeBox = document.getElementById("codeBox");
const loginForm = document.getElementById("loginForm");
const otpInput = document.getElementById("otp");

let generatedCode = "";

// تولید کد 5 رقمی
function generateCode() {

    return Math.floor(10000 + Math.random() * 90000).toString();

}

// اعتبارسنجی شماره موبایل
function isValidPhone(phone) {

    return phone.startsWith("09") && phone.length === 11;

}

// کلیک روی دریافت کد
if (sendCodeBtn) {

    sendCodeBtn.addEventListener("click", () => {

        const phone = phoneInput.value.trim();

        if (!isValidPhone(phone)) {

            alert("شماره موبایل معتبر نیست!");

            return;

        }

        generatedCode = generateCode();

        console.log("کد تأیید:", generatedCode);

        alert("کد تأیید ارسال شد (نمایشی): " + generatedCode);

        codeBox.style.display = "block";

        sendCodeBtn.disabled = true;

        sendCodeBtn.innerText = "کد ارسال شد";

    });

}

// ورود فرم
if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const enteredCode = otpInput.value.trim();

        if (enteredCode === generatedCode && generatedCode !== "") {

            alert("ورود موفقیت‌آمیز بود 🎉");

            window.location.href = "index.html";

        } else {

            alert("کد وارد شده اشتباه است!");

        }

    });

}

// نمایش اولیه کدباکس
if (codeBox) {

    codeBox.style.display = "none";

}