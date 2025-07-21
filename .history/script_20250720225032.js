const staffMembers = [
  {
    name: "Alicia Stamper",
    title: "The top dog",
    image: "./Images/Staff Pictures/Alicia TGL Picture.jpg",
    info: "Alicia has been running The Golden Leash for over six years, and when she's not busy caring for your pups, she's baking up gourmet treats in her own doggy bakery. As the proud mom of Luke (her Hyena-like furball) and Clover (her lovable Black Lab), Alicia knows her way around a tail wag or two. When she's not running the show, you'll find her savoring a hot cup of tea, surrounded by friends and family, and enjoying a well-deserved Saturday chill session.",
  },
  {
    name: "Toni Garnica",
    title: "The partner in paws",
    image: "./Images/Staff Pictures/Toni TGL Picture.jpg",
    info: "Toni joined forces with Alicia in 2020 to make The Golden Leash the bark-tastic business it is today. She's happily married to Alec Garnica, her husband and fellow adventurer, and together they parents of : Obi (their devoted German Shepherd) and their mischievous feline sons, Po (Tuxedo Cat) and Hopper (Black Cat). Toni's all about loving her people, exploring her creative passions, and walking through life with God by her side—usually with Obi in tow.",
  },
  {
    name: "Brooke Edwards",
    title: "The Ball of Energy",
    image: "./Images/Staff Pictures/Brooke TGL Picture.jpg",
    info: "Since 2021, Brooke has been bringing boundless enthusiasm to The Golden Leash team. Happily married to her husband, Elijah, Brooke is also the proud mom of Sadie, her adorable Doodle, who's got the fluffiest tail wag around. Whether it's playing with the pups or brightening everyone's day, Brooke's energy is as contagious as Sadie's zoomies.",
  },
  {
    name: "Carolyn Lesko",
    title: "The Wildcard",
    image: "./Images/Staff Pictures/Carolyn TGL Picture.jpg",
    info: "Carolyn is the undisputed wildcard of The Golden Leash crew. Whether she's quoting tik tok meme's, playing a mean game of Gang Beasts on her days off, or keeping things exciting, Carolyn keeps us all on our toes. She's the proud mom of her dog (to be named and praised at a later date). Fun fact: Carolyn is allergic to grass and being on time.",
  },
  {
    name: "Lisa",
    title: "The Backbone of the pack",
    image: "./Images/Staff Pictures/Lisa and rip Van Winkle.png",
    info: "Lisa is the kind of hard worker who makes everything run like clockwork at The Golden Leash. With her unmatched dedication and a can-do attitude, she's the go-to person for getting things done. Whether it's caring for pups, organizing schedules, or simply being awesome, Lisa brings a level of expertise and warmth that every team dreams of having. We're lucky to have her!",
  },
];

const story = document.querySelector("#story");
const services = document.querySelector("#services");
const contact = document.querySelector("#contact");
const storySection = document.querySelector(".our-story");
const servicesSection = document.querySelector(".services");
const contactSection = document.querySelector(".contact");
const house = document.querySelector(".fa-house");
const dog = document.querySelector(".fa-dog");
const paw = document.querySelector(".fa-paw");
const bath = document.querySelector(".fa-bath");
const serviceInfo = document.querySelector(".service-info");
const boarding = document.querySelector("#boarding");
const grooming = document.querySelector("#grooming");
const walks = document.querySelector("#walks");
const daycare = document.querySelector("#daycare");
const service = document.querySelector(".services");
const staffCards = document.querySelector("#staff-cards");
const iconContainer = document.querySelectorAll(".icon-container i");

let allSections = document.querySelectorAll(".service-info");

// Loop for the list items.

// FIX THIS. Make it go to each section class.
document.querySelectorAll(".list-item").forEach((list) => {
  list.addEventListener("click", () => {
    const targetID = list.id;
    const targetSection = document.getElementById(targetID);

    if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

story.addEventListener("click", () => {
  story.scrollIntoView({ behavior: "smooth"})
})

// Loop for the icons.
iconContainer.forEach((icon) => {
  icon.addEventListener("click", () => {
    const sectionId = icon.id;

    allSections.forEach((section) => {
      section.style.display = section.id === sectionId ? "block" : "none";
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

staffMembers.forEach((person) => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerHTML = `<h2>${person.name} - ${person.title}</h2>
          <img
            src="${person.image}"
            alt="${person.name} Profile-Pic"
            class="profile-pic"
          />
          <p class="staff-info info">
            ${person.info}
          </p>`;
  staffCards.appendChild(newCard);
});
