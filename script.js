/* =========================================================
   DATA
   ---------------------------------------------------------
   Images: put your files in the "images" folder next to
   index.html. If a file is missing, a grey "Add image"
   placeholder is shown automatically.
========================================================= */

const projects = [
  {
    title: "E-commerce Website",
    category: "Web Development",
    image: "images/project1.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    description:
      "A responsive e-commerce website designed to provide an interactive online shopping experience with product browsing, user interaction and shopping features.",
    link: "https://github.com/Jannatulx/E-commerce_website.git",
    linkLabel: "GitHub",
  },
  {
    title: "Smart Elevator System",
    category: "Programming & Automation",
    image: "images/project2.jpg",
    tags: ["C/C++", "Programming", "System Design", "Automation"],
    description:
      "A smart elevator system designed to manage floor requests and automate elevator operations using programming and control logic.",
    link: "https://github.com/Jannatulx/smart-elevator-system.git",
    linkLabel: "GitHub",
  },
  {
    title: "Face Recognition Attendance System",
    category: "Computer Vision",
    image: "images/project3.jpg",
    tags: ["Python", "OpenCV", "Computer Vision", "Deep Learning"],
    description:
      "An automated attendance system that uses facial recognition and computer vision to identify individuals and record attendance efficiently.",
    link: "https://github.com/Jannatulx/Face-recognition-with-attendance-system.git",
    linkLabel: "GitHub",
  },
  {
    title: "Multiclass Intrusion Detection",
    category: "Cybersecurity",
    image: "images/project4.jpg",
    tags: ["Python", "Machine Learning", "Cybersecurity", "Classification"],
    description:
      "A machine learning based cybersecurity project that detects and classifies different types of network intrusions and malicious activities.",
    link: "https://colab.research.google.com/drive/1A6XrW9RmqIzrFh57KoIDktmtbDV44fv7#scrollTo=txCeXfz7gpzy",
    linkLabel: "Colab Notebook",
  },
  {
    title: "Ethereum Fraud Detection",
    category: "Blockchain & Machine Learning",
    image: "images/project5.jpg",
    tags: ["Python", "Machine Learning", "Blockchain", "Fraud Detection"],
    description:
      "A machine learning based blockchain security project that analyzes Ethereum transaction data to identify suspicious and potentially fraudulent transactions.",
    link: "https://colab.research.google.com/drive/1F-p86sbEchgJ0YjxGlfMJbu0tAQdm_t0?usp=sharing",
    linkLabel: "Colab Notebook",
  },
  {
    title: "Emotion Based Music Recommender",
    category: "Computer Vision & Deep Learning",
    image: "images/project6.jpg",
    tags: ["Python", "TensorFlow", "ResNet50V2", "Computer Vision"],
    description:
      "Detects facial emotion from a live camera feed using a ResNet50V2-based model and recommends music that matches the detected mood.",
    link: "https://colab.research.google.com/drive/113GmzgYfxue4jrkKUNlsoTZtgiVfy-9h?usp=sharing",
    linkLabel: "Colab Notebook",
  },
];

const certificates = [
  {
    title: "AI Seminar Participant",
    issuer: "IIUC CSE Fest",
    image: "images/certificates/cert1.jpg",
  },
  {
    title: "Ethical Hacking & CTF",
    issuer: "Ethical Hacking and Capture The Flag activity",
    image: "images/certificates/cert2.jpg",
  },
  {
    title: "Secure Coding 101",
    issuer: "Cybersecurity-focused Secure Coding webinar",
    image: "images/certificates/cert3.jpg",
  },
  {
    title: "IEEE Computer Society Seminar",
    issuer: "IEEE Computer Society IIUC Student Branch",
    image: "images/certificates/cert4.jpg",
  },
];

/* Lines typed in the hero (edit these to change the animation) */
const heroRoles = [
  "Computer Science Student",
  "MERN Stack Enthusiast",
  "Aspiring Full-Stack Developer",
];

/* Lines typed in the footer */
const footerLines = [
  "Code • Learn • Build • Grow",
  "Built with HTML & Tailwind CSS",
  "Thanks for visiting my portfolio!",
];

/* =========================================================
   HELPERS
========================================================= */

/* Grey placeholder shown when an image file is missing */
function placeholderSrc(label) {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">` +
    `<rect width="600" height="400" fill="#e8f4fa"/>` +
    `<text x="300" y="205" font-family="Georgia,serif" font-size="26" fill="#5fa4c9" text-anchor="middle">${label}</text>` +
    `</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function withFallback(img, label) {
  img.addEventListener("error", () => {
    img.src = placeholderSrc(label); // data URI never errors, so no loop
  }, { once: true });
}

/* Generic typewriter: types a line, waits, deletes it, moves to the next */
function typewriter(el, lines, { typeSpeed = 80, deleteSpeed = 40, pause = 1500 } = {}) {
  if (!el || !lines.length) return;
  let line = 0, char = 0, deleting = false;

  function tick() {
    const text = lines[line];
    if (!deleting) {
      char++;
      el.textContent = text.slice(0, char);
      if (char === text.length) {
        deleting = true;
        return setTimeout(tick, pause);
      }
    } else {
      char--;
      el.textContent = text.slice(0, char);
      if (char === 0) {
        deleting = false;
        line = (line + 1) % lines.length;
      }
    }
    setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
  }
  tick();
}

/* =========================================================
   HERO + FOOTER TYPEWRITERS
========================================================= */

typewriter(document.getElementById("typed-role"), heroRoles);

/* footer starts typing when it scrolls into view */
const footerTyped = document.getElementById("footer-typed");
if (footerTyped) {
  footerTyped.textContent = "";
  const footerObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      typewriter(footerTyped, footerLines, { typeSpeed: 70, deleteSpeed: 35, pause: 1800 });
      footerObserver.disconnect();
    }
  });
  footerObserver.observe(footerTyped);
}

/* =========================================================
   PROFILE PHOTO FALLBACK
========================================================= */

document.querySelectorAll("img[data-placeholder]").forEach((img) => {
  withFallback(img, img.dataset.placeholder);
});

/* =========================================================
   RENDER PROJECT CARDS
========================================================= */

const projectsRow = document.getElementById("projects-row");

projects.forEach((p, i) => {
  const card = document.createElement("article");
  card.className = "card flex-shrink-0 w-[280px] md:w-[300px]";
  card.innerHTML = `
    <div class="card-media h-40">
      <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" />
    </div>
    <div class="p-5">
      <p class="text-xs font-bold mb-1" style="color:var(--powder-700);">${p.category}</p>
      <h3 class="font-bold text-lg mb-3">${p.title}</h3>
      <div class="flex flex-wrap gap-1.5 mb-4">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="flex gap-2">
        ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="btn btn-outline flex-1 justify-center">${p.linkLabel}</a>` : ""}
        <button data-index="${i}" class="view-details btn btn-primary flex-1 justify-center">View Details</button>
      </div>
    </div>
  `;
  withFallback(card.querySelector("img"), "Add project image");
  projectsRow.appendChild(card);
});

/* =========================================================
   RENDER CERTIFICATE CARDS
========================================================= */

const certsRow = document.getElementById("certs-row");

certificates.forEach((c, i) => {
  const card = document.createElement("article");
  card.className = "card flex-shrink-0 w-[240px] overflow-hidden";
  card.innerHTML = `
    <div class="card-media h-32">
      <img src="${c.image}" alt="${c.title}" class="w-full h-full object-cover" />
    </div>
    <div class="p-4">
      <h3 class="font-bold text-[15px] mb-1">${c.title}</h3>
      <p class="text-[13px] opacity-70 mb-3">${c.issuer}</p>
      <button data-index="${i}" class="view-cert btn btn-outline w-full justify-center">View Certificate</button>
    </div>
  `;
  withFallback(card.querySelector("img"), "Add certificate image");
  certsRow.appendChild(card);
});

/* =========================================================
   PROJECT MODAL
========================================================= */

const projectModal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const modalGithub = document.getElementById("modal-github");

function openProjectModal(p) {
  modalImage.src = p.image;
  modalImage.alt = p.title;
  withFallback(modalImage, "Add project image");
  document.getElementById("modal-category").textContent = p.category;
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-desc").textContent = p.description;
  document.getElementById("modal-tags").innerHTML = p.tags
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  if (p.link) {
    modalGithub.href = p.link;
    modalGithub.textContent = p.linkLabel;
    modalGithub.classList.remove("hidden");
  } else {
    modalGithub.classList.add("hidden");
  }

  projectModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.classList.remove("open");
  document.body.style.overflow = "";
}

projectsRow.addEventListener("click", (e) => {
  const btn = e.target.closest(".view-details");
  if (!btn) return;
  openProjectModal(projects[Number(btn.dataset.index)]);
});

document.getElementById("close-project-modal").addEventListener("click", closeProjectModal);
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) closeProjectModal();
});

/* =========================================================
   CERTIFICATE MODAL
========================================================= */

const certModal = document.getElementById("cert-modal");
const certImage = document.getElementById("cert-image");

function openCertModal(c) {
  certImage.src = c.image;
  certImage.alt = c.title;
  withFallback(certImage, "Add certificate image");
  document.getElementById("cert-title").textContent = c.title;
  document.getElementById("cert-issuer").textContent = c.issuer;
  certModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  certModal.classList.remove("open");
  document.body.style.overflow = "";
}

certsRow.addEventListener("click", (e) => {
  const btn = e.target.closest(".view-cert");
  if (!btn) return;
  openCertModal(certificates[Number(btn.dataset.index)]);
});

document.getElementById("close-cert-modal").addEventListener("click", closeCertModal);
certModal.addEventListener("click", (e) => {
  if (e.target === certModal) closeCertModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
    closeCertModal();
  }
});

/* =========================================================
   HORIZONTAL SCROLL ARROWS
========================================================= */

document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = document.getElementById(btn.dataset.scroll);
    row.scrollBy({ left: Number(btn.dataset.dir) * 320, behavior: "smooth" });
  });
});

/* Mouse wheel scrolls a row sideways only while the row can still move
   in that direction; otherwise the page scrolls normally. */
[projectsRow, certsRow].forEach((row) => {
  row.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = row.scrollWidth - row.clientWidth;
      if (max <= 0) return;
      const atStart = row.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = row.scrollLeft >= max - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      row.scrollBy({ left: e.deltaY * 1.1, behavior: "auto" });
    },
    { passive: false }
  );
});

/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* =========================================================
   SKILL / PROGRESS BARS (animate when scrolled into view)
========================================================= */

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const level = Number(entry.target.dataset.level);
      entry.target.querySelector(".skill-fill").style.width = level + "%";
      const pct = entry.target.querySelector(".skill-pct");
      let current = 0;
      const step = () => {
        current = Math.min(current + 2, level);
        pct.textContent = current + "%";
        if (current < level) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      skillObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);
document.querySelectorAll(".skill").forEach((el) => skillObserver.observe(el));

/* =========================================================
   NAV ACTIVE STATE ON SCROLL
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);
sections.forEach((sec) => navObserver.observe(sec));

/* =========================================================
   MOBILE MENU
========================================================= */

const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");

navToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  });
});

/* =========================================================
   CONTACT FORM (sent for real through EmailJS)
========================================================= */

if (typeof emailjs !== "undefined") {
  emailjs.init({ publicKey: "v987jdhhjuDS10rOX" });
}

const contactForm = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");
const formNote = document.getElementById("form-note");

function showNote(message, ok) {
  formNote.textContent = message;
  formNote.classList.remove("hidden", "ok", "err");
  formNote.classList.add(ok ? "ok" : "err");
  setTimeout(() => formNote.classList.add("hidden"), 5000);
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (typeof emailjs === "undefined") {
    showNote("Message service could not load. Please email me directly.", false);
    return;
  }

  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";

  emailjs
    .sendForm("service_0sx568r", "template_5jxjd4f", contactForm)
    .then(() => {
      showNote("Thank you! Your message has been sent.", true);
      contactForm.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      showNote("Sorry, something went wrong. Please try again or email me directly.", false);
    })
    .finally(() => {
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message";
    });
});
