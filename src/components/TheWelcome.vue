<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import CalendarIcon from './icons/IconCalendar.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <CalendarIcon />
    </template>
    <template #heading>Save the Date</template>
    This year, Brightcon will take place from <b>September 16th to September 20, 2023</b>.

  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Hybrid</template>
Brightcon 2023 will be a hybrid conference; online attendance will be possible for a fee. 
<i>Brightcon sold out last year</i>, so if you are interested, please save the date. Registration will open in May.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Sessions</template>
    The 16th and 17th will be a hackathon, while the 18th to the 20th will be the conference and teaching sessions. As with last <a href=https://2022.brightcon.link/>year</a>, the conference will be an interactive event, with talks required to have open and usable demonstrations. 
    In addition to talks, we will have plenty of tutorials and question-and-answer sessions. 
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Becoming a Sponsor</template>
    Are you interested in sponsoring Brightcon 2023? Take a look at the different options in the
        <RouterLink to="/sponsoring">dedicated page</RouterLink>
  </WelcomeItem>
</template>
