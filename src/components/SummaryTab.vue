<template>
  <div v-for="coin in coins" :key="coin.id">
    <div class="single_coin">
      <div class="coin_title">
        <h5>{{ coin.symbol }}</h5>
        <p>{{ coin.name }}</p>
      </div>
      <div class="coin_price">
        <h5>Price</h5>
        <p>{{ coin.quote.USD.price }}</p>
      </div>
      <div class="coin_change">
        <h5>Change</h5>
        <p>{{ coin.quote.USD.percent_change_30d }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  async setup() {
    const coins = ref([]);

    let key = "37e2756b-01f9-4d60-8533-bad3121fba02";
    let url =
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      qString = "?CMC_PRO_API_KEY=" + key + "&limit=20";

    const res = await fetch(url + qString);
    const parsedRes = await res.json();

    coins.value = parsedRes.data;
    console.log(coins.value);

    console.log(coins.value);

    return { coins };
  },
};
</script>

<style scoped>
.single_coin {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
