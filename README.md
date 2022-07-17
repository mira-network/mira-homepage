# Mira Network Homepage. Based on 11ty-bs5-starter

## Logg
1. Fork @THoenig\ till @mira-network\mira-homepage
1. Med VS Code, clone till lokal katalog
1. NPM install
1. testkör lokalt: NPM start.
1. Uppdaterar readme.md
1. Förbereder deploy till Azure
    - ändrar output till _dist
    - tar bort markdown-it
1. Sätter upp deploy till Azure Static Web App. Se https://squalr.us/2021/05/deploying-an-11ty-site-to-azure-static-web-apps/
    - varnar för fsevents@2.3.2
    - Kör npx browserslist@latest --update-db
1. Sätt upp fixa _includes, minimal index.njk, simple.njk
1. Första version av startsida
1. Back to top https://mdbootstrap.com/docs/standard/extended/back-to-top/
    - knapp i navigation-main
    - script (fanns sedan tidigare commit)
    - CSS i main.scss
1. Font awesome
    - npm install @fortawesome/fontawesome-free
    - lägg till i main.scss
1. titillium web, pt sans
    - Lyckas inte lägga till med @import, använder <link>
1. Slick slider. Se https://kenwheeler.github.io/slick/
    - npm i jquery
    - npm i slick-carousel
    - länkar in från mira.njk, bör flytta till SASS/parcel.
1. Solutions som featurettes. https://getbootstrap.com/docs/5.2/examples/carousel/
    - 
1. Navigering som navbar. https://getbootstrap.com/docs/5.2/components/navbar/
    
## Plan / todo
- Fixa så länkar rätt till logo från simple
- Test pages 
- hämta in blogartiklar från WordPress. https://getbootstrap.com/docs/5.2/examples/album/
- ScrollSpy för navigering https://getbootstrap.com/docs/5.2/components/scrollspy/
- AOS. Eller? Känns inte lika snabb?
- Slå ihop navigeringsalternativ. Drop downs?
    - Solutions & Features
    - Professional services & Support & Blog/articles
    - About & Careers
    

# 11ty-bs5-starter

Bootstrap 5 starter for [11ty](https://www.11ty.dev/). Developed with rapid prototyping, easy customization/theming and fast loading times in mind.

## Documentations
- [11ty Static Site Generator](https://www.11ty.dev/docs/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs)
- [Parcel.js](https://v2.parceljs.org/)
- [PurgeCSS](https://purgecss.com/)

## How to get started

### 1. Clone the repository
```git clone https://github.com/THoenig/11ty-bs5-starter.git your-project-name```

### 2. cd into project directory
```cd your-project-name```

### 3. Install dependencies
```npm install```

### 4. Run
```npm start```

Then visit [http://localhost:8080](http://localhost:8080).

## Building for production
```npm run build```

This will minify HTML, CSS and JS and purge unused styles.

## Differences from 11ty default config
While I want to keep things as default as possible, I decided to change the following:

### [Input](https://www.11ty.dev/docs/config/#input-directory)/[Output](https://www.11ty.dev/docs/config/#output-directory) folders:
``` javascript
  config.dir = {
    input: './src',
    output: "./public"
  }
```
To separate configuration, actual source and output.

### [setDataDeepMerge(true)](https://www.11ty.dev/docs/data-deep-merge/)
For me, it just feels like this should be the default.

### [setTemplateFormats](https://www.11ty.dev/docs/config/#template-formats)

``` javascript
  config.setTemplateFormats([
    'njk',
    'md',
    'jpg',
    'png',
    'svg',
    // 'liquid',
    // 'pug',
    // 'ejs',
    // 'hbs',
    // 'mustache',
    // 'haml',
    // '11ty.js',
  ])
```

### [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs)
I like it, so I added it.

### Add htmlmin [transform](https://www.11ty.dev/docs/config/#transforms)
Minify HTML if NODE_ENV is set to 'production'.

### Ignore files and folders that start with '__' (double underscore)
11ty parses Liquid in markdown. This is great, because this enables you to include custom Liquid/HTML in your markdown or split your content up. To prevent 11ty to create a new output folder, just use the double underscore.

**Example**:
``` markdown
# Hi
This is content part 1.

{% include ./__content-part-2.md %}
```

## Customization

By default, all styles and JS modules are activated. Deactivate the components you don't need to reduce file sizes and increase overall performance.

The entry point for all assets is ```parcel.js```. Nothing much to see here, in fact this is the whole content:

``` javascript
import "./src/_assets/scss/main.scss"
import "./src/_assets/js/main.js"
```

Use the respective ```main.{scss,js}``` files to import stuff and extend to your liking.

### SCSS
**Entry point:** ```src/_assets/scss/main.scss```.

In ```src/_assets/scss/_bootstrap.scss``` you can theme Bootstrap and (de-)activate Bootstrap modules. Further information on this topic in the Bootstrap docs about [SCSS customization](https://getbootstrap.com/docs/5.0/customize/sass/)

### JS
**Entry point:** ```src/_assets/js/main.js```. 

Bootstrap imports are located in ```src/_assets/js/_bootstrap.js```. The Bootstrap docs for popovers and tooltips state that these modules have impact on performance, so make sure to deactivate if you don't need them.

### The _data files
```
src/_data
├── env.js
├── layout.json
├── menus.json
└── site.json
```

#### env.js
This contains the expression ```isDev``` to determine if NODE_ENV is 'development'. It's used to include sourcemaps in development mode and leave them out for a production build.

#### layout.json
Applies the default layout for all pages (unless otherwise specified).

#### menus.json
As I didn't want to include too much stuff like the [11ty navigation plugin](https://www.11ty.dev/docs/plugins/navigation/), you can use this file to build navigation menus the manual way. Of course, feel free to use the plugin!

Don't forget to add a trailing slash to the URLs (at least to your internal ones)! This is important to be able to show the current active page. 11ty's ```{{ page.url }}``` **does** add a trailing slash and if you don't, the comparison will fail.

#### site.json
Contains the default metadata, site name and language.

## That's it!
Now go and create something awesome!