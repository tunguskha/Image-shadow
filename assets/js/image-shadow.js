/*
 * shadow-image.js
 * <fabien.dutaud@gmail.com> (https://tungu.me)
 * Released under the MIT License.
 */

document.querySelectorAll(".img").forEach(function(el, index) {
	var src = el.getAttribute("src");
	var shadowElement = document.querySelectorAll(".img-shadow")[index];
	if (!shadowElement) return;
	shadowElement.style.backgroundImage = "url(" + src + ")";
  });
  