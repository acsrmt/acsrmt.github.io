document.addEventListener("DOMContentLoaded", function() {
	var toggle = true;
  document.querySelector(".main-nav__button").addEventListener("click", function() {
		if (toggle) {
    	document.querySelector(".main-nav__menu").classList.add("toggle-menu");
			toggle = false;
		}
		else {
			document.querySelector(".main-nav__menu").classList.remove("toggle-menu");
			toggle = true;
		}
  });
  window.addEventListener("resize", function() {
    if (document.documentElement.clientWidth > 640) {
      document.querySelector(".main-nav__menu").classList.remove("toggle-menu");
    }
  });
});
