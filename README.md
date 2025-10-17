# 🌟 Portafolio Personal

![Portafolio Preview](https://img.shields.io/badge/Estado-En%20Desarrollo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-100%25-success)

## 📖 Descripción

Portafolio web personal minimalista y moderno diseñado para destacar las habilidades y proyectos de Jorge Morgado, estudiante de 2º año de Desarrollo de Aplicaciones Web (DAW). El diseño enfatiza la simplicidad, elegancia y funcionalidad, perfecto para impresionar a reclutadores y empresas del sector tecnológico.

## ✨ Características Principales

### 🎨 Diseño y UX

- **Modo oscuro por defecto** - Diseño elegante y moderno
- **Completamente responsive** - Optimizado para todos los dispositivos
- **Animaciones fluidas** - Transiciones suaves y efectos visuales atractivos
- **Navegación intuitiva** - Menú sticky con indicadores de sección activa
- **Tipografía moderna** - Fuente Inter para una lectura óptima

### 🚀 Funcionalidades

- **Navegación dinámica** - Scroll automático y indicador de sección activa
- **Formulario de contacto funcional** - Validación en tiempo real
- **Animaciones de scroll** - Elementos que aparecen al hacer scroll
- **Barras de progreso animadas** - Visualización de habilidades técnicas
- **Sistema de notificaciones** - Feedback visual para acciones del usuario
- **Easter egg incluido** - Sorpresa para desarrolladores curiosos

### 📱 Secciones Incluidas

1. **Hero Section** - Presentación impactante con call-to-actions
2. **Sobre Mí** - Información personal, educación y estadísticas
3. **Habilidades** - Tecnologías frontend, backend y herramientas
4. **Proyectos** - Portafolio de trabajos con enlaces y tecnologías
5. **Contacto** - Formulario funcional e información de contacto

## 🛠️ Tecnologías Utilizadas

### Frontend

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con variables CSS y Flexbox/Grid
- **JavaScript ES6+** - Funcionalidades interactivas y dinámicas

### Características Técnicas

- **Mobile First** - Diseño responsivo desde móviles
- **SEO Optimized** - Meta tags y estructura optimizada
- **Performance** - Carga rápida y optimizada
- **Accessibility** - Accesible para usuarios con discapacidades
- **Cross-browser** - Compatible con todos los navegadores modernos

### Librerías Externas

- **Font Awesome 6.4.0** - Iconografía moderna
- **Google Fonts (Inter)** - Tipografía optimizada

## 📁 Estructura del Proyecto

```
portfolioMinimal/
│
├── 📄 index.html              # Página principal del portfolio
├── 📄 README.md               # Documentación del proyecto
├── 📄 LICENSE                 # Licencia MIT
├── 📄 .gitignore              # Archivos excluidos de Git
│
├── 📁 css/
│   └── 📄 styles.css          # Estilos CSS con variables personalizadas
│
└── 📁 js/
    └── 📄 script.js           # Funcionalidades JavaScript interactivas
```

**✨ Estructura minimalista y limpia:**

- **Solo 7 archivos** esenciales
- **Sin dependencias** externas
- **Fácil de mantener** y modificar
- **Optimizado** para deploy en cualquier plataforma

## 🚀 Instalación y Uso

### Requisitos

- **Solo un navegador web moderno** (Chrome, Firefox, Safari, Edge)
- **Opcional:** VS Code con Live Server para desarrollo

### Instalación Local

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/jorgeMrj/portfolioMinimal.git
   cd portfolioMinimal
   ```

2. **Abrir directamente**

   ```bash
   # Abrir en navegador
   start index.html  # Windows
   open index.html   # macOS
   ```

3. **Desarrollo con Live Server** (opcional)
   - Instalar [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) en VS Code
   - Abrir proyecto en VS Code
   - Click derecho en `index.html` → "Open with Live Server"

### Personalización Rápida

- **Texto:** Editar directamente en [`index.html`](index.html)
- **Estilos:** Modificar variables CSS en [`css/styles.css`](css/styles.css)
- **Colores:** Cambiar el tema morado por otro color en las variables CSS

## 🌐 Despliegue

### GitHub Pages

1. Subir el código a un repositorio de GitHub
2. Ir a Settings > Pages
3. Seleccionar la rama main como fuente
4. El sitio estará disponible en `https://username.github.io/portfolio`

### Netlify

1. Conectar el repositorio de GitHub con Netlify
2. Configurar el directorio de publicación como raíz (`/`)
3. Despliegue automático con cada push

### Vercel

1. Importar proyecto desde GitHub
2. Configuración automática detectada
3. URL personalizada disponible

## 📋 Lista de Tareas Pendientes

### Funcionalidades

- [ ] Integración con servicio de email real (EmailJS, Formspree)
- [ ] Sistema de blog o artículos
- [ ] Galería de imágenes para proyectos
- [ ] Integración con APIs de GitHub
- [ ] Certificaciones y logros
- [ ] Testimonios de clientes/profesores

### Optimizaciones

- [ ] Lazy loading para imágenes
- [ ] Service Worker para PWA
- [ ] Optimización de Core Web Vitals
- [ ] Compresión de assets
- [ ] CDN para recursos estáticos

### Analytics y SEO

- [ ] Google Analytics 4
- [ ] Schema.org markup
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Open Graph optimizado

## 🎨 Personalización

### Colores del Tema

```css
:root {
  --color-primary: #00d9ff; /* Azul principal */
  --color-secondary: #6c5ce7; /* Púrpura */
  --color-accent: #fd79a8; /* Rosa */
  --bg-primary: #0f0f23; /* Fondo principal */
  --bg-secondary: #1a1a2e; /* Fondo secundario */
}
```

### Fuentes

Para cambiar la tipografía, modificar la importación en `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Animaciones

Las animaciones se pueden personalizar modificando las variables de transición:

```css
:root {
  --transition-fast: 0.15s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;
}
```

## 📊 Métricas de Performance

### Lighthouse Score (Objetivo)

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Core Web Vitals

- **LCP**: < 2.5s (Good)
- **FID**: < 100ms (Good)
- **CLS**: < 0.1 (Good)

## 🤝 Contribuciones

Este es un proyecto personal, pero las sugerencias son bienvenidas:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Jorge Morgado**

- 📧 Email: jorge.morgado@email.com
- 💼 LinkedIn: [linkedin.com/in/jorgemorgado](https://linkedin.com/in/jorgemorgado)
- 🐙 GitHub: [github.com/jorgeMrj](https://github.com/jorgeMrj)
- 🌐 Portfolio: [Tu dominio personalizado]

## 📈 Roadmap

### Versión 2.0 (Planificada)

- [ ] Integración con CMS headless
- [ ] Modo claro/oscuro toggle
- [ ] Múltiples idiomas (i18n)
- [ ] Blog integrado
- [ ] Dashboard de analytics

### Versión 3.0 (Futuro)

- [ ] Migración a framework (React/Vue)
- [ ] Backend con Node.js
- [ ] Base de datos para proyectos
- [ ] Sistema de comentarios
- [ ] PWA completa

---

⭐ **¡No olvides dar una estrella al proyecto si te ha sido útil!**

---

_Desarrollado con ❤️ y mucho ☕ por Jorge Morgado - Estudiante DAW 2025_
