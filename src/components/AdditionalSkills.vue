<template>
  <section class="additional-skills section fullscreen">
    <div class="additional-skills__body container">
      <div class="additional-skills__info info">
        <div class="additional-skills__row">
          <div class="additional-skills__column" id="qwe">
            <div class="column-inner">
              <div class="column-title shadowed">{{ $ml.get("Markup") }}</div>
              <div class="column-list shadowed">
                <div class="column-list__item">HTML5</div>
                <div class="column-list__item">CSS3</div>
                <div class="column-list__item">Less, Sass, Scss</div>
                <div class="column-list__item">Bootstrap, Materialize</div>
                <div class="column-list__item">Gulp</div>
              </div>
            </div>
          </div>
          <div class="additional-skills__column">
            <div class="column-inner">
              <div class="column-title shadowed">
                {{ $ml.get("Development") }}
              </div>
              <div class="column-list shadowed">
                <div class="column-list__item">JavaScript</div>
                <div class="column-list__item">Vue.js (2,3)</div>
                <div class="column-list__item">Vuex, Vue router</div>
                <div class="column-list__item">JQuery</div>
                <div class="column-list__item">REST API</div>
                <div class="column-list__item">ES6</div>
              </div>
            </div>
          </div>
          <div class="additional-skills__column">
            <div class="column-inner">
              <div class="column-title shadowed">{{ $ml.get("Services") }}</div>
              <div class="column-list shadowed">
                <div class="column-list__item">Git</div>
                <div class="column-list__item">html2pdf</div>
                <div class="column-list__item">Open Server</div>
                <div class="column-list__item">Figma</div>
                <div class="column-list__item">CodePen</div>
              </div>
            </div>
          </div>
          <div class="additional-skills__column">
            <div class="column-inner">
              <div class="column-title shadowed">
                {{ $ml.get("Additional") }}
              </div>
              <div class="column-list shadowed">
                <div class="column-list__item">PHP (Laravel)</div>
                <div class="column-list__item">MySQL</div>
                <div class="column-list__item">WordPress</div>
                <div class="column-list__item">Docker</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-title">
        <div class="section-title__body">
          <div class="section-title__number">02</div>
          <div class="section-title__text">{{ $ml.get("Skills") }}</div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.additional-skills {
  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    // flex-direction: column;
  }

  &__column {
    background-color: transparent;
    perspective: 1000px;
    height: 25vh;
    width: 25vh;
    min-width: 165px;
    min-height: 165px;
    box-sizing: border-box;
    margin: 10px;
    border-radius: 6px;
    &.active,
    &:hover {
      .column-inner {
        transform: rotateY(180deg);
      }
    }
    .column-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.4s;
      transform-style: preserve-3d;
      transform-origin: center;
    }
    .column-title,
    .column-list {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    .column-title {
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .column-list {
      background-color: #284682;
      color: #fff;
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      &__item {
        margin: 3px 0;
      }
    }
  }
}
</style>