/*
 * shadow-image.js
 * <fabien.dutaud@gmail.com> (https://tungu.me)
 * Released under the MIT License.
 */

$(".img").each(function (e) {
	var imgSrc = $(this).attr("src");

	$(".img-shadow")
		.eq(e)
		.css({
			"background-image": "url(" + imgSrc + ")"
		});
});