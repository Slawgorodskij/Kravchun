<template>
  <div class="menu" :class="{ active: isActive, fixed: isFixed }">
    <div class="menu__wrapper">
      <router-link class="nav__link" to="/">
        <img
          class="menu__images"
          src="@/assets/images/logo.png"
          alt="Кравчун Л.В."
        />
      </router-link>
      <nav class="menu__nav">
        <router-link class="menu__link" to="/">Главная</router-link>
        <router-link class="menu__link" to="/about">Обо мне</router-link>
        <router-link class="menu__link" to="/contact">Контакт</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      isActive: false,
      isFixed: false,
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
  },
};
</script>

<style lang="scss">
.menu {
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
  }

  &__link {
    color: var(--color-link);

    &:hover {
      text-decoration: underline;
      color: var(--color-link-hover);
    }
  }
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
