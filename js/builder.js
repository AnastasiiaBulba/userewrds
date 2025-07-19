// Component Builder
class ComponentBuilder {
  constructor() {
    this.init();
  }

  async init() {
    await this.loadHeader();
    await this.loadFooter();
  }

  async loadHeader() {
    try {
      const response = await fetch("./components/header.html");
      const headerHTML = await response.text();
      const headerPlaceholder = document.getElementById("header-placeholder");
      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
      }
    } catch (error) {
      console.error("Error loading header:", error);
    }
  }

  async loadFooter() {
    try {
      const response = await fetch("./components/footer.html");
      const footerHTML = await response.text();
      const footerPlaceholder = document.getElementById("footer-placeholder");
      if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
      }
    } catch (error) {
      console.error("Error loading footer:", error);
    }
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("active");
  }
}

// Initialize component builder when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new ComponentBuilder();
});
