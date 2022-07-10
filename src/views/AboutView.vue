<template>
  <div class="about">
    <PerformanceComponent :title="title" />
    <MenuComponent />
  </div>
</template>
<script>
import MenuComponent from "@/components/MenuComponent";
import PerformanceComponent from "@/components/PerformanceComponent";

export default {
  name: "ContactView",
  components: { MenuComponent, PerformanceComponent },
  data() {
    return {
      title: "Обо мне",
    };
  },
};
</script>
<style lang="scss">
.about {
  min-height: 100vh;
  //@include flex;
}
</style>
