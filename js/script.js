console.log("Witaj szperaczu!");

let buttonElement = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-buttonName");

buttonElement.addEventListener("click", () => {
  body.classList.toggle("dark");

  themeName.innerText = body.classList.contains("dark")
    ? "na powierzchnię"
    : "pod wodę";
});
