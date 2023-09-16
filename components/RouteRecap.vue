<template>
  <div class="row">
    <div v-for="(g, index) in routesGroup" :key="index" class="col">
      <div>
        <b>{{ g.name }}:</b>
        <br />
        <div v-for="(r, rindex) in g.routes" :key="rindex">
          <template v-if="r.external">
            -
	    <!-- Activate when the togglMenu and menu are ready 
            <a :href="r.url" target="_blank" @click.native="toggleMenu">
	    -->
            <a :href="r.url" target="_blank">
              {{ r.label }}
            </a>
          </template>
          <template v-else>
            -
	    <!-- Activate when the togglMenu and menu are ready 
            <NuxtLink :to="r.url" @click.native="toggleMenu">
	    -->
            <NuxtLink :to="r.url">
              {{ r.label }}
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const routesGroup = [
  {
    name: "Get involved",
    routes: [
      {
        label: "Calls",
        url: "/calls",
        external: false,
      },
      {
        label: "Become a Sponsor",
        url: "/sponsoring",
        external: false,
      },
      {
        label: "Tweet!",
        url: "https://twitter.com/brightcon_media",
        external: true,
      },
      {
        label: "Conference chat",
        url: "https://app.element.io/#/room/#brightway/brightcon:matrix.org",
        external: true,
      },
      {
        label: "Conference tech support",
        url: "https://app.element.io/#/room/#brightcon-tech:matrix.org",
        external: true,
      },
    ],
  },
  {
    name: "This year",
    routes: [
      {
        label: "Programme",
        url: "/programme",
        external: false,
      },
      /*{*/
        /*label: "Whats new in 2023",*/
        /*url: "/WhatsNewIn2022",*/
        /*external: false,*/
      /*},*/
      /*{*/
        /*label: "Speakers",*/
        /*url: "/speakers",*/
        /*external: false,*/
      /*},*/
      /*{*/
        /*label: "Awards",*/
        /*url: "/awards",*/
        /*external: false,*/
      /*},*/
      /*{*/
        /*label: "What Happened in 2022",*/
        /*url: "/whathap",*/
        /*external: false,*/
      /*},*/
      /*{*/
        /*label: "2022 Photos",*/
        /*url: "/Photos",*/
        /*external: false,*/
      /*},*/
    ],
  },
  {
    name: "Participate",
    routes: [
      {
        label: "Register",
        url: "/register",
        external: false,
      },
      {
        label: "Venue",
        url: "/venue",
        external: false,
      },
      /*{*/
        /*label: "Health Protection",*/
        /*url: "/HealthProtection",*/
        /*external: false,*/
      /*},*/
    ],
  },
  /*{*/
    /*name: "Hackathon",*/
    /*routes: [*/
      /*{*/
        /*label: "Details",*/
        /*url: "/hackathon",*/
        /*external: false,*/
      /*},*/
      /*{*/
        /*label: "Dribdat",*/
        /*url: "https://hack.brightcon.link",*/
        /*external: true,*/
      /*},*/
      /*{*/
        /*label: "Gitter",*/
        /*url: "https://gitter.im/brightway-lca/brightcon",*/
        /*external: true,*/
      /*},*/
    /*],*/
  /*},*/
  {
    /*name: "Contest",*/
    /*routes: [*/
      /*{*/
        /*label: "Contest",*/
        /*url: "/contest",*/
        /*external: false,*/
      /*},*/
      /*{*/
        /*label: "Results",*/
        /*url: "/contest-results",*/
        /*external: false,*/
      /*},*/
    /*],*/
  /*},*/
  /*{*/
    name: "Legal",
    routes: [
      {
        label: "Code of conduct",
        url: "/code-of-conduct",
        external: false,
      },
      {
        label: "Legal",
        url: "/legal",
        external: false,
      },
    ],
  },
] as RouteGroup[];
</script>
