console.log(
  "Witam na mojej stronie, na której wykorzystałem wiedzę zdobytą w trzecim module szkolenia YouCode:D"
);

let navigation__buttonHeaderColor = document.querySelector(
  ".navigation__buttonHeaderColor"
);
let header__paragraph = document.querySelector(".header__paragraph");
let navigation__buttonBodyBackground = document.querySelector(
  ".navigation__buttonBodyBackground"
);
let main = document.querySelector(".main");
let themeName = document.querySelector(".themeName");

navigation__buttonHeaderColor.addEventListener("click", () => {
  header__paragraph.classList.toggle("header__paragraph--darkTheme");
});

navigation__buttonBodyBackground.addEventListener("click", () => {
  main.classList.toggle("darkTheme");

  if (main.classList.contains("darkTheme")) {
    themeName.innerText = "Jasny";
  } else {
    themeName.innerText = "Ciemny";
  }
});
