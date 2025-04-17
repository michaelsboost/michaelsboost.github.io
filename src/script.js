function App() {
  return {
    dark: JSON.parse(localStorage.getItem("michaelsboost-darkTheme")) ?? true,
    init() {
      // Apply initial theme class
      this.theme();

      // Watch for changes to `dark` and save them
      this.$watch("dark", (value) => {
        localStorage.setItem("michaelsboost-darkTheme", JSON.stringify(value));
        this.theme();
      });

      this.setView();
    },
    view: window.location.hash || "#bio",
    setView() {
      if (!window.location.hash) {
        window.location.hash = "#bio";
        this.view = "#bio";
      }
    },
    icons: {
      className: "w-8",
      svgTemplate(val, path) {
        return `<svg class="${val}" xmlns="http://www.w3.org/2000/svg" 
          :class="dark ? 'text-white' : 'text-black'" :fill="dark ? 'black' : 'white'" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">${path}</svg>`;
      },
      moon(val) {
        const path = `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />`;
        return this.svgTemplate(val, path);
      },
      sun(val) {
        const path = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />`;
        return this.svgTemplate(val, path);
      },
    },
    theme() {
      document.documentElement.classList.toggle("dark", this.dark);
    }
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("observeSections", () => ({
    view: window.location.hash || "#bio",
    init() {
      this.observeSections();
      window.addEventListener("hashchange", this.handleHashChange.bind(this));
      if (!window.location.hash) {
        window.location.hash = "#bio";
        this.view = "#bio";
      }
    },
    handleHashChange() {
      this.view = window.location.hash;
      this.observeSections();
    },
    observeSections() {
      const headers = document.querySelectorAll("h1");
      const sections = document.querySelectorAll(`[data-view]`);

      // Wrap each character in divs for headers
      headers.forEach((header) => {
        header.innerHTML = [...header.textContent]
          .map(
            (char) =>
              `<div class="inline-block">${char === " " ? "&nbsp;" : char}</div>`,
          )
          .join("");
      });

      const animateItems = (items, yValue, duration, ease, stagger) => {
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0, y: yValue },
          { opacity: 1, scale: 1, y: 0, duration, ease, stagger },
        );
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target.tagName === "H1") {
                animateItems(
                  entry.target.querySelectorAll("div"),
                  90,
                  2,
                  "elastic.out(1.2, 0.5)",
                  0.03,
                );
              } else {
                animateItems(
                  entry.target.querySelectorAll('[data-section="animate"]'),
                  50,
                  1,
                  "power4.out",
                  0.1,
                );
              }
            }
          });
        },
        { threshold: 0.5 },
      );

      [...headers, ...sections].forEach((element) => observer.observe(element));
    },
  }));
});
