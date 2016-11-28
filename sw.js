/*
 * Will automaticly cahce static resorces as we
 * keep on exploring the page more and more
 *
 * Meaning the secound time we load something it will be lightning fast!
 */
self.onfetch = event => event.respondWith(
  caches.match(event.request).then(res =>
    res || fetch(event.request).then(res =>
      caches.open('v1').then(cache => (
        cache.put(event.request, res.clone()), res
      ))
    )
  )
)
