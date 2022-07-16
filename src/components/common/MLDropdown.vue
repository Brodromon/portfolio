<template>
  <div
    v-click-outside="hide"
    :class="{ opened: openedDropdown }"
    class="ml-dropdown"
  >
    <div @click="openedDropdown = true" class="selected-language">
      <img :src="flags[selectedLanguage.abr]" alt="" />
      {{ selectedLanguage.title }}
    </div>
    <ul class="languages">
      <li
        @click="setLanguage(lang.abr)"
        class="languages__item"
        v-for="lang in languages.filter(
          (el) => el.abr !== selectedLanguage.abr
        )"
        :key="lang.abr"
      >
        <img :src="flags[lang.abr]" alt="" />
        {{ lang.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ClickOutside from "vue-click-outside";
export default {
  data() {
    return {
      val: 0,
      flags: {
        en: require(`@/assets/img/flags/en.svg`),
        pl: require(`@/assets/img/flags/pl.svg`),
        de: require(`@/assets/img/flags/de.svg`),
        ukr: require(`@/assets/img/flags/ukr.svg`),
        ru: require(`@/assets/img/flags/ru.svg`),
      },
      openedDropdown: false,
    };
  },
  computed: {
    ...mapGetters({
      languages: "getLanguages",
      selectedLanguage: "getSelectedLanguage",
    }),
  },
  methods: {
    setLanguage(key) {
      this.$store.dispatch("setLangKey", key);
      this.$ml.change(key);
    },
    hide(val) {
      this.openedDropdown = false;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
.ml-dropdown {
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  &.opened {
    .selected-language {
      border-bottom: 1px solid #cecece;
      &:hover {
        box-shadow: inset 0 0 10px #bbb;
      }
    }
    .languages {
      height: auto;
    }
  }
  .selected-language {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 10px;
    font-size: 0.9em;
    color: #000;
    &:hover {
      box-shadow: inset 0 0 10px #666;
    }
    img {
      width: 25px;
      margin-right: 6px;
    }
  }
  .languages {
    margin: 0;
    padding: 0;
    background: #fff;
    border-radius: 0 0 6px 6px;
    overflow: hidden;
    height: 0;
    transition: 0.2s ease;

    &__item {
      color: #000;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 5px 10px;
      font-size: 0.9em;
      &:hover {
        box-shadow: inset 0 0 10px #bbb;
      }
      img {
        width: 25px;
        margin-right: 6px;
      }
    }
  }
}

@media (max-width: 500px) {
  .selected-language,
  .languages__item {
    font-size: 1.1em !important;
  }
}
</style>