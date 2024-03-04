const { defineConfig } = require("@vue/cli-service");

const pwaConfig = {
  name: "Vue Chat App | Jakob Osterberger",
  short_name: "Vue Chat",
  description:
    "This App is a Messaging Service designed after WhatsApp and built with VueJs and Firebase by © Jakob Osterberger 2022.",
  themeColor: "#00A783",
  msTileColor: "#000000",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "black",
  // icons: [
  //   {
  //     src: path.resolve('src/assets/icon.png'),
  //     sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
  //   },
  //   {
  //     src: path.resolve('src/assets/large-icon.png'),
  //     size: '1024x1024' // you can also use the specifications pattern
  //   },
  //   {
  //     src: path.resolve('src/assets/maskable-icon.png'),
  //     size: '1024x1024',
  //     purpose: 'maskable'
  //   }
  // ],
  iconPaths: {
    faviconSVG: "whatsapp-svgreop-com.svg",
    favicon32: "favicon-32x32.png",
    favicon16: "favicon-16x16.png",
    appleTouchIcon: "apple-touch-icon-152x152.png",
    maskIcon: "safari-pinned-tab.svg",
    msTileImage: "msapplication-icon-144x144.png",
  },
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
    swSrc: "./src/service-worker.js",
  },
};

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: pwaConfig,
});
