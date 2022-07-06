<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<style lang="scss"></style>
<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: { HeaderComponent, FooterComponent },
};
</script>
