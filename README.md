# viewport.js

移动端适配方案：通过设置`viewport`的`width`等于`设计图宽度`，再自动计算设置`viewport`的`scale`实现自动适配

css单位：`px` 无需转换

```html
<!-- width="设计图宽度"（默认750可不设置）-->
<script width="750" src="viewport.js"></script>
```

# zoom.js

移动端适配方案：通过设置 `html.style.zoom` 实现自动适配

css单位：`px`

```html
<script width="750" src="zoom.js"></script>
```

该版本在某些情况会不太理想，比如微信中长按图片时，位置偏差导致无法触发保存

# rem.js

移动端适配方案：通过设置 `html.style.fontSize` 改变`rem`相对大小实现自动适配

css单位：`rem`

```html
<script width="750" rem="100" src="rem.js"></script>
```

# vw.css

移动端适配方案：通过设置css `html{font-size: n vw}` 改变`rem`相对大小实现自动适配，使用@media向后兼容

```html
<link rel="stylesheet" type="text/css" href="vw.css">
```