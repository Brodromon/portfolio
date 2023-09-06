<template>
  <section class="main-skills section fullscreen">
    <div class="main-skills__body container">
      <div class="section-title">
        <div class="section-title__body">
          <div class="section-title__number">01</div>
          <div class="section-title__text">{{ $ml.get("About") }}</div>
        </div>
      </div>
      <div class="main-skills__info info">
        <div class="main-skills__about">
          <h2>{{ $ml.get("Hello there") }},</h2>
          <p>
            {{ $ml.get(`Thank you for visiting my website.`) }} <br /><br />

            {{
              $ml.get(`My name is Sviatoslav and I'm a Front-end developer with over 2
            years experience in creating websites and web applications.
            Currently I live in Apolda, Germany and I'm looking for a job as a
            Front-end developer in Germany or remotely.`)
            }}
            <br /><br />

            {{
              $ml.get(`I have experience in developing mobile-first web applications using
            Vue and then converting it into a mobile application using React
            Native WebView.`)
            }}
            <br /><br />

            {{
              $ml.get(`Backend and databases are also not alien to me, I had experience
            working with them.`)
            }}
          </p>
        </div>
        <div class="main-skills__skills-sliders">
          <div class="main-skills__label">
            {{ $ml.get("Languages I speek") }}
          </div>
          <div class="slider">
            <div class="slider__label">{{ $ml.get("Russian") }}</div>
            <div class="slider__row">
              <div class="slider__row__inner" style="width: 100%"></div>
            </div>
          </div>
          <div class="slider">
            <div class="slider__label">{{ $ml.get("Ukrainian") }}</div>
            <div class="slider__row 80">
              <div class="slider__row__inner" style="width: 100%"></div>
            </div>
          </div>
          <div class="slider">
            <div class="slider__label">{{ $ml.get("Polish") }}</div>
            <div class="slider__row">
              <div class="slider__row__inner" style="width: 70%"></div>
            </div>
          </div>
          <div class="slider">
            <div class="slider__label">{{ $ml.get("English") }}</div>
            <div class="slider__row">
              <div class="slider__row__inner" style="width: 60%"></div>
            </div>
          </div>
          <div class="slider">
            <div class="slider__label">{{ $ml.get("German") }}</div>
            <div class="slider__row">
              <div class="slider__row__inner" style="width: 60%"></div>
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
    overflow: hidden;
    &__inner {
      width: 50%;
      height: 100%;
      position: absolute;
      background: #284682;
    }
  }
}
</style>