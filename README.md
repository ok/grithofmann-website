# grithofmann.net website

## Site Setup

This site is using Contentful as CMS and Eleventy for SSR.

- script/contentful.js exports the data into _data, bundled by the categories in the CF collections
- _data/*.js provide processed global data to 11ty from cf-*.json
- _includes contains partials and layouts

## Getting Started

- ```npm run build``` to integrate CMS content and render pages. 

- ```npm run start``` run build and start live server

- ```npm run debug``` to run 11ty with debug output
