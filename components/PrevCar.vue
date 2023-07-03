<template>
  <div class="container">
  <h2>Images from <a href="https://2022.brightcon.link">Brightcon 2022</a></h2>
    <div class="row" >
    <div class="col">
  <carousel :items-to-show="1" :autoplay="4000">
    <slide v-for="slide in previmgs" :key="slide">
    <NuxtImg :src=slide />
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  </div>
</div>
</div>
</template>
<script setup lang="ts"> 
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
const previmgs = [
   "/images/onlyinbc/1.jpeg",
   "/images/onlyinbc/2.jpeg",
   "/images/onlyinbc/3.jpeg",
   "/images/onlyinbc/4.jpeg",
   "/images/onlyinbc/5.jpeg",
   "/images/onlyinbc/6.jpeg",
  ];
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
