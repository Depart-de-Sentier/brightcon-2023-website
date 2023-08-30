<script setup lang="ts">
const palladiumSponsorsEnabled = false;
const goldSponsorsEnabled = true;
const nickelSponsorsEnabled = true;
const sponsorsTitle = "Thanks to our Sponsors!";
const palladiumSponsors = [{}];
const goldSponsors = [{
    url: "https://lca-net.com/",
    imageSrc: "/images/sponsors/2.-0_logo_white_background_-1.png",
    imageAlt: "2.0 lca consultants logo",
}];
const silverSponsors = [{}];
const nickelSponsors = [
  {
    url: "https://www.cauldron.ch/",
    imageSrc: "/images/sponsors/cauldron_logo_cropped.jpg",
    imageAlt: "Logo Cauldron",
  },
];
</script>
<template>
  <div class="background">
    <div class="container">
      <h1 class="text-center">{{ sponsorsTitle }}</h1>
      <div v-if="palladiumSponsors.length > 0 && palladiumSponsorsEnabled">
        <h2>Palladium</h2>
        <div
          class="row is-vertical-align is-horizontal-align bg-white with-padding"
        >
          <div
            v-for="(s, index) in palladiumSponsors"
            :key="index"
            class="col-4-md card-container"
          >
            <a :href="s.url" target="_blank">
              <NuxtImg format="webp" :src="s.imageSrc" :alt="s.imageAlt" />
            </a>
          </div>
        </div>
      </div>

      <div v-if="goldSponsors.length > 0 && goldSponsorsEnabled">
        <h2>Gold</h2>
        <div
          class="row is-vertical-align is-horizontal-align bg-white with-padding"
        >
          <div
            v-for="(s, index) in goldSponsors"
            :key="index"
            class="col-3-md card-container"
          >
            <a :href="s.url" target="_blank">
              <NuxtImg format="webp" :src="s.imageSrc" :alt="s.imageAlt" />
            </a>
          </div>
        </div>
      </div>
      <div v-if="nickelSponsors.length > 0 && nickelSponsorsEnabled">
        <h2>Nickel</h2>
        <div
          class="row is-vertical-align is-horizontal-align bg-white with-padding"
        >
          <div
            v-for="(s, index) in nickelSponsors"
            :key="index"
            class="col-2-md card-container"
          >
            <a :href="s.url" target="_blank">
              <NuxtImg format="webp" :src="s.imageSrc" :alt="s.imageAlt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #ebf8f6;
  padding: 2em;
}
.with-padding {
  padding: 1em;
}
.row {
  justify-content: space-around;
}
</style>
