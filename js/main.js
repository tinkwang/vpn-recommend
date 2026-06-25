function randomWeight(max) {
  return Math.round(Math.random() * max);
}

function shuffleByWeight(items) {
  return items
    .map((item) => ({
      ...item,
      sortKey: randomWeight(item.weight || 50),
    }))
    .sort((a, b) => b.sortKey - a.sortKey);
}

function encodeUrl(url) {
  return btoa(url);
}

function openLink(encoded, newTab) {
  const url = atob(encoded);
  if (newTab) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = url;
  }
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderProviders() {
  const list = document.getElementById("provider-list");
  const sorted = shuffleByWeight(SITE_CONFIG.providers);

  list.innerHTML = sorted
    .map((item, index) => {
      const encoded = encodeUrl(item.url);
      const badge = item.badge
        ? `<span class="badge badge-${item.badge === "推荐" ? "primary" : "hot"}">${escapeHtml(item.badge)}</span>`
        : "";

      return `
        <li class="provider-card" style="animation-delay: ${index * 0.05}s">
          <div class="provider-header">
            <span class="provider-rank">#${index + 1}</span>
            <h3 class="provider-name">${escapeHtml(item.name)}</h3>
            ${badge}
          </div>
          <p class="provider-desc">${item.desp}</p>
          <div class="provider-actions">
            <button class="btn btn-primary" onclick="openLink('${encoded}', true)">
              新窗口打开
            </button>
            <button class="btn btn-secondary" onclick="openLink('${encoded}', false)">
              本页跳转
            </button>
          </div>
        </li>
      `;
    })
    .join("");
}

function renderClients() {
  const list = document.getElementById("client-list");
  list.innerHTML = SITE_CONFIG.clients
    .map(
      (item) => `
        <li class="client-item">
          <div class="client-info">
            <strong>${escapeHtml(item.name)}</strong>
            <span class="client-platform">${escapeHtml(item.platform)}</span>
          </div>
          <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            下载
          </a>
        </li>
      `
    )
    .join("");
}

function initSite() {
  document.title = SITE_CONFIG.title;
  document.getElementById("site-title").textContent = SITE_CONFIG.title;
  document.getElementById("site-subtitle").textContent = SITE_CONFIG.subtitle;
  document.getElementById("site-disclaimer").textContent = SITE_CONFIG.disclaimer;

  const { contact } = SITE_CONFIG;
  document.getElementById("contact-email").href = `mailto:${contact.email}`;
  document.getElementById("contact-email").textContent = contact.email;
  document.getElementById("contact-tg-group").href = contact.telegramGroup;
  document.getElementById("contact-tg-group").textContent = contact.telegramGroup;
  document.getElementById("contact-tg-channel").href = contact.telegramChannel;
  document.getElementById("contact-tg-channel").textContent = contact.telegramChannel;

  renderProviders();
  renderClients();
}

window.openLink = openLink;
window.addEventListener("DOMContentLoaded", initSite);