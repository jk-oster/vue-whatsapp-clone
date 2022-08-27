const { defineConfig } = require("@vue/cli-service");

const pwaConfig = {
  name: "WhatsApp Clone by Jakob Osterberger",
  description:
    "This App is a WhatsApp clone built with VueJs and Firebase by © Jakob Osterberger 2022.",
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
  short_name: "WhatsApp Clone",
  // icons: [
  //   {
  //     "src": "./img/icons/android-chrome-192x192.png",
  //     "sizes": "192x192",
  //     "type": "image/png"
  //   },
  //   {
  //     "src": "./img/icons/android-chrome-512x512.png",
  //     "sizes": "512x512",
  //     "type": "image/png"
  //   }
  // ],
  start_url: ".",
  display: "standalone",
  workboxPluginMode: "InjectManifest",
  workboxOptions: {
    swSrc: "./src/sw.js",
  },
};

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: pwaConfig,
});
