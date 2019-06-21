<!-- .slide: data-background="img/bg-1.png" -->
<!-- Presenter: Matt -->

# ArcGIS API for JavaScript: Customizing Widgets

### Matt Driscoll – [@driskull](https://twitter.com/driskull)

### JC Franco – [@arfncode](https://twitter.com/arfncode)

---

# Agenda

- What can be customized
- Customization approaches with demos
- Q & A

---

# What we mean by customizing

- Theming
  - Changing styles: colors, sizing, font, etc.
- Altering presentation of a widget
  - Custom UI
- Adding additional functionality

---

# Customization Approaches

- Authoring a theme <!-- .element: class="fragment" data-fragment-index="1" -->
- Recreating a view <!-- .element: class="fragment" data-fragment-index="2" -->
- Extending a view <!-- .element: class="fragment" data-fragment-index="3" -->

---

![continue](./img/8bit/8-BIT-continue-1366.png)

---

<!-- Presenter: Alan -->
<h1 class="eight-bit">Level I</h1>

![Level 1](./img/8bit/JSAPI-8bit_Level-1.png)

<h2 class="eight-bit">Theming</h2>

<!-- .slide: data-background="img/bg-4.png" -->

---

# Level I: Theming

## Why Theme? <!-- .element: class="fragment" data-fragment-index="0" -->

- Match branding. <!-- .element: class="fragment" data-fragment-index="1" -->
- Match the map. <!-- .element: class="fragment" data-fragment-index="2" -->
- Contrast with the map. <!-- .element: class="fragment" data-fragment-index="3" -->
- Based on the environment. <!-- .element: class="fragment" data-fragment-index="4" -->
- User-specific (e.g. bigger buttons) <!-- .element: class="fragment" data-fragment-index="5" -->

---

# Theming Technology

---

We use

![Sass](img/sass-white.png)

### to create our CSS.

<img src="img/nodejs-new-pantone-black.png" height="80" style="margin-left:10px; margin-right: 10px;"/><!-- .element: class="fragment" data-fragment-index="1" -->
<img src="img/grunt.svg" height="80" style="margin-left:10px; margin-right: 10px;"/><!-- .element: class="fragment" data-fragment-index="1" -->

<small><a href="https://nodejs.org/">nodejs.org</a> | <a href="https://gruntjs.com/">gruntjs.com</a></small><!-- .element: class="fragment" data-fragment-index="1" -->

---

![Sass](img/sass-white.png)

### is a powerful scripting language for compiling CSS.

- It's modular. <!-- .element: class="fragment" data-fragment-index="1" -->
- It's DRY. <!-- .element: class="fragment" data-fragment-index="2" -->
- It makes theming easy. <!-- .element: class="fragment" data-fragment-index="3" -->

---

<h3 style="font-family:monospace;text-transform:uppercase;">Previously on Theming</h3>
<span style="font-family:monospace;text-transform:uppercase;">Life was hard.</span> <!-- .element: class="fragment" data-fragment-index="1" -->

---

Before, you needed to

1.  Pull down the API <a href="https://github.com/Esri/arcgis-js-api/tree/4master">(arcgis-js-api)</a>.
1.  Create a theme directory in the right place.
1.  Create a Sass file.
1.  Import the core file.
1.  Run the compiler.
1.  Wonder if there were an easier way. <!-- .element: class="fragment" data-fragment-index="1" -->

---

# There is an easier way!

<ol>
  <li class="fragment">Get our theme utility.</li>
  <li class="fragment">Use the utility.</li>
  <li class="fragment">Customize your theme.</li>
  <li class="fragment">Then magic.<br/><img src="img/8bit/JSAPI-8bit_Magic.png" style="margin: 0;"/></li>
</ol>

<div style="visibility:hidden;">You won't need the base stylesheet.</div>

---

# There is an easier way!

<ol>
  <li>Clone the utility `jsapi-styles.git`</li>
  <li>Run `npm install`</li>
  <li>Edit <span style="font-weight:bold;">`sass/my-theme/main.scss`</span>.</li>
  <li>See <span style="font-weight:bold;">`dist/my-theme/main.css`</span>.<br/><img src="img/8bit/JSAPI-8bit_Magic.png" style="margin: 0;"/></li>
</ol>
<div class="fragment">You won't need the base stylesheet.</div>

---

# Step 1

Clone the repo.<br/>
<a href="https://github.com/jcfranco/jsapi-styles" target="_blank">https://github.com/jcfranco/jsapi-styles</a>

<div>
```
git clone https://github.com/jcfranco/interactive-design.git
```
</div><!-- .element: class="fragment" data-fragment-index="1" -->

---

# Step 2

`npm install`

<div>
  - Installs the necessary bits.
  - Creates a sample theme directory.
  - Compiles the CSS from the SCSS.
  - Spins up a preview in your default browser.
</div><!-- .element: class="fragment" data-fragment-index="1" -->

---

# Step 3

Edit your theme.<br/>
`sass/my-theme/main.scss`

<div>
Optionally, edit your app.<br/>
`preview/index.html`
</div><!-- .element: class="fragment" data-fragment-index="1" -->

---

# Step 4

Host your stylesheet and any relevant assets.

Link your stylesheet in your app.

```
<!-- In your app: -->
<link href="path/to/your/theme/main.css" rel="stylesheet">
```

---

# Let's have a look!

---

# Theme Smart

Avoid adding additional CSS selectors.<br/>
Instead, use Sass to your advantage.<br/>
<span>Let's look at how the core theme is structured.</span><!-- .element: class="fragment" data-fragment-index="1" -->

---

# Theme Structure

- Color <span>: `colorVariables.scss`</span><!-- .element: class="fragment" data-fragment-index="1" -->
- Size <span>: `sizes.scss`</span><!-- .element: class="fragment" data-fragment-index="1" -->
- Type <span>: `type.scss`</span><!-- .element: class="fragment" data-fragment-index="1" -->

---

# Theme Structure

### Default

```
// Inside base/_colorVariables.scss
$background_color : #fff !default ;
```

Any value assignment overrides the `!default` value.

```
// Inside sass/my-theme/main.scss
$background_color : #cc4b09;
```

---

# So let's make a theme!

<!-- .slide: data-background="img/bg-5.png" -->

---

# Level I: Theming Recap

- Use the utility for easy theming. <!-- .element: class="fragment" data-fragment-index="1" -->
- Theme structure <!-- .element: class="fragment" data-fragment-index="2" -->
  - Color <!-- .element: class="fragment" data-fragment-index="2" -->
  - Size <!-- .element: class="fragment" data-fragment-index="2" -->
  - Typography <!-- .element: class="fragment" data-fragment-index="2" -->
- Use the core and override values. <!-- .element: class="fragment" data-fragment-index="3" -->

---

<!-- LEVEL UP A -->
<h1 class="eight-bit">LEVEL UP!</h1>

![Level 1](./img/8bit/JSAPI-8bit_Level-1.png)

<h2 class="eight-bit">Ready?</h2>

<!-- .slide: data-background="img/bg-4.png" -->

---

<!-- LEVEL UP B -->
<h1 class="eight-bit">LEVEL II</h1>

![Level 2](./img/8bit/JSAPI-8bit_Level-2.png)

<h2 class="eight-bit">Views</h2>

<!-- .slide: data-background="img/bg-4.png" -->

---

<!-- Presenter: Matt -->

# Level II: Widget Composition

Widgets are composed of Views & ViewModels <!-- .element: class="fragment" data-fragment-index="1" -->

- Benefits of View/ViewModel <!-- .element: class="fragment" data-fragment-index="2" -->
  - Reusable
  - UI replacement
  - Framework integration

---

# Level II: Views

- Presentation of the Widget <!-- .element: class="fragment" data-fragment-index="1" -->
- Uses ViewModel APIs to render the UI <!-- .element: class="fragment" data-fragment-index="1" -->
- View-specific logic resides here <!-- .element: class="fragment" data-fragment-index="1" -->

---

# Level II: Working with Views

API Exploration

- [Locate Doc](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Locate.html)
- [Locate Sample](https://developers.arcgis.com/javascript/latest/sample-code/widgets-locate/index.html)

---

# Level II: `LocateViewModel`

Overview of `LocateViewModel`

```ts
interface LocateViewModel {
  readonly state: string;
  locate(): IPromise<Object>;
  graphic?: Graphic;
  scale?: number;
  view?: MapView | SceneView;
}
```

---

# Demo: Customize widget View

Lets create a custom widget view.

- [Demo Complete](../demos/mario-locate-complete/)
- [Demo Steps](../demos/mario-locate-start/STEPS.md)
- [Demo Start](../demos/mario-locate-start/)

[![Level 2 demo](img/level2demo.png)](../demos/mario-locate-complete/)

<!-- .slide: data-background="img/bg-5.png" -->

---

# Level II: Views Recap

What have we learned about Widget Views?

- Face of the widget
- Present ViewModel logic
- ViewModel separation allows framework integration or custom views
- Views downloadable on API doc pages

---

<!-- LEVEL UP A -->
<h1 class="eight-bit">LEVEL UP!</h1>

![Level 2](./img/8bit/JSAPI-8bit_Level-2.png)

<h2 class="eight-bit">Ready?</h2>

<!-- .slide: data-background="img/bg-4.png" -->

---

<!-- LEVEL UP B -->
<h1 class="eight-bit">LEVEL III</h1>

![Level 3](./img/8bit/JSAPI-8bit_Level-3.png)

<h2 class="eight-bit">Extending a View</h2>

<!-- .slide: data-background="img/bg-4.png" -->

---

<!-- Presenter: JC -->

# Level III: Extending a View

- Why? <!-- .element: class="fragment" data-fragment-index="1" -->
  - Reusable <!-- .element: class="fragment" data-fragment-index="2" -->
  - Same ecosystem <!-- .element: class="fragment" data-fragment-index="3" -->
- How? <!-- .element: class="fragment" data-fragment-index="4" -->
  - JS API v4.8 <!-- .element: class="fragment" data-fragment-index="5" -->
  - <!-- .element: class="fragment" data-fragment-index="5" --> `esri/widgets/Widget`
  - TypeScript <!-- .element: class="fragment" data-fragment-index="5" -->

---

`esri/widgets/Widget`

- Provides lifecycle <!-- .element: class="fragment" data-fragment-index="1" -->
- API consistency <!-- .element: class="fragment" data-fragment-index="2" -->

---

# Lifecycle

- <!-- .element: class="fragment" data-fragment-index="1" --> `constructor`
- <!-- .element: class="fragment" data-fragment-index="2" --> `postInitialize`
- <!-- .element: class="fragment" data-fragment-index="3" --> `render`
- <!-- .element: class="fragment" data-fragment-index="4" --> `destroy`

---

# `render`

- Defines UI <!-- .element: class="fragment" data-fragment-index="1" -->
- Reacts to state <!-- .element: class="fragment" data-fragment-index="2" -->
- Uses JSX <!-- .element: class="fragment" data-fragment-index="3" -->
- VDOM <!-- .element: class="fragment" data-fragment-index="4" -->

---

# TypeScript

- Typed JavaScript <!-- .element: class="fragment" data-fragment-index="1" -->
- JS of the future, now <!-- .element: class="fragment" data-fragment-index="2" -->
- IDE support <!-- .element: class="fragment" data-fragment-index="3" -->
  - Visual Studio <!-- .element: class="fragment" data-fragment-index="3" -->
  - WebStorm <!-- .element: class="fragment" data-fragment-index="3" -->
  - Sublime <!-- .element: class="fragment" data-fragment-index="3" -->
  - and more! <!-- .element: class="fragment" data-fragment-index="3" -->

---

# Demo: Extending a View

[Demo](https://jcfranco.github.io/uc-2019-customizing-widgets/demos/custom-bookmarks-end/)
|
[Steps](https://github.com/jcfranco/uc-2019-customizing-widgets/blob/master/demos/custom-bookmarks-start/STEPS.md)

<img src="img/demo-extending-view.png" width="50%"/>

<!-- .slide: data-background="img/bg-5.png" -->

---

# Level III: Extending a View Recap

- Reusable <!-- .element: class="fragment" data-fragment-index="1" -->
  - View/ViewModel <!-- .element: class="fragment" data-fragment-index="1" -->
- Same ecosystem <!-- .element: class="fragment" data-fragment-index="2" -->
  - No extra libraries <!-- .element: class="fragment" data-fragment-index="2" -->
- Extended existing widget <!-- .element: class="fragment" data-fragment-index="3" -->
  - Lifecycle <!-- .element: class="fragment" data-fragment-index="3" -->
  - TypeScript <!-- .element: class="fragment" data-fragment-index="3" -->

---

<!-- LEVEL UP A -->
<h1 class="eight-bit">LEVEL UP!</h1>

![Level 3](./img/8bit/JSAPI-8bit_Level-3.png)

<h2 class="eight-bit">Ready?</h2>

<!-- .slide: data-background="img/bg-4.png" -->

---

<!-- LEVEL UP B -->
<h1 class="eight-bit">LEVEL IV</h1>

![Level 4](./img/8bit/JSAPI-8bit_Level-4-ani.gif)

<h2 class="eight-bit">Put it all together.</h2>

<!-- .slide: data-background="img/bg-4.png" -->

---

# Conclusion

- Authored a theme <!-- .element: class="fragment" data-fragment-index="1" -->
- Recreated a view <!-- .element: class="fragment" data-fragment-index="2" -->
- Extended a view <!-- .element: class="fragment" data-fragment-index="3" -->

---

## Additional Resources

- [Implementing Accessor](https://developers.arcgis.com/javascript/latest/guide/implementing-accessor/index.html)
- [Setting up TypeScript](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html)
- [Widget Development](https://developers.arcgis.com/javascript/latest/guide/custom-widget/index.html)
- [JS API SDK](https://developers.arcgis.com/javascript/)

---

<!-- **please rate us** -->
<!-- .slide: data-background="img/uc18-survey.png" -->

---

# Questions?

##### For example

> 🤔 Where can I find the slides/source?

👉 [esriurl.com/customwidgetsuc2019](http://esriurl.com/customwidgetsuc2019) 👈

---

<!-- .slide: data-background="img/bg-final.png" -->
