<template>
  <div class="about">
    <PerformanceComponent :title="title" />
    <MenuComponent />
    <div class="about__block-agency block-agency">
      <div class="container">
        <h2 class="block-agency__title">"Агенство недвижимости"</h2>
        <p class="block-agency__text">Лучшее в городе всегда ждет вас</p>
        <div class="block-agency__items">
          <div
            class="block-agency__item"
            v-for="(informationBlock, id) of aboutAgency"
            :key="id"
          >
            <figure class="block-agency__figure">
              <div class="block-agency__images">
                <img
                  class="block-agency__photo"
                  :src="getImgUrl(informationBlock.linkImages)"
                  :alt="informationBlock.descriptionPhoto"
                />
              </div>
              <figcaption class="block-agency__figcaption">
                <h3>{{ informationBlock.title }}</h3>
                <p>{{ informationBlock.text }}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="about__block-command block-command">
      <div class="container">
        <h2 class="block-command__title">Коллектив "Агенство недвижимости"</h2>
        <p class="block-command__text">
          Наши сотрудники имеют большой опыт работы и соответствующее
          образование позволяющее безопасно и грамотно сопровождать сделки с
          недвижимостью
        </p>
        <div class="block-command__items">
          <div
            class="block-command__item"
            v-for="(person, id) of aboutCommand"
            :key="id"
          >
            <figure class="block-command__figure">
              <div class="block-command__images">
                <img
                  class="block-command__photo"
                  :src="getImgUrl(person.linkImages)"
                  :alt="person.descriptionPhoto"
                />
              </div>
              <figcaption class="block-command__figcaption">
                <h3>{{ person.post }}</h3>
                <p>{{ person.lastname }}</p>
                <p>{{ person.firstName }} {{ person.patronymic }}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <FeedbackComponent />
  </div>
</template>
<script>
import MenuComponent from "@/components/MenuComponent";
import PerformanceComponent from "@/components/PerformanceComponent";
import FeedbackComponent from "@/components/FeedbackComponent";

export default {
  name: "ContactView",
  components: { MenuComponent, PerformanceComponent, FeedbackComponent },
  data() {
    return {
      title: "О нас",
      aboutAgency: [
        {
          linkImages: "benevolence.jpg",
          descriptionPhoto: "улыбающаяся девушка рассказывает молодой паре",
          title: "Доброжелательная атмосфера",
          text: "В нашем офисе всегда рады вас видеть",
        },
        {
          linkImages: "reliability.jpg",
          descriptionPhoto: "улыбающаяся девушка рассказывает молодой паре",
          title: "Надежность",
          text: "На рынке недвижимости более 5 лет",
        },
        {
          linkImages: "safety.jpg",
          descriptionPhoto: "сотрудники работают за столами в офисе",
          title: "Безопасность",
          text: "Все сделки в присутствии грамотных специалистов",
        },
      ],
      aboutCommand: [
        {
          linkImages: "avatar.jpg",
          descriptionPhoto: "фотография генерального директора",
          post: "Генеральный директор",
          lastname: "Иванова",
          firstName: "Мария",
          patronymic: "Ивановна",
        },
        {
          linkImages: "man.jpg",
          descriptionPhoto: "фотография юриста",
          post: "Юрист",
          lastname: "Васильев",
          firstName: "Василий",
          patronymic: "Васильевич",
        },
        {
          linkImages: "woman.jpg",
          descriptionPhoto: "фотография юриста",
          post: "Юрист",
          lastname: "Надежная",
          firstName: "Надежда",
          patronymic: "Николаевна",
        },
        {
          linkImages: "woman.jpg",
          descriptionPhoto: "фотография менеджера по продаже недвижимости",
          post: "Менеджер по продаже недвижимости",
          lastname: "Петрова",
          firstName: "Екатерина",
          patronymic: "Константиновна",
        },
        {
          linkImages: "man.jpg",
          descriptionPhoto: "фотография менеджера по продаже недвижимости",
          post: "Менеджер по продаже недвижимости",
          lastname: "Сидоров",
          firstName: "Сидор",
          patronymic: "Сидорович",
        },
        {
          linkImages: "woman.jpg",
          descriptionPhoto: "фотография менеджера по продаже недвижимости",
          post: "Менеджер по продаже недвижимости",
          lastname: "Глянцева",
          firstName: "Анастасия",
          patronymic: "Васильевна",
        },
      ],
    };
  },
  methods: {
    getImgUrl(nameImages) {
      return require("@/assets/images/" + nameImages);
    },
  },
};
</script>
<style lang="scss">
.about {
  min-height: 100vh;
  //@include flex;
}

.block-agency {
  padding: 100px 0;

  &__text {
    margin-bottom: 50px;
    width: 60vw;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  &__item {
    border: 1px solid var(--color-border);
    border-radius: 4px;
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);

    &:last-child {
      margin-right: 0;
    }
  }

  &__figure {
    margin: 0;
    padding: 0;
  }

  &__images {
    position: relative;
    height: 40vh;
    border-radius: 3px;
  }

  &__photo {
    @include photo-image;
  }

  &__figcaption {
    padding: 10px;
  }
}

.block-command {
  padding: 100px 0;
  //background-color: var(--color-background-body-dark);

  &__text {
    margin-bottom: 50px;
    width: 60vw;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    row-gap: 50px;
  }

  &__item {
    border-radius: 30px 30px 5px 5px;
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);

    &:last-child {
      margin-right: 0;
    }
  }

  &__figure {
    margin: 0;
    padding: 0;
  }

  &__images {
    position: relative;
    height: 30vh;
  }

  &__photo {
    @include photo-image;
    border-radius: 15px 15px 0 0;
  }

  &__figcaption {
    padding: 10px;
    background-color: var(--color-white);
    border-radius: 0 0 5px 5px;
  }
}
</style>
