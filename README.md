# Jekyll + Tailwind + Stimulus Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/b3a75c76-2ca8-4798-bf38-3110eca9030f/deploy-status)](https://app.netlify.com/sites/jekyll-tailwind-stimulus-starter/deploys)

This project template is a starting point for anyone wanting to build a static site using Jekyll, TailwindCSS, and StimulusJS. See a preview of the deployed [jekyll + tailwind + stimulus starter](https://jekyll-tailwind-stimulus-starter.netlify.app).

## Goals

- "Just works."
- Easy to deploy to [Netlify](https://netlify.com).
- Small number of up-to-date dependencies.

## How to use this template

1. Use this template to create a new repo.
   1. Click the "Use this template" button.
   2. Create your repo on github.
   3. Clone your repo locally.
2. Install dependencies.
   1. `bundle install`
   2. `yarn install`
3. Run in development  mode.
   1. `yarn develop`
   2. Browse to `http://localhost:4000`.
4. Build your site.
   1. Add pages, customize the default layout, etc. (see how `index.md` works)
5. Deploy
   1. Run `yarn build` to build a production version of the site to the `_site` directory.
   2. The included `netlify.toml` file makes it easy to [deploy to netlify](https://docs.netlify.com/site-deploys/overview/).

## What you get with the template

1. Webpack-based build pipelines
   1. Compiles Javascript into a bundle.
   2. Compiles CSS into a static file.
2. Tailwind CSS 3 installed and configured
   1. With aspect-ratio, typography, and forms plugins enabled.
3. Stimulus JS 3 installed and configured
   1. With an example controller
4. A (very) minimal HTML structure
   1. A header that includes the JS and CSS bundles
   2. A `default.html` layout that renders page content
5. Browser-sync for easier local development
6. Separate `_config.dev.yml` for development specific site configuration.

## How to add new pages

1. Create a new file (e.g. `about.html`)
2. Add front-matter to use the default template (see `index.md`)

## What about the blog/posts functionality of Jekyll?

- The structure exists, but there is no longer a sample post
- It works just like normal jekyll
- You'll probably want to add a `post.html` template

## Thanks to

- [taylorbryant/jekyll-starter-tailwind](https://github.com/taylorbryant/jekyll-starter-tailwind) for the inspiration and original Jekyll Tailwind starter project I had been using.
- [Setting up Webpack for Jekyll](https://blog.mnishiguchi.com/setting-up-webpack-for-jekyll?) from Masatoshi Nishiguchi which helped me get just enough of a webpack config file going.