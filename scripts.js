let userPwd = document.querySelector("#user-pwd");
let pwdConfirm = document.querySelector("#pwd-confirm");
let pwdErrorMsg = document.querySelector(".pwd-error-msg");

const checkPwd = () => {
  if (
    (userPwd.value === "" &&
      pwdConfirm.value === "" &&
      userPwd.hasAttribute("class")) ||
    userPwd.value === pwdConfirm.value
  ) {
    userPwd.removeAttribute("class");
    pwdConfirm.removeAttribute("class");
    pwdErrorMsg.textContent = "";
    return;
  }
  if (userPwd.value !== pwdConfirm.value) {
    userPwd.classList.add("error");
    pwdConfirm.classList.add("error");
    pwdErrorMsg.textContent = "* Passwords do not match";
  }
};

userPwd.addEventListener("keyup", checkPwd);
pwdConfirm.addEventListener("keyup", checkPwd);
