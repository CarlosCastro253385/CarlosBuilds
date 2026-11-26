(function () {
  // ----- Estilos de la vista previa -----
  CMS.registerPreviewStyle('/estilos/landing.css');
  CMS.registerPreviewStyle('/admin/preview-blog.css');
  CMS.registerPreviewStyle('body { margin: 0; background: #0a0b10; }', { raw: true });

  // ----- Ayudas -----
  function lista(valor) {
    return Array.isArray(valor) ? valor : [];
  }

  function ruta(getAsset, path) {
    if (!path) return '';
    try {
      var asset = getAsset(path);
      return asset ? asset.toString() : path;
    } catch (e) {
      return path;
    }
  }

  // ----- Vista previa de la landing -----
  var LandingPreview = createClass({
    render: function () {
      var getAsset = this.props.getAsset;
      var datos = this.props.entry.get('data');
      var d = datos ? datos.toJS() : {};

      return h('div', { className: 'landing' },

        // Sobre mí / hero
        h('section', { id: 'sobre-mi' },
          h('div', { className: 'sobre-mi-container' },
            h('div', { className: 'sobre-mi-texto' },
              h('p', { className: 'hero-sub' }, d.hero_sub),
              h('h1', { className: 'hero-titulo' }, d.hero_titulo),
              h('p', { className: 'hero-descripcion' }, d.hero_descripcion),
              h('div', {}, h('span', { className: 'btn-cta' }, 'Ver mis proyectos'))
            ),
            h('div', { className: 'sobre-mi-foto-wrapper' },
              h('div', { className: 'sobre-mi-foto-marco' },
                d.perfil_img
                  ? h('img', { className: 'perfil-img', src: ruta(getAsset, d.perfil_img), alt: '' })
                  : null
              )
            )
          )
        ),

        // Lenguajes
        h('section', { id: 'lenguajes' },
          h('h2', { className: 'titulo-seccion' }, 'Lenguajes de Programación'),
          h('div', { className: 'skills-grid' },
            lista(d.tech_stack).map(function (tech, i) {
              return h('div', { className: 'skill-card', key: 'tech' + i },
                tech.icon
                  ? h('img', { src: ruta(getAsset, tech.icon), alt: '', width: 40, height: 40 })
                  : null,
                h('p', {}, tech.name)
              );
            })
          )
        ),

        // Proyectos
        h('section', { id: 'proyectos' },
          h('h2', { className: 'titulo-seccion' }, 'Mis Proyectos'),
          h('div', { className: 'proyectos-grid' },
            lista(d.proyectos).map(function (proy, i) {
              return h('div', {
                  className: 'proyecto-card' + (proy.badge ? ' proyecto-destacado' : ''),
                  key: 'proy' + i
                },
                h('div', { className: 'proyecto-info' },
                  proy.badge ? h('span', { className: 'badge-integrador' }, proy.badge) : null,
                  h('h3', { className: 'proyecto-titulo' }, proy.titulo),
                  h('p', { className: 'proyecto-desc' }, proy.descripcion),
                  h('ul', { className: 'proyecto-tech' },
                    lista(proy.tecnologias).map(function (t, j) {
                      return h('li', { key: 'tec' + j }, t);
                    })
                  )
                )
              );
            })
          )
        ),

        // Trayectoria académica
        h('section', { id: 'eventos' },
          h('h2', { className: 'titulo-seccion' }, 'Trayectoria Académica'),
          h('div', { className: 'eventos-grid' },
            lista(d.eventos).map(function (ev, i) {
              return h('div', { className: 'evento-card', key: 'ev' + i },
                h('div', { className: 'evento-contenedor-img' },
                  ev.imagen
                    ? h('img', { className: 'evento-img', src: ruta(getAsset, ev.imagen), alt: '' })
                    : null
                ),
                h('div', { className: 'evento-info' },
                  h('span', { className: 'evento-tag' }, ev.tag),
                  h('h3', { className: 'evento-titulo' }, ev.titulo),
                  h('p', { className: 'evento-desc' }, ev.descripcion)
                )
              );
            })
          )
        ),

        // Certificaciones
        h('section', { id: 'certificaciones' },
          h('h2', { className: 'titulo-seccion' }, 'Certificaciones y Cursos'),
          h('div', { className: 'cert-lista' },
            lista(d.certifications).map(function (c, i) {
              return h('div', { className: 'cert-item', key: 'cert' + i },
                h('div', { className: 'cert-info' },
                  h('h3', {}, c.title),
                  h('p', {}, c.issuer)
                ),
                h('div', { className: 'cert-fecha' }, c.year)
              );
            })
          )
        ),

        // Contacto
        h('section', { id: 'contacto' },
          h('h2', { className: 'titulo-seccion' }, 'Ponte en Contacto'),
          h('div', { className: 'contacto-container' },
            h('p', { className: 'contacto-desc' },
              '¿Tienes un proyecto en mente, una consulta o te gustaría colaborar juntos? ¡Escríbeme!'),
            h('div', { className: 'contacto-links' },
              h('span', { className: 'btn-contacto' }, '📧 Enviar Correo'),
              h('span', { className: 'btn-contacto' }, '💻 GitHub'),
              h('span', { className: 'btn-contacto' }, '📸 Instagram')
            )
          )
        )
      );
    }
  });

  // ----- Vista previa de una entrada del blog -----
  var BlogPreview = createClass({
    render: function () {
      var datos = this.props.entry.get('data');
      var d = datos ? datos.toJS() : {};
      var etiquetas = lista(d.tags);
      var fecha = d.date ? String(d.date) : '';

      return h('div', { className: 'vista-blog' },
        h('div', { className: 'vb-contenedor' },

          h('p', { className: 'vb-nota' }, '// así se verá en la lista del blog'),
          h('article', { className: 'vb-tarjeta' },
            h('span', { className: 'vb-categoria' }, d.category),
            h('h2', { className: 'vb-tarjeta-titulo' }, d.title),
            h('p', { className: 'vb-tarjeta-resumen' }, d.summary),
            h('div', { className: 'vb-tarjeta-pie' },
              h('div', { className: 'vb-tags' },
                etiquetas.map(function (t, i) {
                  return h('span', { className: 'vb-tag', key: 'tag' + i }, '#' + t);
                })
              ),
              h('span', {}, fecha)
            )
          ),

          h('p', { className: 'vb-nota vb-nota-aparte' }, '// así se verá la entrada completa'),
          h('div', { className: 'vb-entrada' },
            h('h1', { className: 'vb-titulo' }, d.title),
            h('p', { className: 'vb-meta' }, fecha + ' • ' + (d.category || '')),
            h('hr', { className: 'vb-linea' }),
            h('article', { className: 'articulo' }, this.props.widgetFor('body'))
          )
        )
      );
    }
  });

  CMS.registerPreviewTemplate('landing_content', LandingPreview);
  CMS.registerPreviewTemplate('mini_proyectos', BlogPreview);
  CMS.registerPreviewTemplate('problemas_resueltos', BlogPreview);
})();