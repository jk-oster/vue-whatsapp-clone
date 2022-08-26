const { defineConfig } = require("@vue/cli-service");

const pwaConfig = {
  name: "WHatsApp Clone v0.1",
  description: "This App is a WhatsApp clone built with VueJs and Firebase by © Jakob Osterberger 2022.",
  themeColor: "#00A783",
  msTileColor: "#000000",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "black",
  iconPaths: {
    faviconSVG: "img/icons/whatsapp-svgreop-com.svg",
    favicon32: "img/icons/favicon-32x32.png",
    favicon16: "img/icons/favicon-16x16.png",
    appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
    maskIcon: "img/icons/safari-pinned-tab.svg",
    msTileImage: "img/icons/msapplication-icon-144x144.png",
  },
};

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: pwaConfig,
});
