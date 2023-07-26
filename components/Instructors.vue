<template>
  <div class="container">
    <h2>Instructors for Brightcon 2023</h2>
    <div v-for="q in instructors" :key="q.name">
      <div class="row">
        <div class="col">
          <div class="card" :id="q.instid">
            <header>
              <h4>
                <NuxtLink :to="q.linkedIn">{{ q.name }} </NuxtLink>
              </h4>
              <h5>{{ q.designation }}</h5>
            </header>
            <p>
              <i>{{ q.bio }} </i>
            </p>
            <div class="imgbox" v-if="q.imgUrl">
              <NuxtImg
                :src="q.imgUrl"
                alt=""
                format="webp"
                fit="cover"
                width="64"
                height="64"
              />
            </div>
            <div>
              <footer class="is-left">
                <div v-if="q.github">
                  <a
                    class="button clear outline is-paddingless icon-only"
                    :href="q.github"
                    rel="noopener"
                    target="__blank"
                  >
                    <github-icon />
                  </a>
                </div>
                <a
                  class="button clear outline is-paddingless icon-only"
                  :href="q.linkedIn"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon></linked-in-icon>
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const instructors = ref([
  {
    name: "Michael WEINOLD",
    instid: "mw",
    designation: "Assistant Professor at Aalborg University",
    imgUrl: "/images/instructors/michael-weinold.jpeg",
    designation: "PhD in Life-Cycle Assessment for Sustainable Aviation",
    bio: "Michael Weinold is a doctoral researcher in the Group for Technology Assessment at Paul Scherrer Institute and the Department of Mechanical and Process Engineering of ETH Zürich. His research interests include life-cycle assessment for sustainable aviation and methodological improvements for hybrizing life-cycle inventory. His research is undertaken as part of the WISER Innosuisse flagship, an interdisciplinary project funded by Swiss Innovation Agency. It is aimed at providing a web of interoperable digital services for knowledge on decarbonisation pathways.",
    linkedIn: "https://www.linkedin.com/in/michaelweinold/",
    github: "https://github.com/michaelweinold",
  },
  {
    name: "Romain SACCHI",
    instid: "rs",
    designation: "Researcher at the Technology Assessment Group of the Paul Scherrer Institute",
    imgUrl: "/images/instructors/romain-sacchi.jpeg",
    bio: "Romain Sacchi is a researcher at the Technology Assessment Group of the Paul Scherrer Institute since June 2019. He contributes within the field of LCA applied to future mobility technologies. More specifically, Romain investigates the opportunities and challenges related to the electrification of mobility, considering all the environmentally-relevant phases along the life cycle of transportation services. More recently, he developed a keen interest in energy system models and Integrated Assessment Models and their application to LCA.",
    linkedIn: "https://www.linkedin.com/in/romainsacchi/",
    github: "https://github.com/romainsacchi",
  },
]);
</script>

<style scoped>
.card-container {
  flex-grow: 1;
}
.linkedInIcon {
  fill: blue;
}
.imgbox {
  margin-right: 1rem;
}
.card {
  padding: 2rem 4rem;
  border-radius: 0.9rem;
}
</style>
