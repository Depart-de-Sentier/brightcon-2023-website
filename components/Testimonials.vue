<template>
  <div class="container">
    <h2>Only in Brightcon</h2>
    <div class="row is-vertical-align">
      <div class="col-6-md card-container">
        <Quotes 
          v-for="q in quotes" :key="q.name"
	  :name="q.name"
	  :imgUrl="q.imgUrl"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const quotes = ref([
  {
    name: "Agneta GHOSE",
    designation: "",
    reviewTitle: "",
    imgUrl: "/images/participants/agneta-ghose.jpg",
    reviewMore: "",
    linkedIn: "",
    github: "",
  },
  {
    name: "Sarah SCHMIDT",
    designation: "",
    reviewtitle: "",
    imgurl: "/images/participants/sara-schmidt.jpg",
    reviewMore: "",
  },
  {
    name: "Silvana Ovait",
    designation: "",
    reviewTitle: "",
    imgUrl: "/images/participants/silvana-ovait.jpg",
    reviewMore: "",
    linkedIn: "",
    github: "",
  },
  {
    name: "Miguel Fernandez Astudillo",
    designation: "",
    reviewTitle: "",
    imgUrl: "/images/participants/miguel-fernandez-astudillo.jgp",
    reviewMore: "",
    linkedIn: "",
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
</style>
