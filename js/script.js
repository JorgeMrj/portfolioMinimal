// ===== VARIABLES GLOBALES =====
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// ===== NAVEGACIÓN =====
// Menú hamburguesa
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Cerrar menú al hacer click en un enlace
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Navegación sticky y activa
window.addEventListener("scroll", () => {
  // Navbar transparente
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(15, 15, 35, 0.95)";
  } else {
    navbar.style.background = "rgba(15, 15, 35, 0.95)";
  }

  // Activar enlace de navegación actual
  updateActiveNavLink();
});

// Actualizar enlace activo basado en la sección visible
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");
    const correspondingLink = document.querySelector(
      `.nav-link[href="#${id}"]`
    );

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    }
  });
}

// ===== ANIMACIONES DE SCROLL =====
// Intersection Observer para animaciones
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");

      // Animar barras de habilidades
      if (entry.target.classList.contains("skills")) {
        animateSkillBars();
      }

      // Animar estadísticas
      if (entry.target.classList.contains("about")) {
        animateStats();
      }
    }
  });
}, observerOptions);

// Observar todas las secciones
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// ===== ANIMACIÓN DE BARRAS DE HABILIDADES =====
function animateSkillBars() {
  const skillLevels = document.querySelectorAll(".skill-level");

  skillLevels.forEach((skillLevel, index) => {
    setTimeout(() => {
      const level = skillLevel.getAttribute("data-level");
      skillLevel.style.setProperty("--skill-width", level + "%");

      // Agregar clase para activar la animación CSS
      skillLevel.classList.add("animate");
    }, index * 100);
  });
}

// ===== ANIMACIÓN DE ESTADÍSTICAS =====
function animateStats() {
  const stats = document.querySelectorAll(".stat h3");

  stats.forEach((stat, index) => {
    const finalValue = stat.textContent;
    const isNumber = !isNaN(finalValue.replace("+", "").replace("%", ""));

    if (isNumber) {
      const numericValue = parseInt(finalValue.replace(/\D/g, ""));
      const suffix = finalValue.replace(/\d/g, "");

      animateCounter(stat, 0, numericValue, suffix, 1000 + index * 200);
    }
  });
}

function animateCounter(element, start, end, suffix, duration) {
  let current = start;
  const increment = end / (duration / 16);

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 16);
}

// ===== SISTEMA DE NOTIFICACIONES =====
function showNotification(message, type = "info") {
  // Crear elemento de notificación
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  // Agregar estilos
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        min-width: 300px;
        max-width: 500px;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        backdrop-filter: blur(10px);
    `;

  // Colores según el tipo
  const colors = {
    success:
      "background: rgba(0, 206, 201, 0.9); color: white; border-left: 4px solid #00cec9;",
    error:
      "background: rgba(225, 112, 85, 0.9); color: white; border-left: 4px solid #e17055;",
    info: "background: rgba(0, 217, 255, 0.9); color: white; border-left: 4px solid #00d9ff;",
  };

  notification.style.cssText += colors[type] || colors.info;

  // Agregar al DOM
  document.body.appendChild(notification);

  // Animar entrada
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Agregar evento de cierre
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    removeNotification(notification);
  });

  // Auto-remover después de 5 segundos
  setTimeout(() => {
    removeNotification(notification);
  }, 5000);
}

function removeNotification(notification) {
  notification.style.transform = "translateX(100%)";
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// ===== SCROLL SUAVE =====
// Mejorar el scroll suave para todos los enlaces ancla
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 80; // Compensar altura del navbar

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ===== PARTÍCULAS DE FONDO (OPCIONAL) =====
// Crear efecto de partículas sutil en el hero
function createParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const particlesContainer = document.createElement("div");
  particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;

  hero.appendChild(particlesContainer);

  // Crear partículas
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 217, 255, 0.5);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s linear infinite;
        `;

    particlesContainer.appendChild(particle);
  }
}

// CSS para animación de partículas
const particleStyles = document.createElement("style");
particleStyles.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyles);

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  // Crear partículas
  createParticles();

  // Activar primer enlace de navegación
  const homeLink = document.querySelector('.nav-link[href="#home"]');
  if (homeLink) {
    homeLink.classList.add("active");
  }

  // Precargar imágenes importantes
  preloadImages([
    "assets/profile.jpg",
    "assets/project1.jpg",
    "assets/project2.jpg",
    "assets/project3.jpg",
    "assets/project4.jpg",
  ]);
});

// ===== UTILIDADES =====
function preloadImages(imageUrls) {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

// Throttle para optimizar eventos de scroll
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Aplicar throttle al scroll
window.addEventListener(
  "scroll",
  throttle(() => {
    updateActiveNavLink();
  }, 100)
);

// ===== EASTER EGG =====
// Secuencia de teclas para activar modo desarrollador
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code);

  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    activateDevMode();
    konamiCode = [];
  }
});

function activateDevMode() {
  showNotification(
    "🎉 ¡Modo desarrollador activado! Has encontrado el easter egg.",
    "success"
  );

  // Agregar efecto especial temporal
  document.body.style.filter = "hue-rotate(180deg)";
  setTimeout(() => {
    document.body.style.filter = "none";
  }, 3000);
}

// ===== NUEVAS ANIMACIONES Y EFECTOS =====

// Efecto de typing para el título
class TypingEffect {
  constructor(
    element,
    words,
    typeSpeed = 100,
    deleteSpeed = 50,
    delayBetween = 2000
  ) {
    this.element = element;
    this.words = words;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
    this.delayBetween = delayBetween;
    this.currentWordIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.start();
  }

  start() {
    this.type();
  }

  type() {
    const currentWord = this.words[this.currentWordIndex];

    if (this.isDeleting) {
      // Borrando texto
      this.element.textContent = currentWord.substring(
        0,
        this.currentCharIndex - 1
      );
      this.currentCharIndex--;

      if (this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        setTimeout(() => this.type(), 500);
        return;
      }

      setTimeout(() => this.type(), this.deleteSpeed);
    } else {
      // Escribiendo texto
      this.element.textContent = currentWord.substring(
        0,
        this.currentCharIndex + 1
      );
      this.currentCharIndex++;

      if (this.currentCharIndex === currentWord.length) {
        this.isDeleting = true;
        setTimeout(() => this.type(), this.delayBetween);
        return;
      }

      setTimeout(() => this.type(), this.typeSpeed);
    }
  }
}

// Inicializar efecto typing cuando el DOM esté listo
function initTypingEffect() {
  const typingElement = document.querySelector(".typing-text");
  if (typingElement) {
    const words = JSON.parse(typingElement.getAttribute("data-words"));
    new TypingEffect(typingElement, words, 150, 75, 2000);
  }
}

// Animaciones de scroll mejoradas
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[class*="animate-"]');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Activar animación
        entry.target.style.animationPlayState = "running";
        entry.target.classList.add("visible");

        // Si es una skill category, animar con delay
        if (entry.target.classList.contains("skill-category")) {
          const skillItems = entry.target.querySelectorAll(".skill-item");
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.style.transform = "translateX(0)";
              item.style.opacity = "1";
            }, index * 100);
          });
        }
      }
    });
  }, observerOptions);

  animatedElements.forEach((element) => {
    observer.observe(element);
    // Pausar animación inicialmente
    element.style.animationPlayState = "paused";
  });
}

// Efecto parallax sutil para elementos flotantes
function initParallaxEffect() {
  const floatingElements = document.querySelectorAll(".floating-shape");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    floatingElements.forEach((element, index) => {
      const speed = (index + 1) * 0.2;
      element.style.transform = `translateY(${rate * speed}px)`;
    });
  });
}

// Efecto de hover mejorado para las tarjetas de proyecto
function initProjectCardEffects() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)";
      card.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.4)";
    });
  });
}

// Efecto de ondas en los botones
function initButtonRippleEffect() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Agregar animación de ripple al CSS dinámicamente
function addRippleStyles() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    .btn {
      position: relative;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
}

// Animación suave para el contador de estadísticas mejorada
function animateCounterImproved(element, start, end, suffix, duration) {
  let current = start;
  const increment = (end - start) / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }

    // Formato con animación de escalado
    element.style.transform = "scale(1.1)";
    element.textContent = Math.floor(current) + suffix;

    setTimeout(() => {
      element.style.transform = "scale(1)";
    }, 100);
  }, 16);
}

// Cursor personalizado para elementos interactivos
function initCustomCursor() {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, var(--color-primary), transparent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    mix-blend-mode: difference;
    transition: transform 0.1s ease;
    opacity: 0;
  `;
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
    cursor.style.opacity = "1";
  });

  // Efecto hover en elementos interactivos
  const interactiveElements = document.querySelectorAll(
    "a, button, .btn, .project-card"
  );
  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(2)";
      cursor.style.background =
        "radial-gradient(circle, var(--color-accent), transparent)";
    });

    element.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursor.style.background =
        "radial-gradient(circle, var(--color-primary), transparent)";
    });
  });
}

// Inicialización de todas las nuevas funciones
document.addEventListener("DOMContentLoaded", () => {
  // Funciones existentes
  createParticles();

  const homeLink = document.querySelector('.nav-link[href="#home"]');
  if (homeLink) {
    homeLink.classList.add("active");
  }

  preloadImages([
    "assets/profile.jpg",
    "assets/project1.jpg",
    "assets/project2.jpg",
    "assets/project3.jpg",
    "assets/project4.jpg",
  ]);

  // Nuevas funciones
  initTypingEffect();
  initScrollAnimations();
  initParallaxEffect();
  initProjectCardEffects();
  initButtonRippleEffect();
  addRippleStyles();

  // Eliminar cursor personalizado ya que quitas las animaciones del mouse
  // if (window.innerWidth > 768) {
  //   initCustomCursor();
  // }

  // Inicializar typing effects
  initTypingEffects();

  // Precargar y optimizar animaciones
  setTimeout(() => {
    document.body.classList.add("animations-ready");
  }, 100);
});

// ===== TYPING EFFECTS =====
function initTypingEffects() {
  // Efecto de typing para el título principal
  const typingElement = document.querySelector(".typing-text");
  if (typingElement) {
    const words = JSON.parse(typingElement.getAttribute("data-words") || "[]");
    new TypingEffect(typingElement, words, 100, 50, 2000);
  }

  // Efecto de typing para el cuadro de código
  const codeTypingElement = document.querySelector(".typing-code");
  if (codeTypingElement) {
    new CodeTypingEffect(codeTypingElement);
  }
}

// Clase para el efecto typing del título
class TypingEffect {
  constructor(
    element,
    words,
    typeSpeed = 100,
    deleteSpeed = 50,
    delayBetween = 2000
  ) {
    this.element = element;
    this.words = words;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
    this.delayBetween = delayBetween;
    this.currentWordIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.start();
  }

  start() {
    this.type();
  }

  type() {
    const currentWord = this.words[this.currentWordIndex];

    if (this.isDeleting) {
      this.element.textContent = currentWord.substring(
        0,
        this.currentCharIndex - 1
      );
      this.currentCharIndex--;
    } else {
      this.element.textContent = currentWord.substring(
        0,
        this.currentCharIndex + 1
      );
      this.currentCharIndex++;
    }

    let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
      typeSpeed = this.delayBetween;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Clase para el efecto typing del cuadro de código
class CodeTypingEffect {
  constructor(element, technologies = []) {
    this.element = element;
    this.technologies =
      technologies.length > 0
        ? technologies
        : [
            "React",
            "Vue.js",
            "Laravel",
            "Node.js",
            "MongoDB",
            "PHP",
            "Python",
            "TypeScript",
            "Next.js",
            "Express",
          ];
    this.currentIndex = 0;
    this.currentChar = 0;
    this.isDeleting = false;
    this.typeSpeed = 150;
    this.deleteSpeed = 75;
    this.pauseTime = 2000;
    this.start();
  }

  start() {
    this.type();
  }

  type() {
    const current = this.technologies[this.currentIndex];

    if (this.isDeleting) {
      this.element.textContent = `"${current.substring(
        0,
        this.currentChar - 1
      )}"`;
      this.currentChar--;
    } else {
      this.element.textContent = `"${current.substring(
        0,
        this.currentChar + 1
      )}"`;
      this.currentChar++;
    }

    let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.currentChar === current.length) {
      speed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentChar === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.technologies.length;
    }

    setTimeout(() => this.type(), speed);
  }
}
