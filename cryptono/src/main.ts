// main.ts
import './styles/App.css'

async function loadView(file: string) {
  const html = await fetch(chrome.runtime.getURL(file)).then(res => res.text())
  document.getElementById("app")!.innerHTML = new DOMParser()
    .parseFromString(html, "text/html")
    .body.innerHTML
}

// Router logic
function navigate(to: string) {
  loadView(`${to}.html`)
}

// on Startup
navigate("login")

// Link events
document.addEventListener("click", (e) => {
  const link = (e.target as HTMLElement).dataset["nav"]
  if (link) navigate(link)
})
