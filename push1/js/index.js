/* ===========================Check SW & Push_Manager============================ */
const check = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error('No Service Worker support!')
    }
    if (!('PushManager' in window)) {
        throw new Error('No Push API Support!')
    }
}

function regServiceWorker() {
    return navigator.serviceWorker.register('../sw.js')
        .then(function(registration) {
            console.log('service worker successfully registered.');
            return registration;
        })
        .catch(function(err) {
            console.error('Unable to register service worker.', err);
        });
}
/* ===========================Service Worker Registration============================ */

const registerServiceWorker = async() => {
    const swRegistration = await navigator.serviceWorker.register('sw.js');
    return swRegistration;
}

/* ===========================Notification Body============================ */
let img = "https://dunyaninhaberi.com/wp-content/uploads/2020/05/hello-world-30638.jpg";
let title = 'Mira Technologies';
let text = `Hello World`;

/* ===========================Notification Permission============================ */

const notify = async() => {
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    } else {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                navigator.serviceWorker.ready.then(function(registration) {
                    registration.showNotification(title, { body: text, icon: img });
                });
            }
        });
    }
}

/* ===========================Function Call On Page Load============================ */

document.addEventListener("DOMContentLoaded", regServiceWorker());
document.addEventListener("DOMContentLoaded", check());
document.addEventListener("DOMContentLoaded", notify());