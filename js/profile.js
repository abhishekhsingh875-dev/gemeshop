const currentUser = localStorage.getItem("loggedInUser");

if (!currentUser) {
  window.location.href = "login.html";
}

function loadProfile() {
  // ✅ IDs match HTML exactly
  document.getElementById("profileUsername").textContent = currentUser;
  document.getElementById("profileJoined").textContent = "Member of GameStoryHub";

  const pic = localStorage.getItem(`pic_${currentUser}`);
  if (pic) {
    document.getElementById("profilePic").src = pic; 
  }

  const history = JSON.parse(localStorage.getItem(`history_${currentUser}`) || "[]");
  const likes   = JSON.parse(localStorage.getItem(`likes_${currentUser}`)   || "[]");
  const favs    = JSON.parse(localStorage.getItem(`favs_${currentUser}`)    || "[]");

  document.getElementById("statHistory").textContent = history.length; 
  document.getElementById("statLikes").textContent   = likes.length;   
  document.getElementById("statFavs").textContent    = favs.length;   

  renderProfileGrid(history, "profileHistoryGrid"); 
}

function uploadPic(input) {  
  const file = input.files[0];
  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    alert("Image too large! Please use under 2MB.");
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const base64 = e.target.result;
    localStorage.setItem(`pic_${currentUser}`, base64);
    document.getElementById("profilePic").src = base64; 
    updateNavAvatar(base64);
  };
  reader.readAsDataURL(file);
}

function switchProfileTab(tab) {  
  document.querySelectorAll(".ptab-content")
    .forEach(el => el.classList.add("hidden"));
  document.querySelectorAll(".ptab")
    .forEach(btn => btn.classList.remove("active"));

  document.getElementById(`ptab-${tab}`).classList.remove("hidden");
  event.target.classList.add("active");

  if (tab === "history") {
    const history = JSON.parse(
      localStorage.getItem(`history_${currentUser}`) || "[]");
    renderProfileGrid(history, "profileHistoryGrid");
  }
  if (tab === "liked") {
    const likes = JSON.parse(
      localStorage.getItem(`likes_${currentUser}`) || "[]");
    renderProfileGrid(likes, "profileLikedGrid"); 
  }
  if (tab === "favorites") {  
    const favs = JSON.parse(
      localStorage.getItem(`favs_${currentUser}`) || "[]");
    renderProfileGrid(favs, "profileFavGrid"); // 
  }
}

function renderProfileGrid(ids, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  if (ids.length === 0) {
    grid.innerHTML = `<p class="empty-msg">Nothing here yet!</p>`;
    return;
  }

  grid.innerHTML = "";

  ids.forEach(id => {
    const game = games.find(g => g.id === id);
    if (!game) return;

    const card = document.createElement("div");
    card.className = "profile-card";
    card.onclick = () =>
      window.location.href = `page1.html?openGame=${game.id}`;
    card.innerHTML = `
      <div class="profile-card-cover"
        style="background-image: url('${game.cover}')">
      </div>
      <div class="profile-card-info">
        <h3>${game.title}</h3>
        <p>${game.genre.join(", ")}</p>
        <span class="rating">⭐ ${game.rating}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function clearHistory() {  
  localStorage.removeItem(`history_${currentUser}`);
  document.getElementById("statHistory").textContent = "0"; 
  renderProfileGrid([], "profileHistoryGrid"); 
}

function updateNavAvatar(src) {
  const avatar = document.getElementById("navAvatar");
  if (avatar) avatar.src = src;
}

loadProfile(); 