<template>
  <div class="container">
    <h2>Only in Brightcon</h2>

    <div class="row is-vertical-align">
      <div v-for="(q, i) in quotes" :key="i" class="col-6-md card-container">
        <Quotes
          :name="q.name"
          :designation="q.designation"
          :title="q.reviewTitle"
          :img-url="q.imgUrl"
          :url="q.reviewMore"
          :linked-in="q.linkedIn"
          :github="q.github"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const quotes= [
  {
    name: "Benjamin W. Portner",
    designation: "LCA Expert at Bauhaus Luftfahrt e.V.",
    reviewTitle:
      "Brightcon is the best place to meet fellow open source LCA enthusiasts and to learn about current developments in LCA software, data and methods.",
    imgUrl: "/images/participants/BenPortner.jpg",
    linkedIn: "https://www.linkedin.com/in/benjamin-w-portner/",
    github: "https://github.com/BenPortner",
  },
  {
    name: "Brightcon organizers",
    designation: "",
    reviewTitle:
      "The hackathon of Brightcon 2021 allowed Valentin Starlinger to write a python package that can be used to import data from openLCA into brightway.",
    imgUrl: "/images/BW_clear_with_background.png",
    reviewMore: "https://github.com/brightway-lca/brightway-olca",
  },
  {
    name: "Valentin Starlinger",
    designation: "2.-0 LCA Consultants",
    reviewTitle:
      "It was my first time participating last year and I very much enjoyed it! I met a lot of wonderful people, some of which I am still in regular contact with now. I also got the opportunity to participate in the hackathon, where I helped create a package to import data from openLCA.",
    imgUrl: "/images/participants/ValentinStarlinger.gif",
    linkedIn: "https://www.linkedin.com/in/vstarlinger/",
    github: "https://github.com/vstarlinger",
  },
  {
    name: "Brenda Miranda Xicotencatl",
    designation:
      "PhD candidate at the Institute of Environmental Sciences of Leiden University (CML)",
    reviewTitle:
      "It was a refreshing immersion in projects enabling research on sustainability. In a short time, I discovered new tools and new ways to use Brightway. This environment opens possibilities for open science and collaboration.",
    imgUrl: "/images/participants/brenda-miranda-xicotencatl.jpg",
    linkedIn: "https://www.linkedin.com/in/bmirandax/",
  },
]
</script>

<style scoped>
.card-container {
  flex-grow: 1;
}
.linkedInIcon {
  fill: blue;
}
</style>
