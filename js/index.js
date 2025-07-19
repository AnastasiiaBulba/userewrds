// Homepage JavaScript
class HomepageManager {
  constructor() {
    this.reviewsContainer = document.getElementById("reviews-container");
    this.init();
  }

  async init() {
    await this.loadReviews();
  }

  async loadReviews() {
    try {
      const response = await fetch("./data/reviews.json");
      const reviews = await response.json();
      this.renderReviews(reviews);
    } catch (error) {
      console.error("Error loading reviews:", error);
      this.renderDefaultReviews();
    }
  }

  renderReviews(reviews) {
    if (!this.reviewsContainer) return;

    const reviewsHTML = reviews
      .map(
        (review) => `
            <div class="review-card">
                <div class="review-author">${review.author}</div>
                <div class="review-text">"${review.text}"</div>
            </div>
        `
      )
      .join("");

    this.reviewsContainer.innerHTML = reviewsHTML;
  }

  renderDefaultReviews() {
    if (!this.reviewsContainer) return;

    const defaultReviews = [
      {
        author: "Sarah M.",
        text: "This brain teaser game is absolutely addictive! I love the variety of puzzles and the time pressure really keeps me engaged. The bubble shooter challenges are my favorite - they're so satisfying to solve!",
      },
      {
        author: "Mike R.",
        text: "Perfect game for keeping my mind sharp! The 2048 puzzles are relaxing yet challenging, and the cognitive training aspect is really noticeable. Great way to unwind while exercising my brain.",
      },
      {
        author: "Emma L.",
        text: "My kids love this game! It's educational and fun at the same time. They learn problem-solving skills while having a blast with the colorful puzzles and brain teasers.",
      },
      {
        author: "David K.",
        text: "Excellent collection of minigames! The match and merge challenges are incredibly satisfying, and the salon-themed brain teasers are so creative. This game really pushes you to think faster and smarter.",
      },
    ];

    this.renderReviews(defaultReviews);
  }
}

// Scroll to game function
function scrollToGame() {
  const gameSection = document.querySelector(".game-section");
  if (gameSection) {
    gameSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Initialize homepage when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new HomepageManager();
});
