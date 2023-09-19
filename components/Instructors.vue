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
    name: "Romain SACCHI",
    instid: "rs",
    designation:
      "Researcher at the Technology Assessment Group of the Paul Scherrer Institute",
    imgUrl: "/images/instructors/romain-sacchi.jpeg",
    bio: "Romain Sacchi is a researcher at the Technology Assessment Group of the Paul Scherrer Institute since June 2019. He contributes within the field of LCA applied to future mobility technologies. More specifically, Romain investigates the opportunities and challenges related to the electrification of mobility, considering all the environmentally-relevant phases along the life cycle of transportation services. More recently, he developed a keen interest in energy system models and Integrated Assessment Models and their application to LCA.",
    linkedIn: "https://www.linkedin.com/in/romainsacchi/",
    github: "https://github.com/romainsacchi",
  },
  {
    name: "Bo WEIDEMA",
    instid: "bw",
    designation: "Professor at Aalborg University",
    imgUrl: "/images/instructors/bo-weidema.jpeg",
    designation: "Professor at Aalborg University",
    bio: "",
    linkedIn: "https://www.linkedin.com/in/bo-weidema-5486a78/",
    github: "https://github.com/boweidema",
  },
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
    name: "Sander van Nielen",
    instid: "svn",
    designation: "",
    imgUrl: "/images/instructors/sander-van-nielen.jpg",
    bio: "Sander van Nielen obtained his MSc in Industrial Ecology in Leiden in 2016. Afterwards, he worked at the municipal engineering department in Rotterdam for two years. Now he is back at CML, doing PhD research on the recycling of rare earth magnets. His research focusses on the development of ex-ante LCA methods and the resilience of supply chains. By combining insights from industry partners with sophisticated computational methods, more insight in the environmental aspects of magnet recycling will be created. ",
    linkedIn: "https://www.linkedin.com/in/sandervannielen/",
    github: "",
  },
  {
    name: "Karin Treyer",
    instid: "kt",
    designation: "",
    imgUrl: "/images/instructors/karin-treyer.jpg",
    bio: "Karin Treyer is a Senior researcher in Life Cycle and Sustainability Assessment in the Energy Sector at Paul Scherrer Institut PSI. She is involved in the non-profit organisation Depart-de-Sentier, co-organizer of brightcon.",
    linkedIn: "https://www.linkedin.com/in/karintreyer0777",
    github: "https://github.com/KarinTreyer",
  },
  {
    name: "Valentin Starlinger",
    instid: "vs",
    designation: "",
    imgUrl: "/images/instructors/valentin-starlinger.gif",
    bio: "Valentin Starlinger is a Data Scientist at 2.-0 LCA consultants",
    linkedIn: "https://www.linkedin.com/in/vstarlinger/",
    github: "https://github.com/vstarlinger",
  },
  {
    name: "Oliver Kusche",
    instid: "ok",
    designation: "",
    imgUrl: "/images/instructors/oliver-kusche.jpg",
    bio: "Oliver Kusche is a research and consulting professional, head of okworx.com",
    linkedIn: "https://www.linkedin.com/in/oliverkusche/",
    github: "https://github.com/okworx",
  },
  {
    name: "Tomás Navarrete Gutiérrez",
    instid: "tng",
    designation: "",
    imgUrl: "/images/instructors/tomas-navarrete-gutierrez.jpg",
    bio: "Tomás Navarrete Gutiérrez is a Senior Research and Technology associate at the Luxembourg Institute of Science and Technology, a computer scientist by training,  roadie and devops agent  of his rockstar work colleagues ! He is part of the non-profit Depart-de-Sentier that drives Brightway develpoment.",
    linkedIn: "https://www.linkedin.com/in/tom4m3/",
    github: "https://github.com/tngTUDOR",
  },
  {
    name: "Sean Pollard",
    instid: "spollard",
    designation: "",
    imgUrl: "/images/instructors/sean-pollard.jpg",
    bio: "Sean Pollard is a software engineer at ecoinvent, and a pretty chill dude.",
    linkedIn: "https://www.linkedin.com/in/sean-pollard-1992bb26/",
    github: "https://github.com/seanjpollard",
  },
  {
    name: "Chris Mutel",
    instid: "cmutel",
    designation: "",
    imgUrl: "/images/instructors/chris-mutel.jpg",
    bio: "Chris Mutel develops software for sustainability, and is the creator of the LCA Framework Brightway",
    linkedIn: "https://www.linkedin.com/in/christopher-mutel-61b263b2/",
    github: "https://github.com/cmutel",
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
