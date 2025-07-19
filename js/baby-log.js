// News Page Manager
class NewsPageManager {
  constructor() {
    this.updatesContainer = document.getElementById("updates-container");
    this.diariesContainer = document.getElementById("diaries-container");
    this.init();
  }

  async init() {
    await this.loadUpdates();
    await this.loadDiaries();
  }

  async loadUpdates() {
    try {
      const response = await fetch("./data/updates.json");
      const updates = await response.json();
      this.renderUpdates(updates);
    } catch (error) {
      console.error("Error loading updates:", error);
      this.renderDefaultUpdates();
    }
  }

  async loadDiaries() {
    try {
      const response = await fetch("./data/diaries.json");
      const diaries = await response.json();
      this.renderDiaries(diaries);
    } catch (error) {
      console.error("Error loading diaries:", error);
      this.renderDefaultDiaries();
    }
  }

  renderUpdates(updates) {
    if (!this.updatesContainer) return;

    const updatesHTML = updates
      .map(
        (update, index) => `
            <div class="news-card">
                <div class="news-content">
                    <div class="news-date">${update.date}</div>
                    <h3 class="news-title">${update.title}</h3>
                    <p class="news-excerpt">${update.excerpt}</p>
                    <div class="news-full" id="update-full-${index}">
                        ${update.fullText}
                    </div>
                    <button class="read-more-btn" onclick="toggleReadMore('update-full-${index}', this)">
                        Read more
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    this.updatesContainer.innerHTML = updatesHTML;
  }

  renderDiaries(diaries) {
    if (!this.diariesContainer) return;

    const diariesHTML = diaries
      .map(
        (diary, index) => `
            <div class="news-card">
                <div class="news-content">
                    <div class="news-date">${diary.date}</div>
                    <h3 class="news-title">${diary.title}</h3>
                    <p class="news-excerpt">${diary.excerpt}</p>
                    <div class="news-full" id="diary-full-${index}">
                        ${diary.fullText}
                    </div>
                    <button class="read-more-btn" onclick="toggleReadMore('diary-full-${index}', this)">
                        Read more
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    this.diariesContainer.innerHTML = diariesHTML;
  }

  renderDefaultUpdates() {
    if (!this.updatesContainer) return;

    window.defaultUpdates = [
      {
        title: "New Brain Teaser Challenges Released!",
        date: "January 15, 2025",
        excerpt:
          "We're excited to announce the biggest update yet - 50+ new brain teaser challenges! Players can now test their cognitive skills with advanced puzzles and time-based challenges.",
        fullText:
          "The Brain Teaser Expansion Pack introduces a completely new dimension to TickTock Challenge. Players can now tackle 50+ new puzzles that test different aspects of cognitive function including memory, pattern recognition, and logical reasoning. The new system includes advanced time-based challenges that push players to think faster and smarter under pressure. Additionally, we've added new puzzle types including spatial reasoning challenges, mathematical brain teasers, and creative problem-solving scenarios. The expansion also includes a new difficulty progression system that adapts to each player's skill level. We've received amazing feedback from our beta testers, and we can't wait to see how players tackle these challenging new puzzles!",
      },
      {
        title: "Bubble Shooter Championship Event",
        date: "January 10, 2025",
        excerpt:
          "Get ready for the most competitive season in TickTock Challenge! Special championship events and limited-time brain teaser challenges will be available.",
        fullText:
          "The Bubble Shooter Championship is approaching, and we're bringing the competitive spirit to TickTock Challenge! Starting January 20th, players will have access to exclusive championship challenges including speed-based bubble shooting, precision targeting competitions, and strategic puzzle-solving tournaments. The championship will feature special leaderboards where players can compete for the highest scores and fastest completion times. We're also introducing a new 'Brain Master' ranking system that tracks players' performance across all puzzle types. The championship will run until February 5th, so make sure to participate and test your skills against players from around the world!",
        image: "card2.jpg",
      },
      {
        title: "Performance Improvements & New Features",
        date: "January 5, 2025",
        excerpt:
          "We've optimized the game engine for smoother gameplay and faster loading times across all devices, plus added new puzzle mechanics.",
        fullText:
          "Our development team has been working hard to improve the overall performance of TickTock Challenge. The latest update includes significant optimizations to the game engine, resulting in smoother animations and faster loading times. We've also improved the mobile experience with better touch controls and reduced battery consumption. The puzzle interface has been streamlined for easier navigation, and the brain teaser challenges now load twice as fast. New features include adaptive difficulty that adjusts based on player performance, a hint system for challenging puzzles, and a comprehensive statistics tracker. These improvements ensure that players can enjoy the game seamlessly across all devices, from smartphones to desktop computers.",
      },
    ];

    this.renderUpdates(defaultUpdates);
  }

  renderDefaultDiaries() {
    if (!this.diariesContainer) return;

    window.defaultDiaries = [
      {
        title: "My Journey to Brain Master Status",
        date: "January 12, 2025",
        excerpt:
          "After weeks of solving puzzles and improving my cognitive skills, I finally achieved Brain Master status. Here's my journey and some tips for new players.",
        fullText:
          "When I first started playing TickTock Challenge, I had no idea how addictive this brain training game would become. My journey began with simple puzzles, gradually building my cognitive skills and learning the mechanics. As I progressed, I discovered the joy of strategic thinking and pattern recognition. The key to becoming a Brain Master is consistent practice and patience. I learned to focus on specific puzzle types - my first breakthrough was mastering the 2048 puzzles, which improved my strategic thinking significantly. The most challenging part was the time-based challenges, but the satisfaction of solving complex puzzles under pressure made it all worthwhile. My advice to new players: start with one puzzle type and master it before moving to others. Also, don't forget to take breaks - your brain needs rest to process and improve!",
        image: "card1.jpg",
      },
      {
        title: "The Ultimate Bubble Shooter Challenge",
        date: "January 8, 2025",
        excerpt:
          "Tackling the advanced bubble shooter challenges revealed some of the most complex yet rewarding puzzle mechanics I've ever experienced.",
        fullText:
          "The advanced bubble shooter challenges are definitely the most complex puzzles in the game, but they're also the most rewarding. These challenges feature intricate bubble patterns, strategic color matching, and time pressure that tests your reflexes and planning skills. However, the satisfaction you get from solving these puzzles is absolutely incredible - each level requires a unique approach and creative problem-solving. I spent three days mastering the advanced techniques, and the effort was worth it. My 'Bubble Master' achievement is now one of my proudest accomplishments, featuring perfect scores on the most challenging levels. The key to success in these challenges is to plan several moves ahead and to be patient - some of the best solutions require thinking outside the box. I recommend trying these advanced challenges only after you've mastered the basic bubble shooter mechanics.",
      },
      {
        title: "Cognitive Training Strategies",
        date: "January 3, 2025",
        excerpt:
          "After months of brain training with TickTock Challenge, I've learned some valuable strategies that I want to share with the community.",
        fullText:
          "Brain training is the heart of TickTock Challenge, and mastering it can make the difference between a casual player and a cognitive champion. My first tip is to always start with warm-up puzzles before tackling challenging brain teasers. This helps activate your cognitive functions and improves performance. Secondly, focus on one puzzle type at a time. Specializing in a particular category (like pattern recognition or logical reasoning) allows you to build expertise and improve faster. Third, don't neglect the time-based challenges - they're excellent for improving processing speed and decision-making under pressure. Finally, participate in community events and challenges. These often provide unique puzzle variations and exclusive brain teasers that can't be found in regular gameplay. The cognitive training aspect of this game is what keeps me coming back - there's always a new challenge to conquer!",
        image: "card3.jpg",
      },
    ];

    this.renderDiaries(defaultDiaries);
  }
}

// Modal functionality
function showModal(content, title, image = null) {
  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modalContent.style.cssText = `
    background: white;
    padding: 2rem;
    border-radius: 12px;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    margin: 1rem;
  `;

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "×";
  closeButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
  `;

  // Add content to modal
  let modalHTML = `<h2 style="margin-bottom: 1rem; color: #e74c3c;">${title}</h2>`;

  if (image) {
    modalHTML += `<img src="./painting/${image}" alt="${title}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 1rem;">`;
  }

  modalHTML += `<div style="line-height: 1.6; color: #333;">${content}</div>`;

  modalContent.innerHTML = modalHTML;

  // Add close button to modal
  modalContent.appendChild(closeButton);

  // Add modal to page
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Close modal functionality
  function closeModal() {
    document.body.removeChild(modalOverlay);
  }

  closeButton.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

// Toggle read more functionality
function toggleReadMore(elementId, button) {
  const fullText = document.getElementById(elementId);
  if (fullText) {
    const content = fullText.innerHTML;
    const titleElement = button.parentElement.querySelector(".news-title");
    const title = titleElement ? titleElement.textContent : "News Article";

    // Get image from the card data
    const cardIndex = elementId.split("-").pop();
    const isUpdate = elementId.includes("update");
    const cardData = isUpdate
      ? defaultUpdates[cardIndex]
      : defaultDiaries[cardIndex];
    const image = cardData ? cardData.image : null;

    showModal(content, title, image);
  }
}

// Initialize the news page manager
document.addEventListener("DOMContentLoaded", function () {
  new NewsPageManager();
});
