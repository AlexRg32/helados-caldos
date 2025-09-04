import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animación inicial del header
gsap
  .timeline({ delay: 0.2 })
  .fromTo(
    ".header__logo",
    { y: -30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
  )
  .fromTo(
    ".header__enlace",
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
    "-=0.4"
  )
  .fromTo(
    ".header__navegacion--contacto",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
    "-=0.3"
  );

// Hover effects para enlaces del nav
document.querySelectorAll(".header__enlace").forEach((enlace) => {
  enlace.addEventListener("mouseenter", () => {
    gsap.to(enlace, {
      scale: 1.05,
      color: "#fff9c4",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  enlace.addEventListener("mouseleave", () => {
    gsap.to(enlace, {
      scale: 1,
      color: "#ffffff",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Hover effect para botón contacto
const GRADIENTE_HOVER = "linear-gradient(135deg, var(--fresaIntensidad) 0%, var(--limonIntensidad) 100%);";
const contactoBtn = document.querySelector(".header__navegacion--contacto");
if (contactoBtn) {
  contactoBtn.addEventListener("mouseenter", () => {
    gsap.to(contactoBtn, {
      scale: 1.1,
      background: GRADIENTE_HOVER,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  });

  contactoBtn.addEventListener("mouseleave", () => {
    gsap.to(contactoBtn, {
     scale: 1,
     background: GRADIENTE_HOVER,
     duration: 0.3,
     ease: "back.out(1.7)",

    });
  });
}



// Animación de entrada para los destacados
gsap.fromTo(
  ".destacado",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".destacados",
      start: "top 70%",
    },
  }
);

// Animación para la sección hero
gsap
  .timeline()
  .fromTo(
    ".hero__texto",
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 }
  )
  .fromTo(
    ".hero__imagen",
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1 },
    "-=0.5"
  );

//animacion para carrusel

const botonSabores = document.querySelector(".btn--primario");

botonSabores.addEventListener("mouseenter", () => {
  gsap.to(botonSabores, {
    scale: 1.1,
    backgroundColor: "#fff9c4",
    color: "#fff",
    duration: 0.3,
    ease: "power2.out",
  });
});

botonSabores.addEventListener("mouseleave", () => {
  gsap.to(botonSabores, {
    scale: 1,
    backgroundColor: "#ff6f61",
    color: "#fff",
    duration: 0.3,
    ease: "power2.out",
  });
});

//animaciones para destacado
const destacados = document.querySelectorAll(".destacado");

destacados.forEach((destacado) => {
  destacado.addEventListener("mouseenter", () => {
    gsap.to(destacado, {
      scale: 1.05,

      duration: 0.3,
      ease: "power4.out",
    });
  });

  destacado.addEventListener("mouseleave", () => {
    gsap.to(destacado, {
      scale: 1,

      duration: 0.3,
      ease: "power4.out",
    });
  });
});

ScrollTrigger.create({
  trigger: "body",
  start: "top -50px",
  end: "bottom bottom",
  onToggle: (self) => {
    if (self.isActive) {
      // Reducir header
      gsap.to(".header", { 
        padding: "1rem 2rem", 
        duration: 0.3 
      });
      gsap.to(".header__logo", { 
        scale: 0.8, 
        duration: 0.3 
      });
    } else {
      // Volver al tamaño original
      gsap.to(".header", { 
        padding: "2rem", 
        duration: 0.3 
      });
      gsap.to(".header__logo", { 
        scale: 1, 
        duration: 0.3 
      });
    }
  }
});





