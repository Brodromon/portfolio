<template>
  <section class="main-skills section fullscreen">
    <div class="main-skills__body container">
      <div class="section-title">
        <div class="section-title__body">
          <div class="section-title__number">01</div>
          <div class="section-title__text">About</div>
        </div>
      </div>
      <div class="main-skills__info info">
        <div class="main-skills__about">
          <h2>Hello there,</h2>
          <p>
            Thank you for visiting my web site. <br /><br />

            My name is Sviatoslav and I'm a Front-end developer with over 2
            years experience in creating websites and web applications.
            Currently I live in Apolda, Germany and I'm looking for a job as a
            Front-end developer in Germany or remotely. <br /><br />

            I have experience in developing mobile-first web applications using
            Vue and then converting it into a mobile application using React
            Native WebView. <br /><br />

            Backend and databases are also not alien to me, I had experience
            working with them.
          </p>
        </div>
        <div class="main-skills__skills-sliders">
          <div class="main-skills__label">Languages I speek</div>
          <div class="slider">
            <div class="slider__label">Russian</div>
            <div class="slider__row 82">
              <div class="slider__row__inner"></div>
            </div>
          </div>
          <div class="slider">
            <div class="slider__label">Ukrainian</div>
            <div class="slider__row 80">
              <div class="slider__row__inner"></div>
            </div>
          </div>
          <div class="slider">
            <div class="slider__label">Polish</div>
            <div class="slider__row 63">
              <div class="slider__row__inner"></div>
            </div>
          </div>
          <div class="slider">
            <div class="slider__label">English</div>
            <div class="slider__row 60">
              <div class="slider__row__inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-skills {
  &__about {
    font-size: 0.9em;
    margin-bottom: 60px;
  }
  &__skills-sliders {
    width: 100%;
  }
  &__label {
    font-size: 0.9em;
    margin-bottom: 30px;
    font-weight: bold;
  }
}
.slider {
  margin-bottom: 15px;
  &__label {
    margin-bottom: 7px;
    font-size: 0.9em;
  }
  &__row {
    position: relative;
    height: 4px;
    background: #f5f5f5;
    &__inner {
      width: 50%;
      height: 100%;
      position: absolute;
      background: #284682;
    }
  }
}
</style>