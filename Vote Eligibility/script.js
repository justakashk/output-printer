
const check = document.getElementById("check-btn")
check.addEventListener("click",checkAge);

function checkAge() {
    let user_age = document.querySelector(".inputAge").value;
    let age = parseInt(user_age);
    let result = document.getElementById("result");

    if (isNaN(age)) {
        result.innerHTML = `<h3 style="color:orange;">Please enter a valid age!</h3>`;
        return;
    }

    if (age >= 18) {
        result.innerHTML = `<h2>Your Age is: ${age}</h2>
        <h3 style="color:green; background-color: rgb(192, 238, 216); padding:20px;">🎉 You Are Eligible To Vote</h3>`;
    } else {
        result.innerHTML = `<h2>Your Age is: ${age}</h2>
        <h3 style="color:red;">You Are Not Eligible To Vote</h3>`;
    }
}