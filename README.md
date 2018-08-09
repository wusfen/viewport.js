# viewport.js

移动端适配方案：通过设置`viewport`的`width`等于`设计图宽度`，再自动计算设置`viewport`的`scale`实现自动适配

css单位：`px` 无需转换

直接引入并在该`script`标签设置`width="设计图宽度"`（默认750可不设置）即可

```html
<script width="750" src="viewport.js"></script>
```

# zoom.js

移动端适配方案：通过设置 `html.style.zoom` 实现自动适配

css单位：`px`

```html
<script width="750" src="zoom.js"></script>
```

该版本在某些情况会不太理想，比如微信中长按图片时，位置偏差导致无法触发保存

# rem, vw

https://github.com/wusfen/rem
