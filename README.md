# personal-page

## What is it

Personal page CMS with blog, discord and github integration. Created using [Nuxt3](https://nuxtjs.org/) and [Nuxt Content v2](https://content.nuxtjs.org/).

## Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# generate static project
npm run generate
```

## Configuration

The main configuration is in `.env` and `/content/config.json`.

## ENV file

Create `.env` file in project's root directory and configure if as you want.

```
title = "Your name"
domain = "example.com"
header = "<span style='color:#FFFFFF'>Your name</span>"
description = "Some description here"
favicon = "https://i.imgur.com/w3f9YkV.png"
html_lang = "en"
```

## config.json file

### Socials

You can add as many items as you like. [Font Awesome](https://fontawesome.com/icons) icons are supported.

### Favourites

Find the icon on [DEVICON](https://devicon.dev/) and paste its class in the array.

### Quotes

You can insert as many quotes as you want. It will be displayed as a slider.

### Discord

Enter your username and discriminator there. Then create a new server and turn on the Widget on it.

![](https://i.imgur.com/XCgBGXo.png)

Paste the **JSON API** URL in the appropriate place in config.

## Blog

The blog module is made with [Nuxt Content v2](https://content.nuxtjs.org/).

Articles in Markdown files must be placed in `/content/blog/` directory. The file name is the article slug.

Data such as article title, description, image, and tags should be included in Markdown Metadata as YAML.

### Example article

/content/blog/another-example.md
```
---
title: "Another example"
created: 1659951006
tags: 
- "Learning"
keywords: ""
visibility: 1
image: "https://i.imgur.com/824s386.png"
description: "Vitae proin sagittis nisl rhoncus. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Excepteur sint occaecat cupidatat non proident."
---
## This is article content

Test
```

Create such a file, run the development mode `npm run dev`, and go to `localhost:3000/blog/another-example` to view the new article.

### Visibility

* **1** - the article is visible on the main page and the blog page
* **2** - the article is hidden on the main page, available only via link and it is visible in sitemap and rss
* **3** - the article is hidden on main page, not visible in sitemap and rss, available only via link