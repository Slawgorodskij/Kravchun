<template>
  <div class="home">
    <div class="home__performance performance">
      <img class="performance__images" src="@/assets/images/house.jpg" alt="" />
      <div class="performance__block">
        <img src="@/assets/images/logo-v.png" alt="" />
        <h1 class="performance__title">{{ performanceTitle }}</h1>
        <div class="performance__arrow-block">
          <svg
            class="performance__arrow"
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
          >
            <path
              d="M10.9393 21.0607C11.5251 21.6464 12.4749 21.6464 13.0607 21.0607L22.6066 11.5147C23.1924 10.9289 23.1924 9.97919 22.6066 9.3934C22.0208 8.80761 21.0711 8.80761 20.4853 9.3934L12 17.8787L3.51472 9.3934C2.92893 8.80761 1.97918 8.80761 1.3934 9.3934C0.807611 9.97918 0.807611 10.9289 1.3934 11.5147L10.9393 21.0607ZM10.5 -6.55671e-08L10.5 20L13.5 20L13.5 6.55671e-08L10.5 -6.55671e-08Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <MenuComponent />
    <section
      class="home__presentation presentation"
      :class="{ presentation__active: isPresentationActive }"
    >
      <div class="presentation__wrapper">
        <div
          class="presentation__item slogan"
          :class="{ presentation__item_active: isPresentationItemActive }"
        >
          <p class="slogan__title">Наша цель</p>
          <p class="slogan__text">{{ sloganText }}</p>
        </div>
        <div
          class="presentation__item marketing"
          :class="{ presentation__item_active: isPresentationItemActive }"
        >
          <p
            class="marketing__text"
            v-for="(text, id) in marketingText"
            :key="id"
          >
            {{ text }}
          </p>

          <div class="marketing__block">
            <div class="marketing__block-image">
              <img
                class="marketing__img"
                src="@/assets/images/avatar.jpg"
                alt="фотография"
              />
            </div>
            <div class="marketing__block-name">
              <p class="marketing__lastname">Кравчун</p>
              <p class="marketing__firstname">Людмила Владимировна</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home__services services">
      <div class="services__wrapper">
        <transition name="title">
          <h2 v-if="showTitle" class="services__title">Оказываем помощь</h2>
        </transition>

        <div class="services__item services__item_mb-25">
          <p
            class="services__activity"
            v-for="(text, id) in activityItem"
            :key="id"
          >
            {{ text }}
          </p>
        </div>

        <div class="services__item">
          <p
            class="services__estate"
            v-for="(text, id) in estateItem"
            :key="id"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </section>
    <div class="home__feedback feedback">
      <h2 class="feedback__title">Свяжитесь с нами</h2>
      <p class="feedback__text">
        Мы с удовольствием поможем найти недвижимость вашей мечты. Оформить
        документы. Провести безопасные сделки.
      </p>
      <router-link class="feedback__transition" to="/contact"
        >Контакт</router-link
      >
    </div>
  </div>
</template>

<script>
import MenuComponent from "@/components/MenuComponent";
export default {
  name: "HomeView",
  components: { MenuComponent },
  data() {
    return {
      performanceTitle:
        "Мы здесь, чтобы оформление недвижимости прошло с успехом.",
      sloganText:
        "Мы стремимся обеспечить безопасность ваших сделок с недвижимостью.",
      marketingText: [
        "Вы, как покупатель или продавец недвижимости, столкнетесь с огромным количеством вопросов при оформлении документов.",

        "Имея большой опыт работы в данном направлении мы готовы помочь в поиске недвижимости и сборе необходимых документов юридически грамотном оформлении.",
      ],
      activityItem: ["При покупке", "Продаже", "Аренде"],
      estateItem: ["Квартир", "Гаражей", "Дач"],
      isPresentationActive: false,
      isPresentationItemActive: false,
      showTitle: false,
    };
  },
  created() {
    document.addEventListener("scroll", this.showMenu);
    document.addEventListener("scroll", this.fixedMenu);
    document.addEventListener("scroll", this.showPresentationItemBlock);
    document.addEventListener("scroll", this.showText);
  },
  computed: {
    heightBlockPerformance() {
      return document.querySelector(".performance").clientHeight;
    },
    heightBlockHeader() {
      return document.querySelector(".header").clientHeight;
    },
    heightBlockMenu() {
      return document.querySelector(".menu").clientHeight;
    },
    heightBlockPresentation() {
      return document.querySelector(".presentation").clientHeight;
    },
    browserWindowSize() {
      return document.documentElement.clientHeight;
    },
    distanceToBlockServices() {
      return document.querySelector(".services").offsetTop;
    },
    elemServicesActivity() {
      return document.querySelectorAll(".services__activity");
    },
    elemServicesEstate() {
      return document.querySelectorAll(".services__estate");
    },
  },
  methods: {
    addingClassElements(nameArray, nameClass) {
      nameArray.forEach((elem) => {
        elem.classList.add(nameClass);
      });
    },
    removeClassFromAnElement(nameArray, nameClass) {
      nameArray.forEach((elem) => {
        elem.classList.remove(nameClass);
      });
    },
    showPresentationBlock() {
      this.isPresentationActive = true;
    },
    unShowPresentationBlock() {
      this.isPresentationActive = false;
    },
    showPresentationItemBlock() {
      const scrollTopDoc = document.documentElement.scrollTop;
      if (
        scrollTopDoc >
        this.heightBlockMenu + this.heightBlockPresentation / 2
      ) {
        this.isPresentationItemActive = true;
        setTimeout(this.showPresentationBlock, 1000);
        document.removeEventListener("scroll", this.showPresentationItemBlock);
        document.addEventListener("scroll", this.unShowPresentationItemBlock);
      }
    },
    unShowPresentationItemBlock() {
      const scrollTopDoc = document.documentElement.scrollTop;
      if (
        scrollTopDoc <
        this.heightBlockMenu + this.heightBlockPresentation / 2
      ) {
        this.isPresentationItemActive = false;
        setTimeout(this.unShowPresentationBlock, 300);
        document.removeEventListener(
          "scroll",
          this.unShowPresentationItemBlock
        );
        document.addEventListener("scroll", this.showPresentationItemBlock);
      }
    },
    showText() {
      const scrollTopDoc = document.documentElement.scrollTop;
      if (
        scrollTopDoc >
        this.distanceToBlockServices - (this.browserWindowSize / 100) * 60
      ) {
        this.showTitle = true;
        setTimeout(
          () =>
            this.addingClassElements(
              this.elemServicesActivity,
              "services__animation-text"
            ),
          300
        );
        setTimeout(
          () =>
            this.addingClassElements(
              this.elemServicesEstate,
              "services__animation-text"
            ),
          1000
        );
        document.removeEventListener("scroll", this.showText);
        document.addEventListener("scroll", this.unShowText);
      }
    },
    unShowText() {
      const scrollTopDoc = document.documentElement.scrollTop;
      if (
        scrollTopDoc <
        this.distanceToBlockServices - (this.browserWindowSize / 100) * 60
      ) {
        this.showTitle = false;
        setTimeout(
          () =>
            this.removeClassFromAnElement(
              this.elemServicesActivity,
              "services__animation-text"
            ),
          300
        );
        setTimeout(
          () =>
            this.removeClassFromAnElement(
              this.elemServicesEstate,
              "services__animation-text"
            ),
          100
        );
        document.removeEventListener("scroll", this.unShowText);
        document.addEventListener("scroll", this.showText);
      }
    },
  },
};
</script>

<style lang="scss">
.performance {
  @include flex-all-center;
  position: relative;
  min-height: calc(100vh - 100px);

  &__images {
    @include photo-image;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-hover-dark);
  }

  &__title {
    margin-bottom: 100px;
    text-align: center;
    @include mobile {
      font-size: 25px;
    }
  }

  &__block {
    padding: 15px;
    position: relative;
    @include flex-all-center;
    flex-direction: column;
    color: var(--color-white);
    z-index: 3;
  }

  &__arrow-block {
    padding: 15px;
    @include flex-all-center;
    border: 1px solid var(--color-white);
    border-radius: 50%;
  }

  &__arrow {
    animation: color 2s infinite alternate;
  }
}

.active {
  transform: translate(0, 0);
  opacity: 1;
  transition: transform 0.5s linear;
  animation: showMenu 1s linear;
}

.presentation {
  &__active {
    background-color: var(--color-background-body-dark);
  }

  &__wrapper {
    margin: 0 auto;
    display: flex;
    max-width: var(--wrapper-width);
    @include mobile {
      flex-direction: column;
    }
  }

  &__item {
    padding: 15px;
    min-height: 60vh;
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-background-body-dark);
    transform: rotateY(270deg);
    transition: transform 1s linear;
    @include mobile {
      min-height: 40vh;
      transform: rotateX(270deg);
    }

    &_active {
      transform: rotateY(360deg);
      @include mobile {
        transform: rotateX(360deg);
      }
    }
  }
}

.slogan {
  &__title {
    font-size: 12px;
    color: var(--color-red);
  }

  &__text {
    font-size: 48px;
    color: var(--color-text);
  }
}

.marketing {
  &__text {
    padding-top: 5px;
    &:first-child {
      padding-top: 0;
    }
  }

  &__block {
    padding-top: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__block-image {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__lastname {
    font-size: 20px;
  }
}

.services {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 60vh;
  background-image: url("../assets/images/model.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/dots.png");
    z-index: 2;
  }

  &__wrapper {
    margin: 0 auto;
    max-width: var(--wrapper-width);
    z-index: 3;
  }

  &__title {
    margin-bottom: 100px;
    text-align: center;
    font-size: 42px;
    color: var(--color-red);
    @include mobile {
      font-size: 30px;
    }
  }

  &__item {
    margin: 0 auto;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    font-size: 32px;
    @include mobile {
      font-size: 20px;
    }

    &_mb-25 {
      margin-bottom: 100px;
    }
  }

  &__activity {
    text-align: center;
    color: var(--color-link-hover);
    opacity: 0;
    transform: translateX(30px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  &__estate {
    text-align: center;
    color: var(--color-white);
    opacity: 0;
    transform: translateX(30px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  &__animation-text {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.4s ease, transform 0.4s ease;

    &:nth-child(2) {
      transition-delay: 0.3s;
    }

    &:nth-child(3) {
      transition-delay: 0.6s;
    }
  }
}

.title-enter-active {
  animation: title-in 0.5s;
}

.title-leave-active {
  animation: title-in 0.5s reverse;
}

.text-enter-active {
  animation: showText 0.5s;
}

.text-leave-active {
  animation: showText 0.5s reverse;
}
.feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: var(--color-hover-dark);
  color: var(--color-white);
  &__text {
    margin-bottom: 50px;
    max-width: 45vw;
    text-align: center;
  }
  &__transition {
    padding: 10px 0;
    width: 45vw;
    background-color: var(--color-field-background);
    font-size: 18px;
    color: var(--color-text);
    text-align: center;
    border: 1px solid var(--color-button-backgraund);
    border-radius: 5px;
    transition: all 0.5s ease;
    &:hover {
      background-color: var(--color-background-hover);
      color: var(--color-white);
    }
  }
}
</style>
