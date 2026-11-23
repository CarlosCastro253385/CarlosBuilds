(function () {
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/admin/sw.js', { scope: '/admin/' })
      .catch(function () {});
  });
})();