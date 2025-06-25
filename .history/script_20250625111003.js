const house = document.querySelector(".fa-house");
const serviceInfo = document.querySelector(".service-info");
const service = document.querySelector(".services");

house.addEventListener("click", () => {
  serviceInfo.style.display = "block";
  service.scrollIntoView({ behavior: "smooth" });
});
