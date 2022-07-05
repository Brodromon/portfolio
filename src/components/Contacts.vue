<template>
  <section class="contacts section fullscreen">
    <div class="contacts__bg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f7f7f7"
          fill-opacity="1"
          d="M0,320L40,293.3C80,267,160,213,240,208C320,203,400,245,480,229.3C560,213,640,139,720,128C800,117,880,171,960,197.3C1040,224,1120,224,1200,192C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div class="contacts__body container">
      <div class="contacts__form shadowed">
        <div class="contacts__form__title">Contact with me</div>
        <form action="">
          <input placeholder="Name" type="text" />
          <input placeholder="Tel" type="text" />
          <textarea rows="6" placeholder="Message" name="" id=""></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
    <div class="contacts__footer">
      <div class="left-side">
        <div class="name">Sviatoslav Pavelko</div>
        <div class="position">Front End Web Developer</div>
      </div>
      <div class="right-side">
        <div class="row">
          <div class="column">
            <div class="label">E-mail:</div>
            <div class="value">
              <a href="mailto:pavelko.slava16@gmail.com"
                >pavelko.slava16@gmail.com</a
              >
            </div>
          </div>
          <div class="column">
            <div class="label">Website:</div>
            <div class="value">
              <a href="brodromon.github.io">brodromon.github.io</a>
            </div>
          </div>
          <div class="column">
            <div class="label">Tel:</div>
            <div class="value">
              <a href="tel:+491634820941">+49 163 4820941</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  background: #fff !important;
  position: relative;
  &__bg {
    position: absolute;
    height: 40%;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f7f7f7;
    z-index: 1;
    svg {
      position: absolute;
      bottom: 100%;
      left: 0;
      right: 0;
    }
  }
  &__body {
    position: relative;
    z-index: 3;
  }
  &__form {
    background: #fff;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 400px;
    &__title {
      margin-bottom: 20px;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      input {
        border: 1px #d7d7d7 solid;
        padding: 5px 10px;
        margin-bottom: 10px;
        border-radius: 6px;
        font-size: 1em;
      }
      textarea {
        border: 1px #d7d7d7 solid;
        padding: 5px 10px;
        margin-bottom: 10px;
        border-radius: 6px;
        resize: none;
        font-size: 1em;
      }
      button {
        font-weight: bold;
        padding: 10px;
        background: #f7f7f7;
        border: 1px #d7d7d7 solid;
        border-radius: 6px;
      }
    }
  }
  &__footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 0 40px;
    background: #f7f7f7;
    .left-side {
      .name {
        font-size: 1.2em;
        color: #444;
      }
      .position {
        font-size: 0.8em;
      }
    }
    .right-side {
      .row {
        display: flex;
        .column {
          display: flex;
          font-size: 0.9em;
          margin-right: 10px;
          .label {
            font-weight: bold;
            margin-right: 5px;
          }
          .value {
            a {
              color: #000;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
}
</style>