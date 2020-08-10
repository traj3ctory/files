const check = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error('No Service Worker support!')
    }
    if (!('PushManager' in window)) {
        // throw new Error('No Push API Support!')
    }
}

// Register a service worker
const registerServiceWorker = async() => {
        const swRegistration = await navigator.serviceWorker.register('service.js');
        return swRegistration;
    }
    // Request Permission 
const requestNotificationPermission = async() => {
    const permission = await window.Notification.requestPermission();
    if (permission !== 'granted') {
        throw new Error('Permission not granted for Notification');
    }
}

// Show Notification
const showLocalNotification = (title, icon, image, vibrate, body, swRegistration) => {
    const options = {
        icon,
        image,
        body,
        vibrate,
    };
    swRegistration.showNotification(title, options);
}

// Calling!
const main = async() => {
    check();
    const swRegistration = await registerServiceWorker();
    const permission = await requestNotificationPermission();
    showLocalNotification('This is title', 'This is the message', swRegistration);
}
console.log(Notification.permission)

document.addEventListener("DOMContentLoaded", main());
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('index.js')
//         .then(function(registration) {
//             registration.addEventListener('updatefound', function() {
//                 // If updatefound is fired, it means that there's
//                 // a new service worker being installed.
//                 var installingWorker = registration.installing;
//                 console.log('A new service worker is being installed:',
//                     installingWorker);

//                 // You can listen for changes to the installing service worker's
//                 // state via installingWorker.onstatechange
//             });
//         })
//         .catch(function(error) {
//             console.log('Service worker registration failed:', error);
//         });
// } else {
//     console.log('Service workers are not supported.');
// }