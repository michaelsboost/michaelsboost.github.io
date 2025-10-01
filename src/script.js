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
    },
    activeCategory: 'apps',
    categories: ['apps', 'books'],
    apps: [
      {
        name: 'kodeWeave',
        description: 'A revolutionary live coding playground',
        image: 'https://raw.githubusercontent.com/michaelsboost/kodeWeave/main/imgs/header.png',
        url: 'https://michaelsboost.com/kodeWeave/',
        color: 'yellow'
      },
      {
        name: 'Polyrise',
        description: 'Build websites with modular components and visual editing',
        image: 'https://raw.githubusercontent.com/michaelsboost/Polyrise/gh-pages/imgs/header.png',
        url: 'https://michaelsboost.com/Polyrise/',
        color: 'purple'
      },
      {
        name: 'Compound Calculator',
        description: 'Compound growth planner for disciplined trading strategies',
        image: 'https://raw.githubusercontent.com/michaelsboost/CompoundCalculator/main/screenshot.png',
        url: 'http://michaelsboost.github.io/CompoundCalculator',
        color: 'orange'
      },
      {
        name: 'ChartDojo',
        description: 'Learn technical analysis through gamified chart pattern challenges',
        image: 'https://raw.githubusercontent.com/michaelsboost/ChartDojo/main/imgs/screenshot-2.jpeg',
        url: 'http://michaelsboost.github.io/ChartDojo',
        color: 'green'
      },
      {
        name: 'PropForge',
        description: 'Trader training simulator for prop firm evaluation tests',
        image: 'https://raw.githubusercontent.com/michaelsboost/PropForge/main/imgs/screenshot.jpeg',
        url: 'http://michaelsboost.github.io/PropForge/',
        color: 'blue'
      },
      {
        name: 'AlgoArena',
        description: 'Strategy testing arena comparing trading bots vs human decisions',
        image: 'https://raw.githubusercontent.com/michaelsboost/AlgoArena/main/imgs/screenshot.jpeg',
        url: 'https://michaelsboost.github.io/AlgoArena/',
        color: 'indigo'
      },
      {
        name: 'UpOrDown',
        description: 'Random trading simulator testing profitability through money management alone',
        image: 'https://raw.githubusercontent.com/michaelsboost/UpOrDown/main/imgs/screenshot.jpeg',
        url: 'https://michaelsboost.github.io/UpOrDown/',
        color: 'purple'
      },
      {
        name: 'RITE',
        description: 'Minimal workout timer for athletic training',
        image: 'https://raw.githubusercontent.com/michaelsboost/Rite/gh-pages/imgs/screenshot.jpeg',
        url: 'http://michaelsboost.github.io/Rite/',
        color: 'red'
      },
      {
        name: 'Eye Workout',
        description: 'Modern implementation of Bates Method for digital eye strain relief',
        image: 'https://raw.githubusercontent.com/michaelsboost/Eye-Workout/gh-pages/screenshot2.png',
        url: 'http://michaelsboost.github.io/Eye-Workout',
        color: 'indigo'
      },
      {
        name: 'The Deck',
        description: 'Hub for card-based games and conversation apps',
        image: 'https://raw.githubusercontent.com/michaelsboost/the-deck/main/imgs/screenshot.jpeg',
        url: 'http://michaelsboost.github.io/the-deck',
        color: 'yellow'
      },
      {
        name: 'Character Party',
        description: 'Creative brainstorming tool for generating unique character combinations.',
        image: 'https://raw.githubusercontent.com/michaelsboost/Character-Party/gh-pages/imgs/screenshot.png',
        url: 'https://michaelsboost.github.io/Character-Party/',
        color: 'pink'
      },
      {
        name: 'svgMotion',
        description: 'Vector animation tool designed specifically for mobile devices',
        image: 'https://raw.githubusercontent.com/michaelsboost/svgMotion/gh-pages/screenshots/preview.png',
        url: 'https://michaelsboost.github.io/svgMotion/',
        color: 'blue'
      }
    ],
    books: [
      // Survival (Most Important)
      {
        name: 'Survival: A Blueprint for Self-Reliance in the Wilderness and Modern World',
        shortName: 'Survival Guide',
        image: 'https://public-files.gumroad.com/1p7bw6b82cd7git95nabkdqbq3wu',
        url: 'https://michaelsboost.gumroad.com/l/survival-a-blueprint-for-self-reliance?layout=profile',
        color: 'amber'
      },
      {
        name: 'Homeless Survival Guide',
        shortName: 'Homeless Survival',
        image: 'https://public-files.gumroad.com/hp3t44e2w1iyd4nc35dx8cxz9xur',
        url: 'https://michaelsboost.gumroad.com/l/homeless-survival-guide?layout=profile',
        color: 'amber'
      },
      
      // Finance & Trading
      {
        name: 'New Trader Blueprint: The Ultimate Beginner\'s Guide to Becoming a Disciplined Trader',
        shortName: 'Trader Blueprint',
        image: 'https://public-files.gumroad.com/ly68nvy1h7t06edj69wps3fnf5wr',
        url: 'https://michaelsboost.gumroad.com/l/new-trader-blueprint?layout=profile',
        color: 'red'
      },
      {
        name: 'Trading Rules: A Discipline-First Approach to Consistent Profits',
        shortName: 'Trading Rules',
        image: 'https://public-files.gumroad.com/e7wcy56ucxy2hvw3b7v28x05ph6d',
        url: 'https://michaelsboost.gumroad.com/l/aaojw?layout=profile',
        color: 'orange'
      },
      {
        name: 'Mastering Your Finances: A Comprehensive Guide to Budgeting',
        shortName: 'Master Finances',
        image: 'https://public-files.gumroad.com/j423zpm8rfk7yb598ccnpp3niuhd',
        url: 'https://michaelsboost.gumroad.com/l/mastering-your-finances?layout=profile',
        color: 'purple'
      },
      {
        name: 'Smart Money Saving Habits: A Guide to Financial Efficiency',
        shortName: 'Money Habits',
        image: 'https://public-files.gumroad.com/f50h4yldp2n8k8ntdcds0tfdnrq5',
        url: 'https://michaelsboost.gumroad.com/l/smart-money-saving-habits?layout=profile',
        color: 'emerald'
      },
      {
        name: 'The Digital Money Matrix: Exploring Diverse Online Avenues',
        shortName: 'Money Matrix',
        image: 'https://public-files.gumroad.com/8j4310ut9049ys1pfmyazduigv77',
        url: 'https://michaelsboost.gumroad.com/l/digital-money-matrix?layout=profile',
        color: 'cyan'
      },
      {
        name: 'Understanding Charitable Contribution Deductions',
        shortName: 'Tax Deductions',
        image: 'https://public-files.gumroad.com/8s7lprf5kmatycj4xhvec8bf7rru',
        url: 'https://michaelsboost.gumroad.com/l/UnderstandingCharitableContributionDeductions?layout=profile',
        color: 'red'
      },
      
      // Business & Career
      {
        name: 'Peter the Panda\'s Business Journey: A Tale of Mentorship and Success',
        shortName: 'Business Journey',
        image: 'https://public-files.gumroad.com/tx664npcd0jsqyax8b9sch3x8xnp',
        url: 'https://michaelsboost.gumroad.com/l/peter-the-pandas-mentorship?layout=profile',
        color: 'blue'
      },
      {
        name: 'How To Find The Right Mentor',
        shortName: 'Find a Mentor',
        image: 'https://public-files.gumroad.com/rilwqlmrrep6x26pzr3winaafy06',
        url: 'https://michaelsboost.gumroad.com/l/how-to-find-the-right-mentor?layout=profile',
        color: 'green'
      },
      {
        name: 'Guide To eBay Reselling',
        shortName: 'eBay Reselling',
        image: 'https://public-files.gumroad.com/03781r9wglneufu1svfscz3mtldj',
        url: 'https://michaelsboost.gumroad.com/l/guide-to-ebay-reselling?layout=profile',
        color: 'yellow'
      },
      
      // App Development (Last)
      {
        name: 'A Decade Of Making Apps',
        shortName: 'App Development',
        image: 'https://public-files.gumroad.com/mx2xndew53u3sfrkofot43sngexe',
        url: 'https://michaelsboost.gumroad.com/l/a_decade_of_making_apps?layout=profile',
        color: 'indigo'
      }
    ],
    storeData: {
      courses: [
        {
          title: "Graphic Design Bootcamp",
          description: " Master professional graphic design using only free software. Learn layout, typography, branding, and digital design from scratch.",
          image: "https://michaelsboost.com/imgs/site/graphicdesign.png",
          link: "https://www.udemy.com/course/graphic-design-bootcamp-with-only-free-software/",
          badge: "🎓 Bestselling Course",
          features: [
            "🎥 11.5 hours on-demand video", 
            "📱 Access on mobile and TV", 
            "🔄 Full lifetime access", 
            "🏆 Certificate of completion"
          ],
          buttonText: "Enroll Now",
          buttonClass: "from-purple-500 to-pink-500"
        }
      ],
      merch: [
        {
          title: "Premium Apparel",
          description: "T-shirts & Hoodies",
          image: "https://michaelsboost.com/imgs/store/1.jpg",
          link: "https://michaelsboost-store.creator-spring.com/",
          type: "merch",
          hoverText: "Shop Now →"
        },
        {
          title: "Accessories",
          description: "Mugs & Stickers",
          image: "https://michaelsboost.com/imgs/store/2.jpg",
          link: "https://michaelsboost-store.creator-spring.com/",
          type: "merch",
          hoverText: "Shop Now →"
        }
      ],
      ebooks: [
        {
          title: "Digital Money Matrix",
          description: "Finance Guide",
          image: "https://michaelsboost.com/imgs/books/thedigitalmoneymatrix.webp",
          link: "https://michaelsboost.gumroad.com/l/digital-money-matrix",
          type: "ebook",
          hoverText: "Get eBook →"
        },
        {
          title: "eBay Reselling Guide",
          description: "Business Strategy",
          image: "https://michaelsboost.com/imgs/books/guidetoebayreselling.webp",
          link: "https://michaelsboost.gumroad.com/l/guide-to-ebay-reselling?layout=profile",
          type: "ebook",
          hoverText: "Get eBook →"
        }
      ]
    },
    artData: [
      {
        title: "Smile or Mask",
        image: "https://michaelsboost.com/imgs/art/1.jpg",
        link: "https://www.deviantart.com/michaelsboost/art/Smile-or-Mask-756882506",
        platform: "deviantart",
        hoverText: "View on DeviantArt →"
      },
      {
        title: "Graphic Design Course",
        image: "https://michaelsboost.com/imgs/art/2.webp", 
        link: "https://michaelsboost.com/graphicdesign",
        platform: "portfolio",
        hoverText: "View Course →"
      },
      {
        title: "Flat 3D Rubix Cube Animation",
        image: "https://michaelsboost.com/imgs/art/3.gif",
        link: "https://dribbble.com/shots/7186890-Flat-3D-Rubix-Cube-Animation",
        platform: "dribbble",
        hoverText: "View on Dribbble →"
      },
      {
        title: "M is for Meditation",
        image: "https://michaelsboost.com/imgs/art/4.gif",
        link: "https://dribbble.com/shots/7572523-M-is-for-Meditation",
        platform: "dribbble", 
        hoverText: "View on Dribbble →"
      }
    ],
    interviewsData: [
      {
        title: "E-commerce Success Story",
        host: "Christianna Hurt",
        guest: "Michael Schwartz",
        description: "Forbes 2021 The Next 1000 lister Christianna Hurt interviews me about my e-commerce success",
        image: "https://michaelsboost.com/imgs/interviews/christianna.webp",
        imageSrcset: "https://michaelsboost.com/imgs/interviews/christianna-640w.webp 640w, https://michaelsboost.com/imgs/interviews/christianna-1280w.webp 1280w",
        links: [
          {
            text: "Watch Interview",
            url: "https://www.instagram.com/tv/CvauGNXId8c/?igsh=MXhhMDI1NWtwMmJmeQ==",
            platform: "instagram"
          }
        ],
        badge: "💰 E-commerce"
      },
      {
        title: "Exploring Tax Lien Investing",
        host: "Michael Schwartz",
        guest: "Nolan Sandburn", 
        description: "Discover tax lien investing: what it is, how it works, benefits for beginners, and how to get started in this unique investment opportunity",
        image: "https://michaelsboost.com/imgs/interviews/nolan.webp",
        imageSrcset: "https://michaelsboost.com/imgs/interviews/nolan-640w.webp 640w, https://michaelsboost.com/imgs/interviews/nolan-1280w.webp 1280w",
        links: [
          {
            text: "Watch Part 1",
            url: "https://www.youtube.com/watch?v=QccM-vV3Wpk",
            platform: "youtube"
          },
          {
            text: "Watch Part 2", 
            url: "https://www.youtube.com/watch?v=xjgVjJah1L8",
            platform: "youtube"
          },
          {
            text: "Watch Part 3",
            url: "https://www.youtube.com/watch?v=gG8anBuwThg",
            platform: "youtube"
          }
        ],
        badge: "🏦 Investing"
      }
    ]
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("observeSections", () => ({
    view: window.location.hash || "#bio",
    init() {
      // Small delay to ensure DOM is updated, then re-observe
      setTimeout(() => {
        this.observeSections();
      }, 100);
      
      window.addEventListener("hashchange", this.handleHashChange.bind(this));
      if (!window.location.hash) {
        window.location.hash = "#bio";
        this.view = "#bio";
      }
  
      // Initialize typewriter after a small delay to ensure DOM is ready
      setTimeout(() => {
        initSimpleTypewriter();
      }, 100);
    },
    handleHashChange() {
      this.view = window.location.hash;
  
      // Small delay to ensure DOM is updated, then re-observe
      setTimeout(() => {
        this.observeSections();
      }, 100);
    },
    observeSections() {
      const headers = document.querySelectorAll("h1");
      const sections = document.querySelectorAll(`[data-view]`);

      // Don't animate sections if we're on #view (we'll use fade instead)
      if (this.view === '#view') return;

      // Wrap each character in divs for headers
      headers.forEach((header) => {
        header.innerHTML = [...header.textContent.trim()]
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
              }
            }
          });
        },
        { threshold: 0.5 },
      );

      [...headers, ...sections].forEach((element) => observer.observe(element));
    }
  }));
});

// Typewriter Animation
function initSimpleTypewriter() {
  const typeElements = document.querySelectorAll('.type-it');
  
  typeElements.forEach((element, index) => {
    const text = element.textContent;
    element.textContent = '';
    
    // Create intersection observer for scroll trigger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriterEffect(element, text, index * 1000); // Stagger by 1 second
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(element);
  });
}
function typeWriterEffect(element, text, delay) {
  setTimeout(() => {
    let i = 0;
    element.textContent = '';
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, 30);
      }
    }
    
    type();
  }, delay);
}