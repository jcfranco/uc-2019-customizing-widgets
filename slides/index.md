<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2019/uc/bg-1.png" data-background-size="cover" -->
<!-- Presenter: Franco -->

# ArcGIS API for JavaScript

## Customizing Widgets

- Matt Driscoll – [@driskull](https://twitter.com/driskull)
- JC Franco – [@arfncode](https://twitter.com/arfncode)

---

## Agenda

- What can be customized
- Customization approaches with demos
- Q & A

---

## Customizing Widgets

- Theming
  - Custom styles (colors, sizing, font...)
- Altering presentation of a widget
  - Custom UI
- Adding additional functionality
  - Custom logic

---

## Customization Approaches

- Customizing a theme
- Customizing a widget view
- Customizing functionality

---

<!-- .slide: data-background="img/bricks/blocky.png" data-background-size="cover"  -->

<img alt="Sass" src="./img/bricks/continue.png" class="plain" />

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2019/uc/bg-3.png" data-background-size="cover" -->

<!-- Presenter: Matt -->

## Act I: Theming

<img src="img/bricks/out-of-box-themes.png" width="40%" />

---

## Why Theme?

- Match branding
- Match the map
- Contrast with the map
- User-specific requirements (e.g. bigger buttons)

<!-- .element: class="fragment" data-fragment-index="1" -->

---

## Esri Themes

`10` themes are provided out-of-the-box:

Using a theme requires only a slight update to the CSS path.

```html
<link rel="stylesheet" href="https://js.arcgis.com/4.12/esri/themes/<theme-name>/main.css" />
```

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2019/uc/bg-4.png" data-background-size="cover" -->

## Demo: Theme Switcher

<a href="../demos/out-of-the-box-themes/" target="_blank"><img src="img/bricks/out-of-box-theme-dark.png" width="40%" /></a>

<a href="../demos/out-of-the-box-themes/" target="_blank" class="external">Out-of-the-box themes</a>

---

## Theming Technology

---

We use

<a href="https://sass-lang.com/" target="_blank"><img alt="Sass" src="./img/sass-white.png" class="plain" /></a>

### to create our CSS.

<a href="https://nodejs.org/" target="_blank"><img src="img/nodejs-new-pantone-black.png" class="plain" height="80" style="margin-left:10px; margin-right: 10px;"/></a><!-- .element: class="fragment" data-fragment-index="1" -->
<a href="https://gruntjs.com/" target="_blank"><img src="img/grunt.svg" height="80" class="plain" style="margin-left:10px; margin-right: 10px;"/></a><!-- .element: class="fragment" data-fragment-index="1" -->

<small><a href="https://sass-lang.com/" target="_blank" class="external">sass-lang.com</a> | <a href="https://nodejs.org/" target="_blank" class="external">nodejs.org</a> | <a href="https://gruntjs.com/" target="_blank" class="external">gruntjs.com</a></small><!-- .element: class="fragment plain" data-fragment-index="1" -->

---

<img alt="Sass" src="./img/sass-white.png" class="plain" />

### is a powerful scripting language for compiling CSS.

- Modular
- DRY
- Makes theming easy

<!-- .element: class="fragment" data-fragment-index="1" -->

---

## Theming Steps

1. Get theme utility
1. Use the utility
1. Customize your theme
1. Host your CSS file

<!-- .element: class="fragment" data-fragment-index="1" -->

---

## Theming Setup

1. Clone the <a href="https://github.com/jcfranco/jsapi-styles" class="external" target="_blank">theme utility</a> `jsapi-styles.git`
1. Run `npm install`
1. Edit <span style="font-weight:bold;">`sass/my-theme/main.scss`</span>.
1. See <span style="font-weight:bold;">`dist/my-theme/main.css`</span>.

<!-- .element: class="fragment" data-fragment-index="1" -->

---

### Step 1

Clone the theme utility repo

<a href="https://github.com/jcfranco/jsapi-styles" target="_blank" class="external">github.com/jcfranco/jsapi-styles</a>

```bash
git clone https://github.com/jcfranco/jsapi-styles.git
```

---

### Step 2

`npm install`

- Installs the necessary bits
- Creates a sample theme directory
- Compiles the CSS from the SCSS
- Spins up a preview in your default browser

<!-- .element: class="fragment" data-fragment-index="1" -->

---

### Step 3

Edit your theme<br/>
`sass/my-theme/main.scss`

Optionally, edit your app<br/>
`preview/index.html`

<!-- .element: class="fragment" data-fragment-index="1" -->

---

### Step 4

Host your stylesheet and any relevant assets

Link your stylesheet in your app

```html
<!-- In your app: -->
<link href="path/to/your/theme/main.css" rel="stylesheet" />
```

---

## Theming Goals

Theme Smart

- Avoid adding additional CSS selectors
- Instead, use Sass to your advantage

---

## Theme Structure

Let's look at how the core theme is structured

- Color<span>: `color.scss`</span><!-- .element: class="fragment" data-fragment-index="1" -->
- Size<span>: `sizes.scss`</span><!-- .element: class="fragment" data-fragment-index="1" -->
- Type<span>: `type.scss`</span><!-- .element: class="fragment" data-fragment-index="1" -->

---

## Theme Structure

### Default

```scss
// Inside base/_color_.scss
$background-color: #fff !default;
```

Any value assignment overrides the `!default` value.

```scss
// Inside sass/my-theme/main.scss
$background-color: #1e0707;
```

But wait...there's more!<!-- .element: class="fragment" data-fragment-index="1" -->

---

## Theme Structure

Override the core color variables...

```scss
$font-color                       : #3a5fe5;
$interactive-font-color           : #ff1515;
$background-color                 : #1e0707
$button-color                     : #ff1515;
```

...then magic!<!-- .element: class="fragment" data-fragment-index="1" -->

<img src="./img/8bit/JSAPI-8bit_Magic.png" /><!-- .element: class="fragment plain" data-fragment-index="1" -->

---

## Magic

<img src="./img/8bit/JSAPI-8bit_Magic.png" class="plain"/>

Using `$button-color` we "automagically" set the hover color.

```scss
$button-color--hover: darken($button-color, 10%) !default;
// ...etc
```

<a href="https://developers.arcgis.com/javascript/latest/guide/styling/index.html#sassy-widgets" target="_blank" class="external">API Styling Guide</a>

---

## Lets make a theme

<img src="img/bricks/custom-theme.png" width="40%" />

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2019/uc/bg-4.png" data-background-size="cover"  -->

## Demo: Custom Theme

<a href="../../jsapi-styles/preview/" target="_blank" class="external">Preview Start</a> | <a href="../demos/custom-theme/STEPS.md" target="_blank" class="external">Demo Steps</a>

---

## Theming Recap

- Use the utility for easy theming.
- Theme structure
  - Color
  - Size
  - Typography
- Use the core and override values.

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2019/uc/bg-3.png" data-background-size="cover" -->

## Act II: Customizing a widget view

---

## Widget Composition

Widgets are composed of Views & ViewModels

- Logic is separate from presentation
- Reusable
- UI replacement
- Framework integration

<!-- .element: class="fragment" data-fragment-index="1" -->

---

## TypeScript

- Widgets written in TypeScript (Typed JavaScript)
- JS of the future, now <!-- .element: class="fragment" data-fragment-index="1" -->
- IDE support <!-- .element: class="fragment" data-fragment-index="2" -->
  - Visual Studio
  - WebStorm
  - Sublime
  - and more!

---

## Views

- Presentation of the Widget
- Uses ViewModel APIs to render the UI
- View-specific logic resides here
- Extends `esri/widgets/Widget`

<!-- .element: class="fragment" data-fragment-index="1" -->

---

## Widget Class

`esri/widgets/Widget`

- Provides lifecycle
- API consistency

<!-- .element: class="fragment" data-fragment-index="1" -->

---

## Widget Lifecycle

- `constructor`
- `postInitialize`
- `render`
- `destroy`

<!-- .element: class="fragment" data-fragment-index="1" -->

---

## `render`

- Defines UI
- Reacts to state
- Uses JSX
- VDOM

<!-- .element: class="fragment" data-fragment-index="1" -->

---

## Working with Views

API Exploration

- [Compass Doc](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Compass.html)
- [Compass Sample](https://developers.arcgis.com/javascript/latest/sample-code/widgets-compass-2d/index.html)

---

## Customizing a widget view

TODO: demo

---

## Compass Interface

CustomCompass widget: Same interface as the default Compass widget

```ts
interface CustomCompass {
  view: View; //MapView | SceneView
  viewModel: CompassViewModel;
  reset(): void; // CompassViewModel.reset()
}
```

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2019/uc/bg-4.png" data-background-size="cover" -->

## Demo: Customizing a widget view

[Demo Start](../demos/custom-compass-start/) | [Demo Steps](../demos/custom-compass-start/STEPS.md) | [Compass Doc](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Compass.html)

---

## Views Recap

What have we learned about Widget Views?

- Face of the widget
- Present ViewModel logic
- ViewModel separation allows framework integration or custom views
- Downloadable on API docs

<!-- .element: class="fragment" data-fragment-index="1" -->

---

## Act III: Customizing widget functionality

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2019/uc/bg-3.png" data-background-size="cover" -->

---

## Demo: Customizing functionality

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2019/uc/bg-4.png" data-background-size="cover" -->

---

## Customizing functionality Recap

- Reusable <!-- .element: class="fragment" data-fragment-index="1" -->
  - View/ViewModel <!-- .element: class="fragment" data-fragment-index="1" -->
- Same ecosystem <!-- .element: class="fragment" data-fragment-index="2" -->
  - No extra libraries <!-- .element: class="fragment" data-fragment-index="2" -->
- Extended existing widget <!-- .element: class="fragment" data-fragment-index="3" -->
  - Lifecycle <!-- .element: class="fragment" data-fragment-index="3" -->
  - TypeScript <!-- .element: class="fragment" data-fragment-index="3" -->

---

# Conclusion

- Themed by changin colors, sizing, etc.
- Altered presentation (Custom UI)
- Added additional functionality

---

## Recommended Sessions

- [ArcGIS API for JavaScript: The Road Ahead](https://userconference2019.schedule.esri.com/schedule/1105824428)
- [Building Web Apps with the ArcGIS API for JavaScript](https://userconference2019.schedule.esri.com/schedule/1991692024)

---

## Additional Resources

- [Implementing Accessor](https://developers.arcgis.com/javascript/latest/guide/implementing-accessor/index.html)
- [Setting up TypeScript](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html)
- [Widget Development](https://developers.arcgis.com/javascript/latest/guide/custom-widget/index.html)
- [JS API SDK](https://developers.arcgis.com/javascript/)

---

<!-- **please rate us** -->
<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2019/uc/bg-5.png" data-background-size="cover" -->

---

## Questions?

##### For example

🤔 Where can I find the slides/source?

👉 [esriurl.com/customwidgetsuc2019](http://esriurl.com/customwidgetsuc2019) 👈

---

## Thank You!
