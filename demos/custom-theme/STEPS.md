# Theming Steps

## Styles directory structure

- `/jsapi-styles/`
  - `/dist/`: The compiled theme and assets. Copy this for your app.
  - `/preview/`: The preview application used for building a theme.
  - `/sass/`: The code! Here is where the magic and work happens.
    - `/base/`: Here is where all the core defaults and styles are defined for colors, font, widgets, etc.
    - `/examples/`: Here are the `out-of-the-box` themes you can use to modify or create your own.
    - `/my-theme/`: This is the directory setup for you to start editing your theme

## Explore directory structure

View the following files:

- `/sass/my-theme/main.scss`
- `/sass/base/_color.scss`
- `/sass/base/_type_.scss`
- ...etc

## Lets start editing our theme

Open `/jsapi-styles/sass/my-theme/main.scss`.

## Lets update our theme code

Replace all of the code in the file with the following...

```scss
/*
  Theme: Blocky McBrick Theme
*/

//  Main Colors Vars
$font-color: #fff;
// $interactive-font-color: #fff;
// $background-color: #e3000b;

// Keep this import last
@import "../base/core";
```

## Uncomment statements for changes

Uncomment the following CSS statements to see changes.

```scss
$interactive-font-color: #fff;
$background-color: #e3000b;
```

## Hover states

Add hover state variables.

```scss
// Hover
$interactive-font-color--hover: #000;
$background-color--hover: #ffed00;
$border-color--hover: #e3000b;
```

## Active states

Add active state variables.

```scss
// Active
$border-color--active: #e3000b;
$background-color--active: #ffed00;
```

## Borders

Add variables for border color and radius.

```scss
// border
$border-radius: none;
$border-color: #000;
$border-color--subtle: #fff;
```

## Buttons

Add variables for button colors.

```scss
// buttons
$button-color: #fff;
$button-color--hover: #ffed00;
$button-color--inverse: #ffed00;
```

## Font

Add a custom webfont to use for the theme and set the `font-family` SCSS variable.

```scss
// Font
@font-face {
  font-family: "lego_brixregular";
  src: url("../font/lego_brix-webfont.woff2") format("woff2"), url("../font/lego_brix-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

// Font
$font-family: "lego_brixregular", "Helvetica Neue", Helvetica, Arial, sans-serif !default;
```

## Font weight

Modify the font weight.

```scss
// Font weight
$font-weight: 600 !default;
$font-weight__heading: 600 !default;
$font-weight__bold: 600 !default;
```

## Font sizing

Modify the font size.

```scss
// Font sizing
$line-height: 1.3em !default;
$base-font-size: 18px !default;
```

## Button Sizes

Increase the button size.

```scss
// buttons
$button-width: 48px !default;
$button-height: 48px !default;
```

## Open `_mixins.scss` to change box shadow

Remove box shadow and add a border instead.

```scss
@mixin boxShadow($arguments) {
  border: 3px solid #000;
}

@mixin defaultBoxShadow() {
  border: 3px solid #000;
}

@mixin borderBoxShadow($color: $border-color) {
  border: 3px solid #000;
}

@mixin cardBoxShadow($color: $border-color) {
  border: 3px solid #000;
}
```

## Open a widget base file and modify

Open `/jsapi-styles/sass/base/widgets/_Popup.scss`

Modify the file by removing everything and reload the preview page.

Notice how all the styling layout is gone but theme is still there.

## Complete

Lets go back to slides to review Theming.
