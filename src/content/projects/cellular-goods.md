---
title: "Cellular Goods"
source: "Companion"
url: "https://cellular-goods.com/"
order: 11
pubDate: "2024-02-11"
description: "Cellular Goods was the first approved CBD skincare brand in the UK. When I joined Companion, the Cellular Goods website was built, however there was ongoing maintenance and improvement works carried out throughout my time there, on both their CMS and store website."
heroImage: "/assets/projects/cellular-goods/screenshot_1.png"
heroVideo: "/assets/projects/cellular-goods/video.mp4"
backgroundColor: "#F7F7F7"
---

The Cellular Goods [website](https://cellular-goods.com/) was built as a headless [Shopify](https://shopify.com) website, using Sanity as a CMS to manage the content of the website, all with a statically-generated front-end built with React and [Next.js](https://nextjs.org). Whilst the main build of the website was done prior to my arrival to the Companion team, there were some interesting challenges we faced in updating the website.

## Custom Cart Discount Management

As the store utilised a Headless Shopify setup, it was difficult to find any existing shopify plugins which provided a quick and efficient way of applying conditional discounts in the cart. In order to deal with this, we decided to build the conditional logic system into the CMS, utilising promo codes generated within Shopify. The system provided a really easy way for the team to build advanced custom logic for automatic discounts.

![Cart Screenshot](/assets/projects/cellular-goods/screenshot_2.png)

## Internationalisation

Cellular Goods wanted to expand into the US market, and as part of that needed the website to reflect the different currencies as well as local regulatory information. They also wanted the ability to offer promotions and marketing updates for the different regions. We updated the CMS to allow for region-specific information, and due to the requirement of a custom payment provider because of the CBD products, we provided a way to manage conversion rates to display products in a variety of currencies.

## Slow Page Loads

There were often complaints of slow page loads. We did spend some time debugging these, and found many re-renders were occuring on page changes due to bad dependency handling. We managed to shave some page renders from several seconds down to under a second.

![Cellular Goods Screenshot](/assets/projects/cellular-goods/screenshot_1.png)
![Cellular Goods Screenshot](/assets/projects/cellular-goods/screenshot_3.png)
