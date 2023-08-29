<script setup lang="ts">
const partnersEnabled = true;
const partners = [
  {
    url: "https://ecoinvent.org/",
    imageSrc: "/images/sponsors/ecoinvent-logo-main.png",
    imageAlt: "Ecoinvent Logo",
  },
];
</script>
<template>
  <div class="background">
    <div class="container">
      <h1 class="text-center text-primary">Brightcon 2023 Partners</h1>
      <div v-if="partners.length > 0 && partnersEnabled">
        <h2>Strategic and Innovative Lead Partner</h2>
        <div
          class="row is-vertical-align is-horizontal-align bg-white with-padding text-dark"
        >
          <div
            v-for="(s, index) in partners"
            :key="index"
            class="col-4-md card-container"
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
