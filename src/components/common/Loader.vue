<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
  height: 15px;
  width: 15px;
  border: 3px rgb(100, 169, 100) solid;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotate 1s infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>