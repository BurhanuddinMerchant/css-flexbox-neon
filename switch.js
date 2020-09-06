let isDark = true;

switchOn = () => {
  const cssTag = document.getElementsByClassName("css-tag");
  console.log(cssTag[0].href);
  if (isDark) {
    cssTag[0].href = "http://127.0.0.1:5500/flexbox2/style2.css";
  } else {
    cssTag[0].href = "http://127.0.0.1:5500/flexbox2/style.css";
  }
  isDark = !isDark;
};
