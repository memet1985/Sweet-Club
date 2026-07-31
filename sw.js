// Service Worker - Arka Plan Bildirim Dinleyicisi
self.addEventListener('push', function(event) {
    let data = { title: "Sweet Waffle", body: "Hediyeni kazanmak için son adımlar!" };
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }

    const options = {
        body: data.body,
        icon: 'logo.webp',
        badge: 'logo.webp',
        vibrate: [200, 100, 200]
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
