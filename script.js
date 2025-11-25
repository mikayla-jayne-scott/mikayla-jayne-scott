const toggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "☀️ Light Mode";
} else {
  toggle.textContent = "🌙 Dark Mode";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

function goToPage(page) {
  window.location.href = page;
}

// --- Modal Script ---
const modal = document.getElementById('memberModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalAbout = document.getElementById('modalAbout');
const modalFunFact = document.getElementById('modalFunFact');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('click', () => {
    modalImg.src = '';
    modalName.textContent = '';
    modalRole.textContent = '';
    modalAbout.textContent = '';
    modalFunFact.textContent = '';

    const oldDivider = modal.querySelector('.modal-divider');
    if (oldDivider) oldDivider.remove();

    const oldExtraSection = modal.querySelector('.extra-info');
    if (oldExtraSection) oldExtraSection.remove();

    modalImg.src = card.querySelector('img').src;
    modalName.textContent = card.querySelector('h3').textContent;
    modalRole.textContent = card.querySelector('.role').textContent;
    modalAbout.textContent = card.querySelector('.about').textContent;

    const divider = document.createElement('hr');
    divider.classList.add('modal-divider');
    modalAbout.insertAdjacentElement('afterend', divider);

    const extraHTML = document.createElement('div');
    extraHTML.classList.add('extra-info');
    extraHTML.innerHTML = `
      <p><strong>Years on Team:</strong> ${card.dataset.years || '—'}</p>
      <p><strong>Favorite Part of Robotics:</strong> ${card.dataset.favorite || '—'}</p>
      <p><strong>Favorite Memory:</strong> ${card.dataset.memory || '—'}</p>
      <p><strong>Fun Fact:</strong> ${card.dataset.fun || '—'}</p>
    `;

    modalFunFact.insertAdjacentElement('afterend', extraHTML);
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.onclick = e => {
  if (e.target === modal) modal.style.display = 'none';
};