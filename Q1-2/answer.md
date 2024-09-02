## Explain why does this color not works, and how to fix make it work on 1st list

The only thing I know is because of render order and algorithm.

Tt can be solved by specific another property or just add `!important (BAD solution)` 

```css
.container .shop-list:first-child .item {    
    color: blue;
}
```

## Write styling make every other line give background color to next one

This question seems like want me to show different background color in different column.

```css
.container .shop-list li.item:nth-child(odd) {
    background-color: lightblue;
}

.container .shop-list li.item:nth-child(even) {
    background-color: lightgray;
}
```