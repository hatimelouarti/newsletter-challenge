const input = document.querySelector("input");
const send = document.querySelector("button");
const dismissbutton = document.querySelector(".dismiss-button");

let emptyinput = function () {
  if (input.value === "email@company.com") {
    input.value = "";
  }
};

let setInputValue = function () {
  if (input.value === "") {
    input.value = "email@company.com";
  }
};
let inputsend = function (event) {
  if (
    event.type === "click" ||
    (event.type === "keypress" && event.key === "Enter")
  ) {
    if (
      input.value === "" ||
      input.value === "email@company.com" ||
      input.value.includes("@") === false ||
      input.value.includes(".") === false ||
      input.value.includes("@.") === true
    ) {
      event.preventDefault();
      input.classList.add("inputerror");
      document.querySelectorAll(".error").forEach(function (error) {
        error.style.visibility = "visible";
      });
    } else {
      event.preventDefault();

      document.querySelector("span").innerHTML = input.value;
      input.classList.remove("inputerror");
      document.querySelector(".success-message").classList.remove("hide");
      document.querySelector(".cardbody").classList.add("hide");
      document.querySelector(".all").classList.add("hide");
      document.querySelectorAll(".error").forEach(function (error) {
        error.style.visibility = "hidden";
      });
    }
  }
};
let dismiss = function () {
  document.querySelector(".cardbody").classList.remove("hide");
  document.querySelector(".all").classList.remove("hide");
  document.querySelector(".success-message").classList.add("hide");
};
//+++++++++++++++++++++++++++++
input.addEventListener("blur", setInputValue);
input.addEventListener("click", emptyinput);
send.addEventListener("click", inputsend);
dismissbutton.addEventListener("click", dismiss);
send.addEventListener("keypress", inputsend);
