fetch('menu.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('menu-placeholder').innerHTML = html;

    const menuBtn = document.getElementById('menuBtn');
    const menuPanel = document.getElementById('menuPanel');
    menuBtn.addEventListener('click', () => {
      menuPanel.classList.toggle('show');
    });
  });