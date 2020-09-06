let isDark = true;

switchOn = () => {
  const cssTag = document.getElementsByClassName("css-tag");
  console.log(cssTag[0].href);
  if (isDark) {
    cssTag[0].href = "style2.css";
  } else {
    cssTag[0].href = "style.css";
  }
  isDark = !isDark;
};
