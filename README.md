# viewport.js

移动端适配方案：通过设置`viewport`的`width`等于`设计图宽度`，再自动计算`viewport`的`scale`实现自动适配

css单位：`px` 无需转换

```html
<!-- width="设计图宽度"（默认750可不设置） max="最大显示宽度"（默认等于设计图宽度） -->
<script width="750" max="750" src="viewport.js"></script>
```

该版本不能和第三方以px为单位css框架共存，因为缩小之后，第三方框架的样式也被缩小了

# zoom.js

移动端适配方案：通过计算设置 `html.style.zoom` 实现自动适配

css单位：`px`

```html
<script width="750" max="750" src="zoom.js"></script>
```

该版本在某些情况会不太理想，比如微信中长按图片时，位置偏差导致无法触发保存

# rem.js

移动端适配方案：通过计算设置 `html.style.fontSize` 改变`rem`相对大小实现自动适配

css单位：`rem`

```html
<script width="750" max="750" rem="100" src="rem.js"></script>
```

# vw.css

移动端适配方案：通过设置css `html{font-size: n vw}` 改变`rem`相对大小实现自动适配，使用`@media`向后兼容

css单位：`rem`

```html
<link rel="stylesheet" type="text/css" href="vw.css">
```
