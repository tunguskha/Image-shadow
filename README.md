![Preview](https://raw.githubusercontent.com/tunguskha/Image-shadow/master/assets/imgs/Preview.jpg)
# Image shadow !

Simple and small Javascript plugin to display the shadow of the image!

---

### Download Shadow-image
```
$ git clone https://github.com/tunguskha/Image-shadow
```

---

### Import
```html
<script src="assets/js/image-shadow.js"></script>
```

---

### Use it
All you need is .ishadow wrapper to the image and blur value in data attribute
```html
<div class="ishadow">
  <img class="img" data-blur="20" src="assets/imgs/halt-and-catch-fire.jpg">
</div>
```

### Use it for video
Same as a image, add .vshadow wrapper, and control autoplay and loop in data-attribute.
NOTE: I currently work for video support, it works but it's not the best solution.
```html
<div class="vshadow">
  <video
    autoplay preload loop
    data-autoplay="true" data-loop="true" data-blur="15"
    src="assets/videos/video-1.mp4" type="video/mp4"></video>
</div>
```

---

### Support
| IE | Edge| Firefox | Chrome | Safari | Opera |
|:-:|:--:|:-:|:-:|:-:|:-:|
|:x:| :x: |:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|

---

### See it live
[Image-shadow](https://tunguskha.github.io/Image-shadow/)
