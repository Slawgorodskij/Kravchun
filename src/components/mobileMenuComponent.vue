<template>
  <transition name="mobile">
    <nav class="menu__mobile" v-if="showMenuMobile">
      <a
        class="menu__link menu__link-mobile"
        v-for="(itemMenu, id) of arrayMenu"
        :href="itemMenu.link"
        :key="id"
      >
        {{ itemMenu.name }}
      </a>
    </nav>
  </transition>
</template>

<script>
export default {
  name: "mobileMenuComponent",
  props: ["arrayMenu", "showMenuMobile"],
};
</script>

<style lang="scss">
.menu {
  &__mobile {
    @include flex-v-center;
    flex-direction: column;
    position: absolute;
    top: 54px;
    left: 0;
    width: 100%;
    height: calc(100vh - 50px);
    background-color: var(--color-hover-dark);
  }
}
.mobile-enter-active {
  animation: showMobileMenu 0.5s;
}

.mobile-leave-active {
  animation: showMobileMenu 0.5s reverse;
}
</style>
