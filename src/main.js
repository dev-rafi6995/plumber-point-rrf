import "./style.css";
const harberger_btn = document.getElementById("hamberger_btn");
const header_menu = document.getElementById("header_menu");
harberger_btn.addEventListener("click", () => {
	header_menu.classList.toggle("hidden");
});
