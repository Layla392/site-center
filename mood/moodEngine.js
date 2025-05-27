
function setMood(moodName) {
  const html = document.documentElement;
  html.className = '';
  html.classList.add(`mood-${moodName}`);
  localStorage.setItem('laylaMood', moodName); // lưu trạng thái mood
}

document.addEventListener("DOMContentLoaded", () => {
  const savedMood = localStorage.getItem('laylaMood');
  if (savedMood) {
    setMood(savedMood);
    const dropdown = document.querySelector('select[onchange*="setMood"]');
    if (dropdown) dropdown.value = savedMood;
  }
});
