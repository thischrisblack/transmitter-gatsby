# Transmitter

### A custom CMS built on React, Gatsby, and Firebase.

This is a Gatsby-fied rework of my Create-React-App CMS [Transmitter](https://github.com/thischrisblack/transmitter). In the previous version, the public side and the admin side were in a monorepo, but here I have broken them up. This repo is the public side only.

Transmitter is a microblog / music player / code portfolio on the frontend, and a creativity archive manager on the backend. My own public implementation is at [www.chrisblack.net](https://www.chrisblack.net). It has:

**Blog.** Transmit "messages" to the blog frontend or keep them private like a notes app. Upload text, images, sound files, links. Markdown-compatible. On the admin side, messages are filterable by user-defined "types" for easy review of growing collections.

**Music Player.** Attractive, straightforward music player, filterable by "mood" or other attributes. Batch upload of MP3 files supported. Batch uploader extracts ID3 tags from MP3s and enters them in the database for display and filtering.

**Code Portfolio.** Any messages of type "code" will be displayed in the `/code` part of the website, along with some introductory text.

**Calendar.** Supports public and private events.

**Mobile-first / PWA.** While not fully embracing all the features of PWA, this app is "add to home screen" compatible, with a mobile-first design.