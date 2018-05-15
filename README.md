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

### Use it
All you need is .ishadow wrapper to the image and blur value in data attribute
```html
<div class="ishadow">
  <img class="img" data-blur="20" src="assets/imgs/halt-and-catch-fire.jpg">
</div>
```

---

### Support
| IE | Edge| Firefox | Chrome | Safari | Opera |
|:-:|:--:|:-:|:-:|:-:|:-:|
|:x:| :x: |:heavy_check_mark:|:heavy_check_mark:|:question:|:heavy_check_mark:|

**For Edge Support 17+**

*ATTENTION: Does not work on Edge 16- and display the shadow as a real image.*

```css
@supports (-ms-ime-align: auto) {
  img {
    position: relative;
    z-index: 1;
  }
  .img-shadow {
    display: block;
    z-index: 0!important;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
}
```

---

### See it live
[Image-shadow](https://tunguskha.github.io/Image-shadow/)

