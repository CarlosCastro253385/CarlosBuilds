(function () {
  var raiz = document.documentElement;

  var barra = document.createElement('div');
  barra.className = 'panel-barra';
  barra.setAttribute('aria-hidden', 'true');
  document.body.appendChild(barra);

  var boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'panel-tema-btn';

  var icono = document.createElement('span');
  icono.className = 'panel-tema-icono';
  icono.setAttribute('aria-hidden', 'true');

  var texto = document.createElement('span');
  texto.className = 'panel-tema-texto';

  boton.appendChild(icono);
  boton.appendChild(texto);
  document.body.appendChild(boton);

  function pintar() {
    var oscuro = raiz.getAttribute('data-tema') === 'oscuro';
    icono.textContent = oscuro ? '☀️' : '🌙';
    texto.textContent = oscuro ? ' Modo claro' : ' Modo oscuro';
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