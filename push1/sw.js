/* eslint-disable no-restricted-globals */
self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    if (requestUrl.pathname.endsWith('.png')) {
        event.respondWith(fetch('./download.png'));
    }
});


self.addEventListener('push', (event) => {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
    }

    let data = {};
    if (event.data) {
        data = event.data.json();
    }
    let title = data.title || "Hello World";
    let message = data.message || "Hello world hello world";
    let icon = "https://miratechnologiesng.com/img/icons/miraicon.png";

    let notification = new self.Notification(title, {
        body: message,
        tag: 'simple push demo notification',
        icon: icon
    });

    notification.addEventListener('click', () => {
        if (clients.openWindow) {
            clients.openWindow('https://blog.miratechnologies.com.ng/')
        }
    })
});

self.addEventListener('notificationclick', () => {
    console.log("I've been clicked");
});