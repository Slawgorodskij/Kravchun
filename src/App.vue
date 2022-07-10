<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: { HeaderComponent, FooterComponent },
};
</script>

<style lang="scss"></style>
