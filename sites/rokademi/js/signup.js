
// ===============================
// Signup.js - آکادمی رکاد
// ===============================

const signupForm = document.getElementById("signupForm");
const studentRadios = document.querySelectorAll('input[name="student"]');
const schoolBox = document.getElementById("schoolBox");
const schoolInput = document.getElementById("schoolName");

// ===============================
// نمایش یا مخفی کردن نام مدرسه
// ===============================

function toggleSchoolBox() {

    const selected = document.querySelector('input[name="student"]:checked');

    if (selected && selected.value === "no") {

        schoolBox.style.display = "block";

    } else {

        schoolBox.style.display = "none";

        if (schoolInput) {

            schoolInput.value = "";

        }

    }

}

// رویداد تغییر گزینه‌ها
studentRadios.forEach(radio => {

    radio.addEventListener("change", toggleSchoolBox);

});

// حالت اولیه
if (schoolBox) {

    schoolBox.style.display = "none";

}

// ===============================
// ثبت فرم
// ===============================

if (signupForm) {

    signupForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const userData = {

            name: document.getElementById("name").value.trim(),
            family: document.getElementById("family").value.trim(),
            age: document.getElementById("age").value.trim(),
            city: document.getElementById("city").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            skill: document.getElementById("skill").value,
            student: document.querySelector('input[name="student"]:checked').value,
            school: schoolInput.value.trim()

        };

        // بررسی ساده
        if (
            !userData.name ||
            !userData.family ||
            !userData.age ||
            !userData.city ||
            !userData.phone
        ) {

            alert("لطفاً همه فیلدهای ضروری را پر کنید.");

            return;

        }

        // ذخیره در localStorage
        localStorage.setItem("rokadUser", JSON.stringify(userData));

        alert("ثبت نام با موفقیت انجام شد 🎉");

        // انتقال به صفحه اصلی
        window.location.href = "index.html";

    });

}