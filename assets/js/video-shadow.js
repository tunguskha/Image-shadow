/*
 * video-shadow.js
 * <fabien.dutaud@gmail.com> (https://tungu.me)
 * Released under the MIT License.
 */

var headCss = "@supports (-ms-ime-align: auto) { .v-clone { display: none; } } @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { .v-clone { display: none; } }";

var head = document.head || document.getElementsByTagName("head")[0];
var style = document.createElement("style");

style.type = "text/css";

if (style.styleSheet) {
    style.styleSheet.cssText = headCss;
} else {
    style.appendChild(document.createTextNode(headCss));
}

head.appendChild(style);

document.querySelectorAll(".v-shadow").forEach(function (el) {
    el.style.position = "relative";

    var video = el.getElementsByTagName("video")[0];
    var videoClone = video.cloneNode(true);
    var videoTime = video.currentTime;
    var cloneDisplay = el.querySelectorAll(".v-clone")[0];
    var blurValue = video.getAttribute("data-blur");

    cloneDisplay.appendChild(videoClone);

    videoClone.volume = 0;
    videoClone.removeAttribute("controls");

    video.addEventListener("playing", event => {
        videoClone.play();
    });

    video.addEventListener("pause", event => {
        videoClone.pause();
    });

    video.addEventListener("timeupdate", event => {
        videoClone.currentTime = video.currentTime;
    });

    var styles = {
        WebkitFilter: `blur(${blurValue}px)`,
        position: "absolute",
        bottom: "-10%",
        left: "5%",
        width: "90%",
        height: "95%",
        zIndex: "-1"
    };

    Object.keys(styles).forEach(function (key) {
        videoClone.style[key] = styles[key];
    });
});