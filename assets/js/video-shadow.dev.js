document.querySelectorAll('.vshadow').forEach(function (el) {
	el.style.position = 'relative';
	const realVideo = el.getElementsByTagName('video')[0];
	const videoSource = realVideo.getAttribute('src');
	const shadowBox = document.createElement('video');
	const parent = realVideo.parentNode;

	const blurValue = realVideo.getAttribute('data-blur');
	const autoplayValue = realVideo.getAttribute('data-autoplay');
	const loopValue = realVideo.getAttribute('data-loop');

	parent.insertBefore(shadowBox, realVideo.nextSibling);

  // shadowBox.classList.add('video-shadow');
	shadowBox.setAttribute("src", videoSource);
	shadowBox.loop = loopValue;
	shadowBox.autoplay = autoplayValue;

	const styles = {
    WebkitFilter: `blur(${blurValue}px)`,
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    bottom: '-10%',
    left: '5%',
    width: '90%',
    height: '95%',
    zIndex: '-1',
		maxWidth: '100%',
  };

	Object.keys(styles).forEach(function (key) {
		shadowBox.style[key] = styles[key];
	});
});
