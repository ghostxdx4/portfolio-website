window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
});

window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        
        bar.style.width = `${percent}%`;
        
        const percentageText = bar.querySelector('.percentage');
        percentageText.textContent = `${percent}%`;
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // Number of particles
            "density": {
                "enable": true,
                "value_area": 800 // Density of the particles
            }
        },
        "color": {
            "value": "#ff007f" // Particle color
        },
        "shape": {
            "type": "circle", // Shape of the particles
        },
        "opacity": {
            "value": 0.5, // Opacity of the particles
            "random": true, // Make opacity random
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 5, // Size of the particles
            "random": true, // Make size random
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 0.1
            }
        },
        "move": {
            "enable": true, // Enable movement of the particles
            "speed": 3, // Movement speed
            "direction": "none", // Particle direction
            "random": true,
            "straight": false,
            "out_mode": "out", // Particles will disappear when they go out of view
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "window", // Interactivity type
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Particles will move away when hovering over them
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Push new particles when clicking
            }
        }
    },
    "retina_detect": true // Make particles responsive on retina displays
});



(function () {
  const detectDevTools = (callback) => {
    let devtools = { open: false, orientation: null };
    const threshold = 160;

    const emitEvent = () => {
      callback({
        open: devtools.open,
        orientation: devtools.orientation,
      });
    };

    const check = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      const orientation = widthThreshold ? "vertical" : "horizontal";

      if (
        !(heightThreshold && widthThreshold) &&
        ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) ||
          widthThreshold ||
          heightThreshold)
      ) {
        if (!devtools.open || devtools.orientation !== orientation) {
          devtools.open = true;
          devtools.orientation = orientation;
          emitEvent();
        }
      } else {
        if (devtools.open) {
          devtools.open = false;
          devtools.orientation = null;
          emitEvent();
        }
      }
    };

    setInterval(check, 500);
  };

  detectDevTools((status) => {
    if (status.open) {
      console.log("%cI see you snooping around, dear developer! 👀", "color: #ff007f; font-size: 16px; font-weight: bold;");
    }
  });
})();

