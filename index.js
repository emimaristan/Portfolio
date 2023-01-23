function scrollToAbout() {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
}
function scrollToKnowledges() {
  document.querySelector("#knowledges").scrollIntoView({ behavior: "smooth" });
}
function scrollToProjects() {
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
}
function scrollToContact() {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}
function scrollToTop() {
  document.querySelector("#content").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".spinner-download");
  setTimeout(() => {
    loader.classList.remove("spinner-download");
    loader.classList.add("spinner-download-hidden");
  }, 2000);
});
