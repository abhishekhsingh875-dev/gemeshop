// ==============================
// AUTH CHECK
// ==============================
function isLoggedIn() {
  return localStorage.getItem("loggedInUser") != null; // ✅ one name
}

function getUser() {
  return localStorage.getItem("loggedInUser") || "guest";
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

// ==============================
// RENDER GAMES
// ==============================
function renderGames(list, gridId = "gamesGrid") {
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <div class="card-cover" style="background-image: url('${game.cover}')">
        <div class="card-actions">
          <button class="action-btn like-btn" onclick="toggleLike(${game.id}, this)">♥</button>
          <button class="action-btn fav-btn" onclick="toggleFavorite(${game.id}, this)">★</button>
          <button class="action-btn share-btn" onclick="shareGame(${game.id})">⇧</button>
        </div>
      </div>
      <div class="card-info">
        <h3>${game.title}</h3>
        <p>${game.genre.join(", ")}</p>
        <span class="rating">⭐ ${game.rating}</span>
        <button onclick="openGame(${game.id})">Read Story</button>
      </div>
    `;
    grid.appendChild(card);
  });
  restoreCardStates();
}

// ==============================
// OPEN GAME — only ONE version!
// ==============================
function openGame(id) {
  // ✅ check login
  if (!isLoggedIn()) {
    window.location.href = "login.html";
    return;
  }

  const game = games.find(g => g.id === Number(id)); // ✅ games not game
  if (!game) return;

  // ✅ Save history per user
  const histKey = `history_${getUser()}`;
  let history   = JSON.parse(localStorage.getItem(histKey) || "[]");
  if (!history.includes(Number(id))) {
    history.unshift(Number(id));
    history = history.slice(0, 20);
    localStorage.setItem(histKey, JSON.stringify(history));
  }

  const modal   = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <button onclick="closeModal()">✕ Close</button>
    <img src="${game.cover}" alt="${game.title}">
    <h2>${game.title}</h2>
    <p class="short-desc"><b>Short Desc:</b> ${game.shortDesc}</p>
    <p><b>Developer:</b> ${game.developer}</p>
    <p><b>Year:</b> ${game.releaseYear}</p>
    <p><b>Platforms:</b> ${game.platform.join(", ")}</p>
    <p><b>Tags:</b> ${game.tags.join(", ")}</p>
    <hr>
    <h3>📖 The Story</h3>
    <p>${game.story}</p>
    <h3>🧑 Characters</h3>
    ${game.characters.map(c =>
      `<p><b>${c.name}</b> — ${c.role}</p>`).join("")}
    ${game.series ? `
    <hr>
    <h3>🎮 More in this series</h3>
    <div class="series-games">
      ${games
        .filter(g => g.series === game.series && g.id !== game.id)
        .map(g => `
          <div class="series-card"
            onclick="closeModal(); setTimeout(() => openGame(${g.id}), 300)">
            <img src="${g.cover}" alt="${g.title}">
            <div>
              <p><b>${g.title}</b></p>
              <p>${g.releaseYear} · ⭐ ${g.rating}</p>
            </div>
          </div>
        `).join("")}
    </div>` : ""}
  `;

  modal.classList.remove("hidden");
}

// ==============================
// CLOSE MODAL
// ==============================
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// ==============================
// SEARCH
// ==============================
document.getElementById("searchBar").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  const filtered = games.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.genre.some(genre => genre.toLowerCase().includes(q))
  );
  renderGames(filtered);
});

// ==============================
// GENRE FILTERS
// ==============================
const genres = ["All", "Action", "RPG", "Horror", "Adventure", "Survival", "Open World"];
const filterContainer = document.getElementById("genreFilters");

genres.forEach(genre => {
  const btn = document.createElement("button");
  btn.textContent = genre;
  btn.onclick = () => {
    document.querySelectorAll("#genreFilters button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filtered = genre === "All"
      ? games
      : games.filter(g => g.genre.includes(genre));
    renderGames(filtered);
  };
  filterContainer.appendChild(btn);
});

// ==============================
// LIKE — per user
// ==============================
function toggleLike(id, btn) {
  const key = `likes_${getUser()}`;
  let likes = JSON.parse(localStorage.getItem(key) || "[]");
  if (likes.includes(id)) {
    likes = likes.filter(l => l !== id);
    btn.classList.remove("active");
  } else {
    likes.push(id);
    btn.classList.add("active");
  }
  localStorage.setItem(key, JSON.stringify(likes));
}

// ==============================
// FAVORITE — per user
// ==============================
function toggleFavorite(id, btn) {
  const key = `favs_${getUser()}`;
  let favs  = JSON.parse(localStorage.getItem(key) || "[]");
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    btn.classList.remove("active");
  } else {
    favs.push(id);
    btn.classList.add("active");
  }
  localStorage.setItem(key, JSON.stringify(favs));
}

// ==============================
// SHARE
// ==============================
function shareGame(id) {
  const game = games.find(g => g.id === id);
  if (navigator.share) {
    navigator.share({
      title: game.title,
      text: game.shortDesc,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(
      `Check out ${game.title} on GameStoryHub! ${window.location.href}`
    );
    alert("Link copied!");
  }
}

// ==============================
// RESTORE CARD STATES
// ==============================
function restoreCardStates() {
  const likes = JSON.parse(localStorage.getItem(`likes_${getUser()}`) || "[]");
  const favs  = JSON.parse(localStorage.getItem(`favs_${getUser()}`)  || "[]");

  likes.forEach(id => {
    const btn = document.querySelector(`.like-btn[onclick*="${id}"]`);
    if (btn) btn.classList.add("active");
  });
  favs.forEach(id => {
    const btn = document.querySelector(`.fav-btn[onclick*="${id}"]`);
    if (btn) btn.classList.add("active");
  });
}

// ==============================
// SECTIONS
// ==============================
function showSection(name) {
  ["home", "history", "favorites", "about"].forEach(s => {
    document.getElementById(`section-${s}`).classList.add("hidden");
  });
  document.getElementById(`section-${name}`).classList.remove("hidden");
  if (name === "history")   renderHistory();
  if (name === "favorites") renderFavorites();
}

function renderHistory() {
  const history = JSON.parse(
    localStorage.getItem(`history_${getUser()}`) || "[]"); // ✅ per user
  const grid = document.getElementById("historyGrid");
  if (history.length === 0) {
    grid.innerHTML = `<p class="empty-msg">No history yet!</p>`;
    return;
  }
  const list = history.map(id => games.find(g => g.id === id)).filter(Boolean);
  renderGames(list, "historyGrid");
}

function renderFavorites() {
  const favs = JSON.parse(
    localStorage.getItem(`favs_${getUser()}`) || "[]"); // ✅ per user
  const grid = document.getElementById("favoritesGrid");
  if (favs.length === 0) {
    grid.innerHTML = `<p class="empty-msg">No favorites yet!</p>`;
    return;
  }
  const list = favs.map(id => games.find(g => g.id === id)).filter(Boolean);
  renderGames(list, "favoritesGrid");
}

function clearHistory() {
  localStorage.removeItem(`history_${getUser()}`); // ✅ per user
  renderHistory();
}

// ==============================
// NAVBAR USER
// ==============================
function loadUserNav() {
  const user = localStorage.getItem("loggedInUser");
  const nav  = document.querySelector(".nav-links");
  if (!user || !nav) return;

  const pic = localStorage.getItem(`pic_${user}`) || "image/default-avatar.png";

  nav.innerHTML += `
    <div class="nav-profile" onclick="window.location.href='profile.html'">
      <img id="navAvatar" src="${pic}" alt="avatar">
      <span>${user}</span>
    </div>
    <button onclick="logout()">Logout</button>
  `;
}

// ==============================
// START
// ==============================
renderGames(games);
loadUserNav();