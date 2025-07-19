// Cookie Banner Management
class CookieBanner {
  constructor() {
    this.banner = document.getElementById("cookie-banner");
    this.acceptButton = document.getElementById("accept-cookies");
    this.cookieAccepted = localStorage.getItem("cookiesAccepted");

    this.init();
  }

  init() {
    // Перевіряємо, чи існують необхідні елементи
    if (!this.banner) {
      console.warn("Cookie banner element not found");
      return;
    }

    // Показуємо банер тільки якщо куки ще не прийняті
    if (!this.cookieAccepted) {
      this.showBanner();
    } else {
      // Якщо куки вже прийняті, приховуємо банер
      this.hideBanner();
    }

    // Додаємо обробник події для кнопки прийняття
    if (this.acceptButton) {
      this.acceptButton.addEventListener("click", () => this.acceptCookies());
    } else {
      console.warn("Accept cookies button not found");
    }
  }

  showBanner() {
    if (this.banner) {
      // Затримка для кращого UX
      setTimeout(() => {
        this.banner.classList.add("show");
      }, 1000);
    }
  }

  hideBanner() {
    if (this.banner) {
      this.banner.classList.remove("show");
    }
  }

  acceptCookies() {
    try {
      // Зберігаємо в localStorage
      localStorage.setItem("cookiesAccepted", "true");
      this.cookieAccepted = true;

      // Приховуємо банер
      this.hideBanner();

      // Додатковий callback для аналітики (якщо потрібно)
      this.onCookiesAccepted();
    } catch (error) {
      console.error("Error accepting cookies:", error);
      // Якщо localStorage недоступний, все одно приховуємо банер
      this.hideBanner();
    }
  }

  onCookiesAccepted() {
    // Тут можна додати додаткову логіку після прийняття куків
    // Наприклад, ініціалізація аналітики
    console.log("Cookies accepted successfully");
  }

  // Метод для перевірки статусу куків
  static isCookiesAccepted() {
    return localStorage.getItem("cookiesAccepted") === "true";
  }

  // Метод для скидання статусу куків (для тестування)
  static resetCookiesStatus() {
    localStorage.removeItem("cookiesAccepted");
  }
}

// Initialize cookie banner when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new CookieBanner();
});

// Експортуємо для можливого використання в інших скриптах
window.CookieBanner = CookieBanner;
