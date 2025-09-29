console.log("HELP");

$(function () {
  // 1) Inyecta CSS con !important para ganar a cualquier regla previa
  const css = `
    #git_photo, #bash_photo, #github_photo {
      width: clamp(220px, 28vw, 360px) !important;
      height: auto !important;
      display: inline-block !important;
      transition: transform 0.15s ease !important;
    }
    #git_photo:hover, #bash_photo:hover, #github_photo:hover {
      transform: scale(1.05);
    }
  `;
  const styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  // 2) Refuerza también con estilos inline (por si había inline previos diferentes)
  function applyInlineSizes() {
    ['#git_photo', '#bash_photo', '#github_photo'].forEach(sel => {
      const el = document.querySelector(sel);
      if (!el) return;
      // width responsive “manual” según breakpoint
      const targetWidth = window.matchMedia('(max-width: 768px)').matches ? '260px' : '340px';
      // Forzar inline con prioridad
      el.style.setProperty('width', targetWidth, 'important');
      el.style.setProperty('height', 'auto', 'important');
      el.style.setProperty('display', 'inline-block', 'important');
    });
  }

  // Aplica ahora y al cambiar tamaño de ventana
  applyInlineSizes();
  window.addEventListener('resize', applyInlineSizes);

  // 3) Hover swap de imágenes (tu código original)
  $("#git_photo").on({
    mouseenter: function () { $(this).attr('src', 'img/git_o.png'); },
    mouseleave: function () { $(this).attr('src', 'img/git.png'); }
  });

  $("#bash_photo").on({
    mouseenter: function () { $(this).attr('src', 'img/bash_o.png'); },
    mouseleave: function () { $(this).attr('src', 'img/bash.png'); }
  });

  $("#github_photo").on({
    mouseenter: function () { $(this).attr('src', 'img/github_o.png'); },
    mouseleave: function () { $(this).attr('src', 'img/github.png'); }
  });
});
