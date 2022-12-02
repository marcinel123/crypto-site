<template>
  <div v-for="coin in coins" :key="coin.id">
    <p>{{ coin.name }}</p>
    <p>{{ coin.symbol }}</p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  async setup() {
    const coins = ref([]);

    let key = "37e2756b-01f9-4d60-8533-bad3121fba02";
    let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map",
      qString = "?CMC_PRO_API_KEY=" + key + "&limit=20";

    const res = await fetch(url + qString);
    const parsedRes = await res.json();
    console.log(parsedRes);
    coins.value = parsedRes.data;
    console.log(coins.value);

    return { coins };
  },
};
</script>

<style></style>
