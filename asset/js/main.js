const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".Navbar_ul");

hamburger.addEventListener('click', ()=> {
	navbar.classList.toggle("open")
});

const loading = document.querySelector(".loading");
const loadings = document.querySelector(".loading_style");

setTimeout(function() {
	loading.style.display = 'none';
	loadings.style.display = 'none'
}, 2500)
const sun = document.querySelector(".sun");

sun.addEventListener('click', () => {
	const sun1 = document.querySelector(".sun")
	sun1.style.backgroundImage = "url('./public/img/moon.svg')"
})

const title = document.querySelector(".title");

setInterval(()=> {
	title.style.color = 'orange'
	setTimeout(() => {
		title.style.color = 'blue'
	}, 1000)
}, 2000)

const light = document.querySelector("#light");
const main = document.querySelector(".main")
light.addEventListener("click", function () {
	main.classList.toggle("mainlight")
})

const button1 = document.getElementById('button1')
button1.addEventListener("click", () => {
	const url = "https://prjipasmie.vercel.app/";
	window.open(url, "blank")
})
const button2 = document.getElementById('button2')
button2.addEventListener("click", () => {
	const url = "https://webstemsago.vercel.app/";
	window.open(url, "blank")
})

