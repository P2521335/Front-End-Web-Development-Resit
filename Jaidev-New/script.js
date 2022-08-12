const nav = document.querySelector(".nav");

const fixNav = () => {
  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");
  else nav.classList.remove("active");
};

window.addEventListener("scroll", fixNav);


for (const img of document.querySelectorAll("img")) {
	img.addEventListener('click', ev => {
		img.classList.toggle("active");
	})
}

function showMenu() {
	document.getElementById("mobile-menu").style.display = "block";
}

function hideMenu() {
	document.getElementById("mobile-menu").style.display = "none";
}
