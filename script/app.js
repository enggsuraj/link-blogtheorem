// GITHUB CALENDER
// GitHubCalendar(".calendar", "enggsuraj", { responsive: true });

// ANIMATION INITIALIZATION
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 0,

  offset: 50,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});

// CLCIK AND DRAG
// const slider = document.querySelector(".wrapper");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", (e) => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3;
//   slider.scrollLeft = scrollLeft - walk;
// });

// EMAIL JS

// see https://www.skypack.dev/view/tsparticles for README

tsParticles.load("tsparticles", {
  autoPlay: true,
  background: {
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1,
  },
  backgroundMask: {
    composite: "source-in",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 0.12,
    },
    enable: false,
  },
  backgroundMode: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  fpsLimit: 75,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: [],
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: [],
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.4,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 0.005,
        quantity: 5,
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 400,
              sync: true,
            },
          },
          collisions: {
            enable: false,
            bounce: {
              horizontal: {
                random: {},
              },
              vertical: {
                random: {},
              },
            },
          },
          links: {
            enable: false,
            shadow: {},
            triangles: {},
          },
          move: {
            outMode: "destroy",
            speed: 5,
            angle: {},
            attract: {
              rotate: {},
            },
            gravity: {},
            noise: {
              delay: {
                random: {},
              },
            },
            outModes: {},
            trail: {},
          },
          size: {
            value: 5,
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 1,
              sync: true,
              startValue: "min",
              destroy: "max",
            },
            random: {},
          },
          bounce: {
            horizontal: {
              random: {},
            },
            vertical: {
              random: {},
            },
          },
          life: {
            delay: {
              random: {},
            },
            duration: {
              random: {},
            },
          },
          number: {
            density: {},
          },
          opacity: {
            animation: {},
            random: {},
          },
          rotate: {
            animation: {},
          },
          shadow: {
            offset: {},
          },
          shape: {},
          stroke: {
            color: {
              value: "",
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
            },
          },
          twinkle: {
            lines: {},
            particles: {},
          },
        },
      },
    },
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#fff",
      animation: {
        enable: true,
        speed: 50,
        sync: false,
      },
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: {
        value: "random",
      },
      consent: false,
      distance: 100,
      enable: true,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#00ff00",
        },
        enable: false,
      },
      triangles: {
        enable: true,
        frequency: 0.07,
        color: {
          value: "#4f4f4f",
        },
        opacity: 0.05,
      },
      width: 1,
      warp: false,
    },
    move: {
      angle: {
        offset: 45,
        value: 90,
      },
      attract: {
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      direction: "none",
      distance: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        maxSpeed: 50,
      },
      noise: {
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
      },
      outModes: {
        default: "out",
      },
      random: false,
      size: false,
      speed: 2,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000",
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 70,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: 0.76,
      animation: {
        destroy: "none",
        enable: true,
        minimumValue: 0.3,
        speed: 0.5,
        startValue: "random",
        sync: false,
      },
    },
    reduceDuplicates: false,
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {},
      type: "circle",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 3,
      animation: {
        destroy: "none",
        enable: true,
        minimumValue: 1,
        speed: 3,
        startValue: "random",
        sync: false,
      },
    },
    stroke: {
      width: 0,
      color: {
        value: "",
        animation: {
          enable: false,
          speed: 0,
          sync: false,
        },
      },
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: false,
  themes: [],
});
