let isDark = true;

// switchOn = () => {
//   const cssTag = document.getElementsByClassName("css-tag");
//   if (isDark) {
//     cssTag.href = "style2.css";
//   } else {
//     cssTag.href = "style.css";
//   }
//   isDark = !isDark;
// };
switchOn = () => {
  var oldlink = document.getElementsByTagName("link").item(0);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");

  if (isDark) {
    newlink.setAttribute("href", "style2.css");
  } else {
    newlink.setAttribute("href", "style.css");
  }
  isDark = !isDark;
  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
};
