<template>
  <div id="app">
    <div id="fullscreen-wrapper" class="wrapper">
      <Banner />
      <MainSkills />
      <AdditionalSkills />
      <Projects />
      <Contacts />
    </div>

    {{ setLanguage() }}
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import MainSkills from "@/components/MainSkills.vue";
import AdditionalSkills from "@/components/AdditionalSkills.vue";
import Projects from "@/components/Projects.vue";
import Contacts from "@/components/Contacts.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    setLanguage() {
      let lang = this.$store.getters.getLangKey || "en";
      this.$ml.change(lang);
      this.$store.commit("setLanguage", lang);
      return "";
    },
  },
  computed: {
    ...mapGetters({
      langKey: "getLangKey",
    }),
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
