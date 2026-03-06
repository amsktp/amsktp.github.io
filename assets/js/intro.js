const cards = Array.from(document.querySelectorAll('.about-card[data-target]'));
const panels = Array.from(document.querySelectorAll('.detail-panel'));

function closePanels() {
  cards.forEach((card) => card.classList.remove('is-active'));
  panels.forEach((panel) => {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
  });
}

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const beforeTop = card.getBoundingClientRect().top;
    const targetId = card.getAttribute('data-target');
    const panel = targetId ? document.getElementById(targetId) : null;
    const isOpen = panel?.classList.contains('is-open');

    closePanels();

    if (!panel || isOpen) {
      return;
    }

    card.classList.add('is-active');
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    const afterTop = card.getBoundingClientRect().top;
    window.scrollBy({ top: beforeTop - afterTop, behavior: 'auto' });
  });
});
