<template>
  <div class="contact">
    <PerformanceComponent :title="title" />
    <MenuComponent />
    <div class="contact__information">
      <div class="contact__item contact__list-information">
        <p class="contact__element">ИМЯ:</p>
        <p class="contact__element">Кравчун</p>
        <p class="contact__element">ФАМИЛИЯ:</p>
        <p class="contact__element">Людмила</p>
        <p class="contact__element">ОТЧЕСТВО:</p>
        <p class="contact__element">Владимировна</p>
        <p class="contact__element">ТЕЛЕФОН:</p>
        <p class="contact__element">8-777-666-55-44</p>
        <p class="contact__element">ПОЧТА:</p>
        <p class="contact__element">hfhhhf@mail.ru</p>
        <p class="contact__element">Рабочее время:</p>
        <div class="contact__element">
          <p>Пн - Пт - с 9:00 до 19:00</p>
          <p>Сб - Вс - выходной</p>
        </div>
      </div>
      <div class="contact__item">
        <img
          class="contact__images"
          src="@/assets/images/avatar.jpg"
          alt="Кравчун Л.В."
        />
      </div>
    </div>
    <div ref="mapContainer" class="contact__block-map"></div>
  </div>
</template>

<script>
import MenuComponent from "@/components/MenuComponent";
import PerformanceComponent from "@/components/PerformanceComponent";
import "leaflet/dist/leaflet.css";
import LMap from "leaflet";

export default {
  name: "ContactView",
  components: { MenuComponent, PerformanceComponent },
  data() {
    return {
      title: "Контактная информация",
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
    border-bottom: 1px solid var(--color-button-backgraund);
  }
  &__images {
    @include photo-image;
  }
  &__block-map {
    height: 50vh;
  }
}
</style>
