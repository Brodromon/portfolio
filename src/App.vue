<template>
  <div id="app">
    <div id="fullscreen-wrapper" class="wrapper">
      <Banner />
      <MainSkills />
      <AdditionalSkills />
      <Projects />
      <Contacts />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import MainSkills from "@/components/MainSkills.vue";
import AdditionalSkills from "@/components/AdditionalSkills.vue";
import Projects from "@/components/Projects.vue";
import Contacts from "@/components/Contacts.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Banner,
    MainSkills,
    AdditionalSkills,
    Projects,
    Contacts,
  },
};
</script>
