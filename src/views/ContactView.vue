<template>
  <div class="contact">
    <PerformanceComponent :title="title" />
    <MenuComponent />
    <div class="contact__information">
      <div class="contact__item contact__list-information">
        <p class="contact__element">ФАМИЛИЯ:</p>
        <p class="contact__element">{{ lastname }}</p>
        <p class="contact__element">ИМЯ:</p>
        <p class="contact__element">{{ firstname }}</p>
        <p class="contact__element">ОТЧЕСТВО:</p>
        <p class="contact__element">{{ patronymic }}</p>
        <p class="contact__element">ТЕЛЕФОН:</p>
        <a class="contact__element contact__element_link" :href="hrefPhone">
          {{ phone }}
        </a>
        <p class="contact__element">ПОЧТА:</p>
        <a class="contact__element contact__element_link" :href="email">
          {{ email }}
        </a>
        <p class="contact__element">Рабочее время:</p>
        <div class="contact__element">
          <p class="contact__element_text">Пн - Пт - с 9:00 до 19:00</p>
          <p class="contact__element_text">Сб - Вс - выходной</p>
        </div>
      </div>
      <div class="contact__item">
        <img
          class="contact__images"
          src="@/assets/images/avatar.jpg"
          alt="Фото руководителя"
        />
      </div>
    </div>
    <section class="contact__address address">
      <div class="container">
        <h2 class="address__title">Наш адрес:</h2>
        <div class="address__item">
          <p>г. Кемерово</p>
          <p>ул. Известная дом 1 офис 1</p>
        </div>
        <div ref="mapContainer" class="address__block-map"></div>
      </div>
    </section>
    <FeedbackComponent />
  </div>
</template>

<script>
import MenuComponent from "@/components/MenuComponent";
import PerformanceComponent from "@/components/PerformanceComponent";
import FeedbackComponent from "@/components/FeedbackComponent";
import "leaflet/dist/leaflet.css";
import LMap from "leaflet";

export default {
  name: "ContactView",
  components: { MenuComponent, PerformanceComponent, FeedbackComponent },
  data() {
    return {
      title: "Контактная информация",
      lastname: "Иванова",
      firstname: "Мария",
      patronymic: "Ивановна",
      hrefPhone: "tel:+7-777-666-55-44",
      phone: "8-777-666-55-44",
      email: "hfhhhf@huhuhu.com",
    };
  },
  methods: {
    createMapInstance() {
      const map = LMap.map(this.$refs.mapContainer, {
        preferCanvas: true,
      }).setView([55.3555, 86.1533], 13);

      const mapLayer = LMap.tileLayer(
        "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }
      );
      map.addLayer(mapLayer);
      return map;
    },
    renderMap() {
      console.log(this.createMapInstance());
    },
  },
  mounted() {
    this.renderMap();
  },
};
</script>

<style lang="scss">
.contact {
  position: relative;
  &__information {
    margin: 0 auto;
    padding: 150px 0;
    display: flex;
    max-width: var(--wrapper-width);
  }
  &__item {
    position: relative;
    padding: 15px;
    flex: 0 0 50%;
    height: 60vh;
  }
  &__list-information {
    display: grid;
    align-items: end;
    grid-template-columns: repeat(2, 1fr);
  }
  &__element {
    margin: 0;
    border-bottom: 1px solid var(--color-button-backgraund);
    &_text {
      margin: 0;
    }
    &_link {
      color: var(--color-text);
      text-decoration: none;
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        text-decoration: underline;
        color: var(--color-title);
      }
    }
  }
  &__images {
    @include photo-image;
  }
}
.address {
  padding: 100px 0;
  background-color: var(--color-white);
  &__title {
    margin-bottom: 30px;
  }
  &__items {
    @include flex-v-center;
  }
  &__item {
    margin-bottom: 45px;
  }
  &__block-map {
    margin: auto;
    width: 85vw;
    height: 50vh;
    z-index: 1;
  }
}
</style>
