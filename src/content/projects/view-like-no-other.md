---
title: "View Like No Other"
source: "Midnight Agency"
url: "https://www.viewlikenoother.com/"
order: 12
pubDate: "Feb 11 2024"
description: "Looking to rent out their office premises, the management of One Canada Square asked Midnight Studio to create an interactive 3D model of the tower to explore the available space."
heroImage: "/assets/projects/view-like-no-other/screenshot_1.png"
heroVideo: "/assets/projects/view-like-no-other/video.mp4"
backgroundColor: "#FCF6EE"
---

The View Like No Other project initially started as just a standard marketing website for real estate in Central London. But after exploring the uniqueness of the shape and its obvious place in the silhouette of London's skyline, there was a desire to encapsulate the building itself in the website.

![The model of the building](/assets/projects/view-like-no-other/screenshot_2.png)

## The Building Model

We opted to using WebGL, specifically [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (a wrapper around Three.js) in order to achieve this. A model for each of the building's floors was generated in Cinema 4D before being exported and optimised for web.

We then stacked them in the viewport to allow for an easy transition between the floors as you scroll through the page, giving visitors the ability to truly experience the space. Hovering dots appear over the floors to provide contextual and additional information.

## Connecting Content

A CMS was built to connect the information regarding property sizes and availability to allow the sales team to update floors as and when they are no longer available. In this case, we utilised [Contentful](https://www.contentful.com/).

![Mobile Menu](/assets/projects/view-like-no-other/screenshot_3.png)
