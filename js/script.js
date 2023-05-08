{
  const welcome = () => {
    console.log("Witaj szperaczu!");
  };

  const onChangeBackgroundClick = () => {
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-buttonName");

    body.classList.toggle("body--dark");
    themeName.innerText = body.classList.contains("body--dark")
      ? "na powierzchnię"
      : "pod wodę";
  };

  const init = () => {
    const buttonElement = document.querySelector(".js-button");
    buttonElement.addEventListener("click", onChangeBackgroundClick);

    welcome();
  };

  init();
}
