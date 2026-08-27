# Portafolio — Jose Luis Zamora

Página web profesional de una sola página (one-page) para presentar el
perfil de Jose Luis Zamora, Ingeniero de Sistemas especializado en
desarrollo de software.

## 1. Estructura de archivos

```
portfolio-jose-luis-zamora/
├── index.html                  # Estructura y contenido de las 7 secciones
├── css/
│   └── style.css               # Estilos, paleta de color y responsive
├── js/
│   └── script.js               # Menú móvil, header al scroll, año del footer
├── images/
│   ├── LEEME-IMAGENES.txt      # Guía de dónde colocar cada imagen
│   ├── perfil/
│   │   └── foto-perfil.jpg     # ⬅ Coloca aquí tu foto (no incluida)
│   └── proyectos/
│       ├── proyecto-1.jpg      # ⬅ Coloca aquí las imágenes (no incluidas)
│       ├── proyecto-2.jpg
│       └── proyecto-3.jpg
└── README.md
```

## 2. Explicación breve

- **index.html**: contiene las 7 secciones solicitadas (Inicio, Sobre mí,
  Habilidades, Experiencia profesional, Proyectos, Servicios y Contacto),
  en el orden en que aparecen en el menú de navegación.
- **css/style.css**: define la paleta de color (azul oscuro, blanco y
  celeste), la tipografía (Space Grotesk para títulos, Inter para texto
  y JetBrains Mono para acentos tipo "código") y las reglas responsive
  para computadoras, tablets y celulares.
- **js/script.js**: controla el menú hamburguesa en móvil, la sombra del
  encabezado al hacer scroll, el resaltado del enlace activo del menú y
  el año automático del footer. No depende de librerías externas.
- Todo el texto que aún no me diste (experiencia laboral detallada,
  nombres y enlaces de proyectos, correo, LinkedIn, GitHub, etc.) está
  marcado claramente como **[CONTENIDO PENDIENTE: ...]** dentro del
  HTML, para que lo ubiques y reemplaces fácilmente.

## 3. Dónde colocar tus imágenes

Ver el archivo `images/LEEME-IMAGENES.txt`. En resumen:

- Foto de perfil → `images/perfil/foto-perfil.jpg`
- Imágenes de proyectos → `images/proyectos/proyecto-1.jpg`,
  `proyecto-2.jpg`, `proyecto-3.jpg`

Mientras no subas una imagen, la página muestra automáticamente un
recuadro indicando la ruta exacta donde debe ir, en lugar de romperse
o mostrar un ícono roto.

## 4. Cómo reemplazar el contenido pendiente

Abre `index.html` con un editor de texto (VS Code, Sublime, etc.) y
busca la palabra `CONTENIDO PENDIENTE`. Cada aparición indica qué dato
falta (por ejemplo: correo electrónico, enlace de LinkedIn, enlace de
GitHub, nombre de empresas, fechas de experiencia, nombres y enlaces de
proyectos). Reemplaza el texto marcado por tu información real y
elimina la clase `placeholder-text` del elemento si ya no quieres el
resaltado visual de "pendiente".

También debes reemplazar los enlaces `href="#"` de:
- Los botones/íconos de LinkedIn y GitHub (nav superior no los incluye,
  pero sí la sección de contacto y el footer).
- Los enlaces "Ver proyecto ↗" y "GitHub ↗" de cada tarjeta de proyecto.
- El correo `correo-pendiente@ejemplo.com` en los botones "Contáctame"
  y en la tarjeta de correo electrónico.

## 5. Cómo ejecutar la página localmente

No necesitas instalar nada: es HTML, CSS y JavaScript puro.

**Opción A — Abrir directamente:**
1. Descomprime la carpeta del proyecto.
2. Haz doble clic en `index.html`. Se abrirá en tu navegador
   predeterminado.

**Opción B — Servidor local (recomendada, evita problemas con rutas):**

Con Python instalado:
```bash
cd portfolio-jose-luis-zamora
python3 -m http.server 8080
```
Luego abre `http://localhost:8080` en tu navegador.

Con la extensión "Live Server" de VS Code:
1. Abre la carpeta del proyecto en VS Code.
2. Clic derecho sobre `index.html` → "Open with Live Server".

## 6. Publicar la página (opcional)

Al ser un sitio estático, puedes subirlo gratis a servicios como
GitHub Pages, Netlify o Vercel simplemente arrastrando la carpeta o
conectando el repositorio de GitHub.
