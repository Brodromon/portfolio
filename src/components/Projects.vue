<template>
  <section class="projects section fullscreen">
    <div class="projects__body container">
      <div class="section-title">
        <div class="section-title__body">
          <div class="section-title__number">03</div>
          <div class="section-title__text">{{ $ml.get("Projects") }}</div>
        </div>
      </div>
      <div class="projects__list">
        <a href="" class="project shadowed">
          <img src="./../assets/img/oxxo.png" alt="" />
          <div class="project__link">
            <div class="project__name">O<span>XX</span>O</div>
            <span>{{ $ml.get("visit a website") }}</span>
          </div>
        </a>
        <a href="" class="project shadowed">
          <img src="./../assets/img/tic-tac-toe.png" alt="" />
          <div class="project__link">
            <div class="project__name">Tic <span>Tac</span> Toe</div>
            <span>{{ $ml.get("visit a website") }}</span>
          </div>
        </a>
        <a
          href="https://brodromon.github.io/sites/new_providence/index.html"
          class="project shadowed"
        >
          <img src="./../assets/img/newprovedence.png" alt="" />
          <div class="project__link">
            <div class="project__name">New<span>Providence</span></div>
            <span>{{ $ml.get("visit a website") }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  &__body {
  }

  &__list {
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
  }
}
.project {
  flex: 1 0 calc(50% - 20px);
  margin: 10px;
  overflow: hidden;
  position: relative;

  &::before {
    position: absolute;
    background: rgba(0, 0, 0, 0);
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.2s ease;
  }
  &:hover {
    &::before {
      background: rgba(0, 0, 0, 0.6);
    }
    .project__link {
      top: 0;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__link {
    position: absolute;
    top: 150%;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease;
  }
  &__name {
    color: #fff;
    text-transform: uppercase;
    font-size: 100%;
    font-size: 2.2em;
    span {
      font-weight: bold;
    }
  }
  span {
    color: #fff;
  }
}
</style>