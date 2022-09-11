
import { precacheAndRoute } from 'workbox-precaching'
precacheAndRoute(self.__WB_MANIFEST)

//Web Push Notifications//
// let click_open_url;
self.addEventListener("push", function (event) {
  let push_message = event.data;
  console.log(push_message);
  const options = {
    body: push_message.body ?? push_message,
    icon: push_message.icon ?? 'https://picsum.photos/200',
    image: push_message.image ?? '',
    tag: "alert",
  };
  event.waitUntil(
    self.registration.showNotification(push_message.title, options)
  );
});

// self.addEventListener("notificationclick", function (event) {
//   const clickedNotification = event.notification;
//   clickedNotification.close();
//   if (click_open_url) {
//     const promiseChain = clients.openWindow(click_open_url);
//     event.waitUntil(promiseChain);
//   }
// });
