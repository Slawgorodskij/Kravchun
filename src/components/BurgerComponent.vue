<template>
  <div class="header__burger">
    <span class="header__burger_line"></span>
  </div>
</template>

<script>
export default {
  name: "BurgerComponent",
};
</script>

<style lang="scss">
.header__burger {
  @include burger;
  @include mobile {
    display: block;
  }
}
</style>
