export default function darkModeToggle() {
  const btnThemeToggle = document.getElementById("btn-theme-toggle")
  const root = document.querySelector("html")
  const themeItems = []

  const LOCAL_STORAGE_PREFIX = "DARKMODE-TOGGLE-JOBS-github"
  const DARKMODE_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-theme`

  btnThemeToggle.addEventListener("click", (e) => {
    root.classList.toggle("dark-theme")

    const rootClass = root.getAttribute("class")

    const btnPressed = e.target.getAttribute("aria-pressed") === "true"
    e.target.setAttribute("aria-pressed", String(!btnPressed))

    themeItems.push(rootClass, !btnPressed)

    localStorage.setItem(DARKMODE_STORAGE_KEY, JSON.stringify(themeItems))

    themeItems.length = 0
  })

  const setTheme = function () {
    const activeTheme = JSON.parse(
      localStorage.getItem(DARKMODE_STORAGE_KEY)
    ) || ["", "false"]
    root.className = activeTheme[0]
    btnThemeToggle.setAttribute("aria-pressed", String(activeTheme[1]))
  }
  setTheme()
}
