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
    const navigation__buttonHeaderColor = document.querySelector(".js-buttonHeaderColor");
    const header__paragraph = document.querySelector(".header__paragraph");

  };

  welcome();

  const background = () => {
    const navigation__buttonBodyBackground = document.querySelector(".js-buttonBodyBackground");
    navigation__buttonBodyBackground.addEventListener("click",onChangeBackgroundClick);
  };

  const header = () => {
    
    navigation__buttonHeaderColor.addEventListener("click",onChangeHeaderClick);
    header__paragraph.classList.toggle("header__paragraph--darkTheme");
  };
}