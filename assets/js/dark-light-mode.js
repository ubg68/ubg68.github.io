console.log(localStorage.getItem('darkMode'));
if (localStorage.getItem('darkMode') === "on") {
		document.body.classList.add("dark");
		document.addEventListener("DOMContentLoaded", function() {
		  document.querySelector('.js-switch-theme input').checked = true;
		});
}
