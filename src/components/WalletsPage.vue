<template>
  <Suspense>
    <template #default>
      <MainPage />
    </template>
    <template #fallback>
      <LoaderPage />
    </template>
  </Suspense>
</template>

<script>
import LoaderPage from "./LoaderPage.vue";
import MainPage from "./MainPage/MainPage.vue";
export default {
  name: "OverViewPage",
  components: {
    LoaderPage,
    MainPage,
  },
};
</script>