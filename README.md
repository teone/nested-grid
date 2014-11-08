# Nested Grid

This is a responsive grid system base on: https://github.com/davist11/nested-responsive-grid

## Overview

Include all of your content in a `.container` element.

Container's sizes are:
- <768px - 100%
- 768px < 1024px - 720px; 
- 1024px < 1280px - 960px;
- >= 1280px - 1200px;

This size are defined in the container section and base on the media query breakpoint defined as:
- $screen-sm: 768px;
- $screen-md: 1024px;
- $screen-lg: 1280px;

## Sintax

Single level Grid:
```
<div class="container">
    <div class="row">
        <div class="col-1">1</div>
        <div class="col-1">1</div>
        <div class="col-1">1</div>
        <div class="col-1">1</div>
        <div class="col-1">1</div>
        <div class="col-1">1</div>
        <div class="col-1">1</div>
        <div class="col-1">1</div>
        <div class="col-1">1</div>
        <div class="col-1">1</div>
        <div class="col-1">1</div>
        <div class="col-1">1</div>
    </div>
</div>
```

Nested Grid:
```
<div class="container">
    <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-3">3</div>
                    <div class="col-3">3</div>
                </div>
            </div>
            <div class="col-6">6</div>
        </div>
</div>
```
*Important: as per this state of development two levels are the maximum supported.*

## Sample Result
!(sample.png)

## Usage
If you want to use the default style, just download the `css/grid.css` and remove or customize the _Demo Styles_ part.

If you want to customize the grid, change the colums number, gutter or breakpoint, keep in mind that this grid is processed with Grunt so:
- Clone this repo
- Run `npm install` from the root folder
- Run `grunt watch` to compile the grid every change you made to it or `grunt compass` to just compile once.

Feel free to report bug and suggestion.

If you use this, please quote me.

Thanks

Teone