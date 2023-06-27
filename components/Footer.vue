<template>
  <footer>
    <div>
      <div class="container">
        <hr>
        <b>Brightcon 2023 is being jointly organized by:</b>
        <div class="row">
          <div class="col is-horizontal-align">
            <a href="https://www.d-d-s.ch/">
              <NuxtImg
                format="webp"
                class="logo-img"
                src="/images/dds-logo.png"
                alt="Départ de Sentier (DdS)"
              />
            </a>
          </div>
          <div class="col is-horizontal-align">
            <a href="https://www.list.lu/">
              <NuxtImg
                format="webp"
                class="logo-img"
                src="/images/LIST-logo.jpg"
                alt="Luxembourg Institute of Science and Techonology (LIST)"
              />
            </a>
          </div>
        </div>
        
        <div>
          <b>Organizing committee:</b>
        </div>
        
        <div class="row text-center">
          <div class="col">
             Chris Mutel
             <br>
             <a href="https://github.com/cmutel" rel="noopener" target="__blank"> <github-icon /> </a>
             <a href="https://www.linkedin.com/in/christopher-mutel-61b263b2" rel="noopener" target="__blank"> <linked-in-icon /> </a>
          </div>
          <div class="col">
            Karin Treyer
            <br>
            <a href="https://github.com/KarinTreyer" rel="noopener" target="__blank"> <github-icon /> </a>
            <a href="https://www.linkedin.com/in/karintreyer0777" rel="noopener" target="__blank"> <linked-in-icon /> </a>
          </div>
          <div class="col">  
            Tom&aacute;s Navarrete Guti&eacute;rrez
            <br>
            <a href="https://github.com/tngTUDOR" rel="noopener" target="__blank"> <github-icon /> </a>
            <a href="https://www.linkedin.com/in/tom4m3" rel="noopener" target="__blank"> <linked-in-icon /> </a>
            <a href="https://twitter.com/tomasN_list?t=l00iN9miHddObV3Ljy8m2A&s=09" rel="noopener" target="__blank"> <twitter-icon /> </a>
          </div>
        </div>
        <div>
          <b>Follow us on twitter</b>
        </div>
        <div class="row text-left">
          <div class="col">
            <a href="https://twitter.com/brightcon_media" rel="noopener" target="__blank"> <twitter-icon /> </a>
          </div>
          </div>
      </div>
    </div>
    <div class="bg-light">
      <div class="container with-padding-top with-padding-bottom">
        <route-recap></route-recap>
      </div>
      <div class="with-padding-bottom">
        <div class="text-center">
          ©2022 <a href="https://www.d-d-s.ch/">Départ de Sentier</a>,
          <a href="https://www.list.lu"
            >Luxembourg Institute of Science and Technology</a
          >
          | Contact Us | <NuxtLink to="/legal"> Legal Info </NuxtLink> |
          <NuxtLink to="/code-of-conduct"> Code of Conduct </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style @scoped>
/* footer {
    position: fixed;
    width: 100%;
    bottom: 0;
} */
.with-padding-top {
  padding-top: 2em;
}
.with-padding-bottom {
  padding-bottom: 1em;
}
.logo-img {
  height: 84px;
}
</style>
