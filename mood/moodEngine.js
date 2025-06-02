const fontMap = {
  "Arial":             { family: "'Arial', sans-serif", size: "16px" },
  "Dancing Script":    { family: "'Dancing Script', cursive", size: "17px" },
  "Great Vibes":       { family: "'Great Vibes', cursive", size: "17.2px" },
  "UnifrakturCook":    { family: "'UnifrakturCook', cursive", size: "18px" },
  "Press Start 2P":    { family: "'Press Start 2P', monospace", size: "12.5px" },
  "Cormorant Garamond":{ family: "'Cormorant Garamond', serif", size: "16.5px" },
  "Share Tech Mono":   { family: "'Share Tech Mono', monospace", size: "15.5px" }
};

const moodMap = {
  demo: "Arial",
  tuesday: "Dancing Script",
  tuesday: "Great Vibes",
  tay-tắm-máu: "UnifrakturCook",
  pixel: "Press Start 2P",
  tay-tắm-máu: "Cormorant Garamond",
  demo-2: "Share Tech Mono"
};

function setMood(moodName) {
  const html = document.documentElement;
  html.className = '';
  html.classList.add(`mood-${moodName}`);
  localStorage.setItem('laylaMood', moodName);

  const fontName = moodMap[moodName] || "Arial";
  const config = fontMap[fontName] || { family: "Arial, sans-serif", size: "16px" };

  document.body.style.fontFamily = config.family;
  document.body.style.fontSize = config.size;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedMood = localStorage.getItem('laylaMood');
  if (savedMood) {
    setMood(savedMood);
    const dropdown = document.querySelector('select[onchange*="setMood"]');
    if (dropdown) dropdown.value = savedMood;
  }
});
