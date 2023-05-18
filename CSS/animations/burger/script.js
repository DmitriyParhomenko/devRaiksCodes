document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById("burger");

  element.addEventListener("click", () => {
    element.classList.toggle("open");
  })
})
