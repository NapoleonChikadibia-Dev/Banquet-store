//alert("Welcome to Banquet Stores")

window.addEventListener("load", () => {
  const alertBox = document.getElementById("welcome-alert");

  // Slide in
  alertBox.classList.add("show");

  // Slide back out after 3 seconds
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
});

function validateEmail() {
  event.preventDefault(); // prevent page reload

  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg");

  // Regex:
  // - Must start with a letter [a-zA-Z]
  // - Can contain letters, numbers, dot, underscore
  // - Must be gmail.com, yahoo.com, or outlook.com
  // - Blocks ".com@" inside username
  const regex = /^(?!.*\.com@)[a-zA-Z][a-zA-Z0-9._]*@(gmail\.com|yahoo\.com|outlook\.com)$/i;

  if (!email) {
    msg.textContent = "⚠️ Please enter an email address.";
    msg.style.color = "red";
  } else if (!/^[a-zA-Z]/.test(email)) {
    msg.textContent = "⚠️ Please Email must start with an alphabet.";
    msg.style.color = "red";
  } else if (!regex.test(email)) {
    msg.textContent = "⚠️ Please only Gmail, Yahoo, or Outlook allowed. Username can be alphanumeric, and check if it ends with'.com'.";
    msg.style.color = "red";
  } else {
    msg.textContent = "✅ Thank you for subscribing!";
    msg.style.color = "green";
    document.getElementById("email").value = "";
  }
}

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("show");
  overlay.classList.toggle("show", isOpen);
  hamburger.innerHTML = isOpen ? "&times;" : "&#9776;";
});

// Close menu when overlay is clicked
overlay.addEventListener("click", () => {
  menu.classList.remove("show");
  overlay.classList.remove("show");
  hamburger.innerHTML = "&#9776;";
});


document.addEventListener("DOMContentLoaded", () => {
  const topics = document.querySelectorAll(".topics");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.3 }); // trigger when 30% of the section is visible

  topics.forEach(topic => observer.observe(topic));
});

// ===== Scroll Animation Script =====
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2, // how much of element should be visible
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
