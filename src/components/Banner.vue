<template>
  <section class="banner fullscreen">
    <img class="banner__bg" src="@/assets/img/banner2.jpg" alt="" />
    <div class="banner__body">
      <div class="banner__title name">Sviatoslav Pavelko</div>
      <div class="banner__text position">Front End Web Developer</div>
      <nav class="banner__links">
        <div class="link-item"><a href="" class="link-item__link"></a></div>
        <div class="link-item"><a href="" class="link-item__link"></a></div>
        <div class="link-item"><a href="" class="link-item__link"></a></div>
        <div class="link-item"><a href="" class="link-item__link"></a></div>
        <div class="link-item"><a href="" class="link-item__link"></a></div>
      </nav>
    </div>
    <div class="down-arrow"></div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 100vh;
  width: 100%;
  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: -2;
  }
  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -3;
    object-fit: cover;
    object-position: bottom;
  }

  &__body {
    max-width: 920px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    margin: 0 auto;
    top: -10%;
    position: relative;
    padding: 0 30px;
    * {
      color: #fff;
    }
  }

  &__title {
    font-size: 3em;
    letter-spacing: 2px;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  &__text {
    font-size: 1.3em;
  }

  &__links {
  }
}
</style>