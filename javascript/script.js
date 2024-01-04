const createButton = document.querySelector("#create_btn");
const firstPassword = document.querySelector("#user_password");
const confirmPassword = document.querySelector("#confirm_password");

createButton.addEventListener("click", (e) => {
    const firstPasswordValue = firstPassword.value;
    const confirmPasswordValue = confirmPassword.value;

    for (const char of firstPasswordValue) {
        if (!confirmPasswordValue.includes(char)) {
            return
        }
        if (firstPasswordValue.length !== confirmPasswordValue.length) {
            return
        }
    }
})