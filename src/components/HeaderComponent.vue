<template>
  <div class="header">
    <div class="header__wrapper">
      <router-link class="header__link" to="/">
        <img
          class="header__images"
          src="@/assets/images/logo.svg"
          alt="Изображение макета дома на ладони"
        />
      </router-link>
      <BurgerComponent class="header-burger" @click="openMenu" />
      <nav class="header__nav">
        <router-link
          class="header__link"
          :to="itemMenu.link"
          v-for="(itemMenu, id) of arrayMenu"
          :key="id"
        >
          {{ itemMenu.name }}
        </router-link>
      </nav>
      <MobileMenuComponent
        class="header__mobile-menu"
        :showMenuMobile="showMenuMobile"
        :arrayMenu="arrayMenu"
      />
    </div>
  </div>
</template>

<script>
import BurgerComponent from "@/components/BurgerComponent";
import MobileMenuComponent from "@/components/mobileMenuComponent";

export default {
  name: "HeaderComponent",
  components: { BurgerComponent, MobileMenuComponent },
  data() {
    return {
      showMenuMobile: false,
      arrayMenu: [
        { link: "/", name: "Главная" },
        { link: "/about", name: "О нас" },
        { link: "/contact", name: "Контакт" },
      ],
    };
  },
  methods: {
    openMenu() {
      document.body.classList.toggle("hidden");
      document
        .querySelector(".header-burger")
        .classList.toggle("header__burger--active");
      this.showMenuMobile = !this.showMenuMobile;
    },
  },
};
</script>
<style lang="scss">
.test {
  font-size: 20px;
  color: red;
  text-align: center;
}
.header {
  position: relative;
  z-index: 4;
  background-color: var(--color-background-hover);
  &__wrapper {
    margin: 0 auto;
    padding: 0 15px;
    max-width: var(--wrapper-width);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__images {
    height: 100px;
  }
  &__nav {
    display: flex;
    align-items: center;
    gap: 15px;
    @include mobile {
      display: none;
    }
  }
  &__mobile-menu {
    top: 104px;
  }
  &__link {
    text-decoration: none;
    color: var(--color-text);
    &:hover {
      text-decoration: underline;
      color: var(--color-title);
    }
  }
}
</style>
