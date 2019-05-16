/*
 * image-video-shadow.js
 * <fabien.dutaud@gmail.com> (https://tungu.me)
 * Released under the MIT License.
 */

var headCss =
    "@supports (-ms-ime-align: auto) { .image-shadow, .v-clone { display: none; } } @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { .image-shadow, .v-clone { display: none; } }";

var head = document.head || document.getElementsByTagName("head")[0];
var style = document.createElement("style");

style.type = "text/css";

if (style.styleSheet) {
    style.styleSheet.cssText = headCss;
} else {
    style.appendChild(document.createTextNode(headCss));
}

head.appendChild(style);

document.querySelectorAll(".ishadow").forEach(function (el) {
    el.style.position = "relative";

    var realImage = el.getElementsByTagName("img")[0];
    var imageSource = realImage.getAttribute("src");
    var shadowBox = document.createElement("div");
    var parent = realImage.parentNode;
    var blurValue = realImage.getAttribute("data-blur");
    var hoverValue = realImage.getAttribute("data-hover");

    if (realImage.hasAttribute("src")) {
        var imageSource = realImage.getAttribute("src");
    } else {
        var imageSource = realImage.getAttribute("srcset");
    }

    shadowBox.classList.add("image-shadow");
    parent.insertBefore(shadowBox, realImage.nextSibling);

    if (hoverValue === "true") {
        realImage.onmouseover = function (event) {
            shadowBox.style.left = "10%";
            shadowBox.style.bottom = "-20%";
            shadowBox.style.width = "80%";
            realImage.style.transform = "translateY(-5px)";
            realImage.style.transition = "all .4s ease";
        };

        realImage.onmouseout = function (event) {
            shadowBox.style.left = "5%";
            shadowBox.style.bottom = "-10%";
            shadowBox.style.width = "90%";
            realImage.style.transform = "translateY(0)";
        };
    }

    var styles = {
        backgroundImage: `url('${imageSource}')`,
        WebkitFilter: `blur(${blurValue}px)`,
        position: "absolute",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        bottom: "-10%",
        left: "5%",
        width: "90%",
        height: "95%",
        zIndex: "-1",
        transition: "all .4s ease"
    };

    Object.keys(styles).forEach(function (key) {
        shadowBox.style[key] = styles[key];
    });
});

document.querySelectorAll(".v-shadow").forEach(function (el) {
    el.style.position = "relative"

    var video = el.getElementsByTagName("video")[0]
    var videoClone = video.cloneNode(true)
    var videoTime = video.currentTime
    var cloneDisplay = el.querySelectorAll(".v-clone")[0]
    var blurValue = video.getAttribute("data-blur")

    cloneDisplay.appendChild(videoClone)

    videoClone.volume = 0
    videoClone.removeAttribute("controls")

    video.addEventListener("playing", event => {
        videoClone.play()
    })

    video.addEventListener("pause", event => {
        videoClone.pause()
    })

    video.addEventListener("timeupdate", event => {
        videoClone.currentTime = video.currentTime
    })

    var styles = {
        WebkitFilter: `blur(${blurValue}px)`,
        position: "absolute",
        bottom: "-10%",
        left: "5%",
        width: "90%",
        height: "95%",
        zIndex: "-1"
    }

    Object.keys(styles).forEach(function (key) {
        videoClone.style[key] = styles[key]
    })
})