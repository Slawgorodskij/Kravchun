<template>
  <div class="menu" :class="{ active: isActive, fixed: isFixed }">
    <div class="menu__wrapper">
      <router-link class="nav__link" to="/">
        <img
          class="menu__images"
          src="@/assets/images/logo.svg"
          alt="Изображение макета дома на ладони"
        />
      </router-link>
      <BurgerComponent class="mobile-burger" @click="openMenu" />
      <nav class="menu__nav">
        <router-link
          class="menu__link"
          :to="itemMenu.link"
          v-for="(itemMenu, id) of arrayMenu"
          :key="id"
        >
          {{ itemMenu.name }}
        </router-link>
      </nav>
      <MobileMenuComponent
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
  name: "MenuComponent",
  components: { BurgerComponent, MobileMenuComponent },
  data() {
    return {
      isActive: false,
      isFixed: false,
      showMenuMobile: false,
      arrayMenu: [
        { link: "/", name: "Главная" },
        { link: "/about", name: "О нас" },
        { link: "/contact", name: "Контакт" },
      ],
    };
  },
  created() {
    document.addEventListener("scroll", this.showMenu);
    document.addEventListener("scroll", this.fixedMenu);
  },
  computed: {
    heightBlockHeader() {
      return document.querySelector(".header").clientHeight;
    },
    heightBlockMenu() {
      return document.querySelector(".menu").clientHeight;
    },
    distanceToBlockMenu() {
      return document.querySelector(".menu").offsetTop;
    },
  },
  methods: {
    showMenu() {
      const scrollTopDoc = document.documentElement.scrollTop;
      if (scrollTopDoc > this.heightBlockHeader) {
        this.isActive = true;
        document.removeEventListener("scroll", this.showMenu);
        document.addEventListener("scroll", this.unShowMenu);
      }
    },
    unShowMenu() {
      const scrollTopDoc = document.documentElement.scrollTop;
      if (scrollTopDoc < this.heightBlockHeader) {
        this.isActive = false;
        document.removeEventListener("scroll", this.unShowMenu);
        document.addEventListener("scroll", this.showMenu);
      }
    },
    fixedMenu() {
      const scrollTopDoc = document.documentElement.scrollTop;
      if (scrollTopDoc > this.distanceToBlockMenu) {
        this.isFixed = true;
        document.removeEventListener("scroll", this.fixedMenu);
        document.addEventListener("scroll", this.unFixedMenu);
      }
    },
    unFixedMenu() {
      const scrollTopDoc = document.documentElement.scrollTop;
      if (scrollTopDoc < this.distanceToBlockMenu) {
        this.isFixed = false;
        document.removeEventListener("scroll", this.unFixedMenu);
        document.addEventListener("scroll", this.fixedMenu);
      }
    },
    openMenu() {
      document.body.classList.toggle("hidden");
      document
        .querySelector(".mobile-burger")
        .classList.toggle("header__burger--active");
      this.showMenuMobile = !this.showMenuMobile;
    },
  },
};
</script>

<style lang="scss">
.hidden {
  overflow: hidden;
}

.menu {
  position: relative;
  background-color: var(--color-hover-dark);
  transform: translate(-100%, 0);
  transition: transform 0.5s linear;
  animation: unShowMenu 1s linear;
  z-index: 4;

  &__wrapper {
    margin: 0 auto;
    padding: 0 15px;
    @include flex-all-sb;
    max-width: var(--wrapper-width);
  }

  &__images {
    height: 50px;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 15px;
    @include mobile {
      display: none;
    }
  }

  &__link {
    text-decoration: none;
    color: var(--color-link);

    &-mobile {
      padding-top: 50px;
      font-size: 25px;
    }

    &:hover {
      text-decoration: underline;
      color: var(--color-link-hover);
    }
  }
}

.active {
  position: sticky;
  transform: translate(0, 0);
  opacity: 1;
  transition: transform 0.5s linear;
  animation: showMenu 1s linear;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
