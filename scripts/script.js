const STORAGE_KEY = "portfolio-language";
const DEFAULT_LANG = "zh";

function applyLanguage(lang) {
  const nextLang = lang === "en" ? "en" : "zh";

  document.documentElement.lang = nextLang === "en" ? "en" : "zh-CN";
  document.querySelectorAll("[data-lang]").forEach((node) => {
    node.hidden = node.dataset.lang !== nextLang;
  });

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.textContent = nextLang === "en" ? "中文" : "EN";
    button.setAttribute(
      "aria-label",
      nextLang === "en" ? "Switch to Chinese" : "Switch to English",
    );
  });

  localStorage.setItem(STORAGE_KEY, nextLang);
}

const savedLanguage = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
applyLanguage(savedLanguage);

document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    applyLanguage(currentLanguage === "en" ? "zh" : "en");
  });
});
