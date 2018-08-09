# viewport.js

移动端适配方案：

通过设置`viewport`的`width`等于`设计图宽度`，再自动计算设置`viewport`的`scale`实现自动适配

写`css`时直接写测量出的`px`单位，无需转换

然后引入该`viewport.js`，并在该`script`标签设置`width=设计图宽度`（默认750可不设置）即可

```html
<script width="750" src="viewport.js"></script>
```
