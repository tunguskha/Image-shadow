
![Preview](https://raw.githubusercontent.com/tunguskha/Image-shadow/master/assets/imgs/Preview.jpg)

# Image and video shadow !

Simple and small Javascript script to display the shadow of the image!


---


### Download

```shell
$ git clone https://github.com/tunguskha/Image-shadow
```


---


### Import

Locally, choose one

```html
<!-- Image shadow only -->
<script src="assets/js/image-shadow.min.js"></script>

<!-- Video shadow only -->
<script src="assets/js/video-shadow.min.js"></script>

<!-- Both -->
<script src="assets/js/image-video-shadow.min.js"></script>


```


CDN, choose one

```html
<!-- Image shadow only -->
<script src="https://cdn.jsdelivr.net/gh/tunguskha/Image-shadow@latest/assets/js/image-shadow.min.js"></script>

<!-- Video shadow only -->
<script src="https://cdn.jsdelivr.net/gh/tunguskha/Image-shadow@latest/assets/js/video-shadow.min.js"></script>

<!-- Both -->
<script src="https://cdn.jsdelivr.net/gh/tunguskha/Image-shadow@latest/assets/js/image-video-shadow.min.js"></script>

```


---


### Use it

All you need is `.ishadow` wrapper to the image and blur value in data attribute

```html
<div class="ishadow">
  <img data-blur="20" src="your-image.jpg">
</div>
```

Also, you can make an element hoverable by adding `data-hover="true"`.

`false` by default

```html
<div class="ishadow">
  <img data-blur="20" data-hover="true" src="your-image.jpg">
</div>
```
If you use a lazy-loading script, srcset is supported.
```html
<div class="ishadow">
  <img data-blur="20" srcset="your-image.jpg">
</div>
```


---


### For video, it's a bit different
You also need a wrapper, called `.v-shadow`.
Inside, import your video, control the blur like image-shadow, and dont forget to add a `.v-clone` class.

To work well, and control the shadow at the same time that the video is played, we have to clone it, and this is where the clone will be. 

This may impact the performance of the site, which should be used with caution.

```html
<div class="v-shadow">

  <video data-blur="20" controls>
    <source src="your-video.webm">
  </video>
	
  <div class="v-clone"></div>
	
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