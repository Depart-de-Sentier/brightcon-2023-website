<template>
  <div :class="`card ${isGreen ? 'bg-primary' : ''}`">
    <div class="userdetails">
      <div class="imgbox">
        <nuxt-img
          src="imgUrl"
          alt=""
          format="webp"
          fit="cover"
          width="64"
          height="64"
        />
      </div>
      <div class="detbox">
        <p :class="`name ${isGreen ? 'text-white' : ''}`">
          {{ name }}
        </p>
        <p :class="`designation ${isGreen ? 'text-light' : ''}`">
          {{ designation }}
        </p>
      </div>
    </div>
    <div class="review">
      <p :class="`${isGreen ? 'text-white' : ''}`">{{ title }}</p>
      <hr
        v-if="more !== '' || linkedIn !== '' || github !== '' || url !== ''"
      />
      <a
        v-if="url !== ''"
        rel="noopener"
        :href="url"
        target="__blank"
        :class="`${isGreen ? 'text-light' : ''}`"
      >
        {{ url }}
      </a>
      <p v-if="more !== ''" :class="`${isGreen ? 'text-light' : ''}`">
        {{ more }}
      </p>
      <div v-if="linkedIn !== '' || github !== ''" class="is-right">
        <a
          v-if="github"
          class="button clear outline is-paddingless icon-only"
          :href="github"
          rel="noopener"
          target="__blank"
        >
          <github-icon />
        </a>
        <a
          v-if="linkedIn"
          class="button clear outline is-paddingless icon-only"
          :href="linkedIn"
          rel="noopener"
          target="__blank"
        >
          <linked-in-icon></linked-in-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = "";
const designation = "";
const title = "";
const imgUrl = "";
const more = "";
const url = "";
const linkedIn = "";
const github = "";
const isGreen = "";
</script>

<style scoped>
#Github {
  fill: var(--font-color);
}
#Github:hover {
  fill: var(--color-darkGrey);
}
#Linkedin {
  fill: var(--font-color);
}
#Linkedin:hover {
  fill: var(--color-darkGrey);
}

.card {
  padding: 1rem 2rem;
  border-radius: 0.8rem;
}
.userdetails {
  display: flex;
}
.imgbox {
  margin-right: 1rem;
}
.imgbox img {
  min-width: 64px;
  max-width: 64px;
  width: 64px;
  height: 64px;
  min-height: 64px;
  max-height: 64px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #e8eaee;
}
.detbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.detbox p {
  margin: 0;
}
.detbox .name {
  /* font-size: 0.9rem; */
  margin-bottom: 0.1rem;
  font-weight: 600;
}
.detbox .designation {
  opacity: 0.6;
  /* font-size: 0.8rem; */
}

.review p {
  /* font-size: 1.4rem; */
  line-height: 1.5;
  margin-bottom: 0.8rem;
}
</style>
