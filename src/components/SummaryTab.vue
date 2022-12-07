<template>
  <div v-for="coin in coins" :key="coin.id">
    <SingleCoin :coin="coin"/>
  </div>
</template>

<script>
import SingleCoin from "../components/SingleCoin.vue"
import { ref } from "@vue/reactivity";

export default {
  components: {SingleCoin},
  async setup() {
    const coins = ref([]);

    let key = "37e2756b-01f9-4d60-8533-bad3121fba02";
    let url =
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      qString = "?CMC_PRO_API_KEY=" + key + "&limit=20";

    const res = await fetch(url + qString);
    const parsedRes = await res.json();

    coins.value = parsedRes.data;

    return { coins };
  },
};
</script>

<style scoped>

</style>
