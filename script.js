const runBtn = document.getElementById("runBtn");
const loading = document.getElementById("loading");
const greeting = document.getElementById("greeting");
const final = document.getElementById("final");

const percent = document.getElementById("percent");
const progressBar = document.getElementById("progressBar");
const loadingText = document.getElementById("loadingText");

const closeBtn = document.getElementById("closeBtn");

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


// تشغيل البرنامج
runBtn.addEventListener("click", startProgram);


// زرار CLOSE
if (closeBtn) {
  closeBtn.addEventListener("click", () => {

    if (window.history.length > 1) {
      window.history.back();
    } else {

      document.body.innerHTML = `
        <div style="
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-family: Cairo, sans-serif;
          background: #0b0b14;
          color: white;
          padding: 20px;
        ">
          <div>
            <h1>Thanks for being here ❤️</h1>
            <p>See you soon 🌚♥️</p>
          </div>
        </div>
      `;

    }

  });
}
