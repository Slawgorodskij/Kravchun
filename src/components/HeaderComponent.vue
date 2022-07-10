<template>
  <div class="header">
    <!--    <p class="test">Образец</p>-->
    <div class="header__wrapper">
      <router-link class="header__link" to="/">
        <img
          class="header__images"
          src="@/assets/images/logo.png"
          alt="Кравчун Л.В."
        />
      </router-link>
      <nav class="header__nav">
        <router-link class="header__link" to="/">Главная</router-link>
        <router-link class="header__link" to="/about">Обо мне</router-link>
        <router-link class="header__link" to="/contact">Контакты</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
<style lang="scss">
.test {
  font-size: 20px;
  color: red;
  text-align: center;
}
.header {
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
  }
  &__link {
    color: var(--color-text);
    &:hover {
      text-decoration: underline;
      color: var(--color-title);
    }
  }
}
</style>
