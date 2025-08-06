
// script.js

// Highlight active navigation link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: WhatsApp floating button logic
function openWhatsApp() {
  const phone = '27831234567';
  const message = 'Hello, I need assistance with funeral services.';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Live chat (basic simulated chat launcher)
document.addEventListener("DOMContentLoaded", () => {
  const livechat = document.createElement('div');
  livechat.id = "livechat";
  livechat.textContent = "Live Chat";
  Object.assign(livechat.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
  });
  livechat.onclick = () => alert("Thank you for reaching out. A consultant will be with you shortly.");
  document.body.appendChild(livechat);
});
