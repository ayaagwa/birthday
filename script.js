const runBtn = document.getElementById("runBtn");
const loading = document.getElementById("loading");
const greeting = document.getElementById("greeting");

const percent = document.getElementById("percent");
const progressBar = document.getElementById("progressBar");
const loadingText = document.getElementById("loadingText");

function show(el) {
  el.classList.remove("hidden");
  el.classList.add("show");

  setTimeout(() => {
    el.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 100);
}

function startProgram() {
  runBtn.disabled = true;
  runBtn.textContent = "▶ RUNNING...";

  show(loading);

  let n = 0;

  const timer = setInterval(() => {
    n += 2;

    percent.textContent = n + "%";
    progressBar.style.width = n + "%";

    if (n >= 35) {
      loadingText.textContent = "> Loading memories...";
    }

    if (n >= 70) {
      loadingText.textContent = "> Preparing your surprise...";
    }

    if (n >= 100) {
      clearInterval(timer);

      loadingText.textContent = "> Done! Opening message...";

      setTimeout(() => {
        show(greeting);
      }, 700);
    }
  }, 45);
}

runBtn.addEventListener("click", startProgram);
