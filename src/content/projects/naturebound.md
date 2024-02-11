---
title: "NatureBound"
url: "https://naturebound.ai"
source: "Freelance"
order: 1
pubDate: "2024-02-11"
description: "NatureBound is an observability platform allowing farms and their corporate clients to manage their environmental impact and health. Working with Barney, their technical lead, we cleaned up the design and build out the application for their beta release, building upon their prototype."
heroImage: "../../assets/projects/naturebound/screenshot_1.png"
backgroundColor: "#F6FFE3"
---

The backend was built internally and hosted on Google Cloud Platform. The front-end was built using [Next.js](https://nextjs.org), [TailwindCSS](https://tailwindcss.com), and [MapLibre](https://maplibre.org) for the map data.

## Server-Side Rendering

Unsure about the consistency and strength of internet connections in rural areas, we opted to use server-side rendering to fetch as much data in one go for the clients, rather than having pages appear piece-by-piece.

We also cache data where possible, to minimise requests between the server and client.

## Dark Mode & Accessibility

As the primary clients are farmers, we wanted to ensure accessiblity standards were met. We utilised large font sizes, high contrasts, and included a dark mode to allow people to choose whatever is most comfortable for them.

![](../../assets/projects/naturebound/screenshot_2.png)
