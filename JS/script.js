{
  const welcome = () => {
    console.log(
      "Witam na mojej stronie, na której wykorzystałem wiedzę zdobytą w piątym module szkolenia YouCode:D");
  };

  const onChangeBackgroundClick = () => {
    const main = document.querySelector(".main");
    const themeName = document.querySelector(".navigation__themeName");
    main.classList.toggle("darkTheme");
    themeName.innerText = main.classList.contains("darkTheme")
      ? "Jasny"
      : "Ciemny";
  };

  const onChangeHeaderClick = () => {
    const header__paragraph = document.querySelector(".header__paragraph");
    header__paragraph.classList.toggle("header__paragraph--darkTheme");

  };

  const background = () => {
    const navigation__buttonBodyBackground = document.querySelector(".js-buttonBodyBackground");
    navigation__buttonBodyBackground.addEventListener("click", onChangeBackgroundClick);
  };

  const header = () => {
    const navigation__buttonHeaderColor = document.querySelector(".js-buttonHeaderColor");
    navigation__buttonHeaderColor.addEventListener("click", onChangeHeaderClick);
  };

  welcome();
  background();
  header();
}