const house = document.querySelector(".fa-house");
const serviceInfo = document.querySelector(".service-info");

house.addEventListener("click", () => {
  serviceInfo.style.display = "block";
  serviceInfo.scrollIntoView({ behavior: "smooth" });
});
