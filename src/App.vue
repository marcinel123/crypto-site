<template>
  <div class="container">
    <NavigationCom />
    <section class="content">
      <router-view />
    </section>
  </div>
</template>

<script>
import NavigationCom from "./components/NavigationCom.vue";
export default {
  components: { NavigationCom },
  name: "App",
};
</script>

<style scoped>
.container {
  width: 1440px;
  height: 900px;
  font-family: "Source Sans Pro", sans-serif;
  display: flex;
  flex-direction: row;
}
.content {
  width: 1176px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 480px) {
  .container {
    width: 480px;
    height: 900px;
    font-family: "Source Sans Pro", sans-serif;
    display: flex;
    flex-direction: row;
  }

  .content {
    width: 430px;
    display: flex;
    flex-direction: column;
  }
}
</style>
