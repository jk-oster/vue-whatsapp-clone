import {computed, reactive } from 'vue';

// Make Screen Size reactive
const currentScreen = reactive({
  width: window.screen.width
});
window.onresize = () => currentScreen.width = window.screen.width;
export const isMobile = computed(() => {
  return currentScreen.width <= 768 // || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
});

export const globalChatId = 'chat1661478319744';


// Loading theme preference and toggle it

// const btn = document.querySelector(".btn-toggle");
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// const currentTheme = localStorage.getItem("theme");
// if (currentTheme == "dark") {
//   document.body.classList.toggle("dark-theme");
// } else if (currentTheme == "light") {
//   document.body.classList.toggle("light-theme");
// }

// btn.addEventListener("click", function () {
//   if (prefersDarkScheme.matches) {
//     document.body.classList.toggle("light-theme");
//     var theme = document.body.classList.contains("light-theme")
//       ? "light"
//       : "dark";
//   } else {
//     document.body.classList.toggle("dark-theme");
//     var theme = document.body.classList.contains("dark-theme")
//       ? "dark"
//       : "light";
//   }
//   localStorage.setItem("theme", theme);
// });