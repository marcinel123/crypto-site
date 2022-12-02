<template>
  <Suspense>
    <template #default>
     <CoinsListPage/>
    </template>
    <template #fallback>
      <LoaderPage />
    </template>
  </Suspense>
</template>

<script>
import LoaderPage from "./LoaderPage.vue";
import CoinsListPage from "./CoinsListPage.vue";
export default {
  name: "OverViewPage",
  components: {
    LoaderPage,
    CoinsListPage
  },

  
};
</script>

<style></style>
