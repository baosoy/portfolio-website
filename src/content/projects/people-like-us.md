---
title: "People Like Us"
source: "Companion"
url: "https://paygap.plu.org.uk/"
pubDate: "2023-11-01"
description: "Companion was asked by People Like Us to create a website to help raise awareness and signings of their petition for mandatory reporting of the ethnicity pay gap. They wanted an interactive website which would allow people to anonymously report their stories, whilst encouraging people to sign the petition."
heroImage: "../../assets/projects/people-like-us/screenshot_1.png"
backgroundColor: "#FF875F"
---

The website was built using [Next.js](https://nextjs.org), [TailwindCSS](https://tailwindcss.com), [React Spring](https://react-spring.dev) for animations, and [Supabase](https://supabase.com) for database storage.

## Anonymous Stories

Wanting to allow people to upload their stories without having to add any personal information, we created a dynamic form that people could add their stories too. These stories would then need to be moderated and approved before they were publicly visible on the website.

As these stories had no other information, we opted for using interesting visual backgrounds - a mixture of shapes and colours - to make the stories visually unique.

<div>
<mux-player
playback-id="a400fJDYaaV7xWgXPByJdiirEbTHMI4BoRQ4bo02m4vgU"
metadata-video-title="Example of the moving anonymous stories"
accent-color="#FF0000"
autoplay muted loop> </mux-player></div>

## Petition Data

As the main intention of the website was to gather signatures for a petition, we had to find a way to display the current number of signatures on the website. This was done by using the API available from the GOV.UK petition website.

We also used the [Vercel Open Graph Image Generation](https://vercel.com/docs/functions/og-image-generation) to display these numbers dynamically in any social media posts sharing the website.
