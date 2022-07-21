<template>
  <div class="performance-block">
    <div class="performance-block__wrapper">
      <h1 class="performance-block__title">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerformanceComponent",
  props: ["title"],
};
</script>

<style lang="scss">
.performance-block {
  height: 60vh;
  background-image: url("../assets/images/houseContactPage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  &__wrapper {
    margin: 0 auto;
    max-width: var(--wrapper-width);
  }
  &__title {
    margin: 0;
    padding: 50px 15px;
  }
}
</style>
