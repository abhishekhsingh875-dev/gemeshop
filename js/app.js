function renderGames(list) {
  const grid = document.getElementById("gamesGrid");
  grid.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <div class="card-cover" style="background-image: url('${game.cover}')"></div>
      <div class="card-info">
        <h3>${game.title}</h3>
        <p>${game.genre.join(", ")}</p>
        <span class="rating">⭐ ${game.rating}</span>
        <button onclick="openGame(${game.id})">Read Story</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openGame(id) {
  const game = games.find(g => g.id === Number(id)); // ✅ fixed
  if (!game) return;

  const modal = document.getElementById("modal");
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
  ${game.characters.map(c => `<p><b>${c.name}</b> — ${c.role}</p>`).join("")}
   ${game.series ? `
  <hr>
  <h3>🎮 More in this series</h3>
  <div class="series-games">
    ${games
      .filter(g => g.series === game.series && g.id !== game.id)
      .map(g => `
        <div class="series-card" onclick="closeModal(); setTimeout(() => openGame(${g.id}), 300)">
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

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

document.getElementById("searchBar").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  const filtered = games.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.genre.some(genre => genre.toLowerCase().includes(q))
  );
  renderGames(filtered);
});

const genres = ["All", "Action", "RPG", "Horror", "Adventure", "Survival","Open World"];
const filterContainer = document.getElementById("genreFilters");

genres.forEach(genre => {
  const btn = document.createElement("button");
  btn.textContent = genre;
  btn.onclick = () => {
    document.querySelectorAll("#genreFilters button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active"); // ✅ highlights active button
    const filtered = genre === "All"
      ? games
      : games.filter(g => g.genre.includes(genre));
    renderGames(filtered);
  };
  filterContainer.appendChild(btn);
});

renderGames(games);