const PASSWORD = "18012025"; // смени я

const lock = document.getElementById("lock");
const content = document.getElementById("content");
const input = document.getElementById("password");
const button = document.getElementById("enter");
const error = document.getElementById("error");

button.addEventListener("click", unlock);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") unlock();
});

function unlock() {
  if (input.value === PASSWORD) {
    lock.style.opacity = "0";
    setTimeout(() => {
      lock.style.display = "none";
      content.style.display = "block";
      requestAnimationFrame(() => {
        content.style.opacity = "1";
      });
    }, 1000);
  } else {
    error.style.display = "block";
  }
}
