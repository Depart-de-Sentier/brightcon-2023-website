<template>
  <div class="container">
    <h2>Testimonials from Brightcon</h2>
    <div v-for="q in quotes" :key="q.name">
      <div class="row">
        <div class="col">
          <div class="card">
            <header>
              <h4>
                <NuxtLink :to="q.linkedIn">{{ q.name }} </NuxtLink>
              </h4>
              <h5>{{ q.designation }}</h5>
            </header>
            <p>
              <i>{{ q.reviewMore }} </i>
            </p>
            <div class="imgbox">
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
const quotes = ref([
  {
    name: "Agneta GHOSE",
    designation: "Assistant Professor at Aalborg University",
    reviewTitle: "",
    imgUrl: "/images/participants/agneta-ghose.jpg",
    reviewMore:
      " I attended BrightCon 2022 as a member of a panel discussion on semantic technologies in LCA. From my experience, BrighCon has been a great space to foster collaboration, learning and networking. Brightway users whilst growing is still a small community within LCA practitioners. BrightCon creates a space that gives its community the opportunity to engage in building a  resourceful network. I had the chance to meet representatives from the UNEP GLAD initiative at BrightCon last year and we are currently working on creating workflows for FAIR data sharing. <br /> Besides networking, I found all presentations were thought-provoking, engaging, and delivered with passion. It was evident that the speakers were genuinely invested in the open software movement and eager to share their knowledge and experiences. The knowledge I gained, and the overall experience exceeded my expectations and I would highly recommend to anyone interested in contributing to the use of open software in LCA as well as those eager to share their knowledge and experiences",
    linkedIn: "https://www.linkedin.com/in/agneta-ghose-8b48b321/",
    github: "https://github.com/agneta20",
  },
  {
    name: "Sarah SCHMIDT",
    designation:
      "Research associate at the Department of Resource Management and Waste Management, University of Kassel",
    reviewtitle: "",
    imgUrl: "/images/participants/sarah-schmidt.jpg",
    reviewMore:
      "The Brightcon 2022 provided a wonderful opportunity to delve deeper into Brightway and its latest features through a diverse program consisting of classes, conference sessions, and an engaging hackathon. Connecting with the kind, welcoming, and supportive Brightway community was a true highlight, making the Brightcon all the more enjoyable.",
    linkedIn: "https://www.linkedin.com/in/sarah-schmidt-82b187247/",
  },
  {
    name: "Silvana Ovait",
    designation: "Researcher | Bifacial PV Analyst at NREL",
    reviewTitle: "",
    imgUrl: "/images/participants/silvana-ovait.jpg",
    reviewMore:
      "Brighton is an excellent conference that brings together the research and methods that are pushing the boundaries (pun intended) of how LCA is performed. The open-source aspect of the tool (Brightways) and of how the conference itself was ran and organized made it a great learning experience, hands-on and approachable. I really recommend attending and taking advantage of the tutorials, and the various interaction sessions such as the ‘HELP – I need somebody’ session and the Hackathons, were you can explore with more depth some of your own questions and tie it all together with the community’s help.",
    linkedIn: "https://www.linkedin.com/in/silvana-ovaitt/",
    github: "https://github.com/shirubana",
  },
  {
    name: "Miguel Fernandez Astudillo",
    designation: "Sustainability engineer | Researcher | Data Scientist",
    reviewTitle: "",
    imgUrl: "/images/participants/miguel-fernandez-astudillo.jpg",
    reviewMore:
      "The sustainability challenges of today need open science. Solutions need to be reproducible (hence credible), robust and reusable. The Brightcon conference is a fantastic gathering to push in this direction. It combines cutting edge research in industrial ecology, with best practices in scientific computing, and a motivated community. I highly recommended it!",
    linkedIn: "https://www.linkedin.com/in/miguel-fastudillo/",
    github: "",
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
