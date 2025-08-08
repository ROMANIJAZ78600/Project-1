const menubtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");
const iconwrapper = document.querySelector(".icon");
const ropebtn = document.querySelector(".rope");
const icons = ["fa-seedling", "fa-egg", "fa-hotdog", "fa-stroopwafel"];
let index = 0;

menubtn.addEventListener("click", () => {
  navbar.style.display = "block";
  navbar.style.backgroundColor = "black";
  ropebtn.style.height = "100px";
});

const changeIcon = () => {
  iconwrapper.classList.remove("fade-in");
  iconwrapper.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % icons.length;
    iconwrapper.innerHTML = `<i class="fas ${icons[index]}"></i>`;
    iconwrapper.classList.remove("fade-out");
    iconwrapper.classList.add("fade-in");
  }, 1000);
};
setInterval(changeIcon, 2000);
