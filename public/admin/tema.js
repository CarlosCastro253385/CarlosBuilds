(function () {
  var raiz = document.documentElement;

  var barra = document.createElement('div');
  barra.className = 'panel-barra';
  barra.setAttribute('aria-hidden', 'true');
  document.body.appendChild(barra);

  var boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'panel-tema-btn';
  document.body.appendChild(boton);

  function pintar() {
    var oscuro = raiz.getAttribute('data-tema') === 'oscuro';
    boton.textContent = oscuro ? '☀️ Modo claro' : '🌙 Modo oscuro';
    boton.setAttribute('aria-label', oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  boton.addEventListener('click', function () {
    var nuevo = raiz.getAttribute('data-tema') === 'oscuro' ? 'claro' : 'oscuro';
    raiz.setAttribute('data-tema', nuevo);
    try {
      localStorage.setItem('tema-panel', nuevo);
    } catch (e) {}
    pintar();
  });

  pintar();
})();