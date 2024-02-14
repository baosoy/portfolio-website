---
title: "Polymer"
source: "Personal"
url: "https://polymer.kerimhudson.com"
pubDate: "2024-02-14"
description: "Polymer is a plastic recycling simulator which utilises real world environment data to impact the mechanics of the game. The idea of the simulator is to successfully run a plastic recycling production facility."
heroImage: "../../assets/projects/polymer/screenshot_1.png"
backgroundColor: "#D8FF42"
---

The website is built using [React](https://react.dev), [Vite.js](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/).

The mechanics work simply by using an interval tick which operates the primary principles of the game: it calculates the demand, generates the plastic material if autorecyclers are bought, and sells the material based upon the demand.

## Environment Data

The game allows for you to connect your own air quality data using something like an [Enviro Urban](https://shop.pimoroni.com/products/enviro-urban?variant=40056508219475). This was the primary use case for the game as the idea was for you to be able to reflect on the current air quality in your own home, and see how it impacts the game - hopefully with the intention of you improving the air you breathe.

The second way is by using some of the cities available in the dropdown. This data is provided by [OpenAQ](https://openaq.org) and [OpenWeather](https://openweathermap.org). This data does not fluctuate like the local data, but rather uses averages of the cities to just give you an idea of the air quality in these areas, and to see how it impacts the game mechanics.

## Features

To make the simulator more interesting, various different levels can be unlocked as it develops, such as research, marketing, and autorecyclers.
