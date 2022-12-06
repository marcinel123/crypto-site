<template>
  <div class="single_coin">
    <img :src="`../images/logo/${coin.id}.png`" />
    <div class="coin_title">
      <h5>{{ coin.symbol }}</h5>
      <p>{{ coin.name }}</p>
    </div>
    <div class="coin_price">
      <h5>Price</h5>
      <p>${{ coin.quote.USD.price.toFixed(2) }}</p>
    </div>
    <div class="coin_change">
      <h5>Change</h5>
      <p
        :class="{
          down: coin.quote.USD.percent_change_30d < 0,
          up: coin.quote.USD.percent_change_30d > 0,
        }"
      >
        {{ coin.quote.USD.percent_change_30d.toFixed(2) }}%
        <img
          v-if="coin.quote.USD.percent_change_30d > 0"
          src="../images/arrow_up.png"
          alt="arrow_up"
        />
        <img
          v-if="coin.quote.USD.percent_change_30d < 0"
          src="../images/arrow_down.png"
          alt="arrow_down"
        />
      </p>
    </div>
    <div class="chart">
      <canvas :id="`${coin.name}`"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { onMounted } from "@vue/runtime-core";
export default {
  props: ["coin"],

  setup(props) {
    console.log(props.coin.id);
    console.log(props.coin.quote.USD);
    const data = [];

    onMounted(() => {
      // just creating data for chart
      const newData = () => {
        let i;

        for (i = 0; i < 31; i++) {
          let day = {
            day: i + 1,
            value: Math.floor(Math.random() * 10000),
          };
          data.push(day);
        }
      };

      newData();

      const chart2 = document.getElementById(`${props.coin.name}`);
      // creating new chart
      const newChart2 = new Chart(chart2, {
        type: "line",
        options: {
            plugins: {
          legend: {
            display: false,
          },
        }},
        data: {
          labels: data.map((row) => row.day),
          datasets: [
            {
              label: "",
              data: data.map((row) => row.value),
              tension: 0.8,
            },
          ],
        },
      });
      newChart2;
    });

    return {};
  },
};
</script>

<style scoped>
.single_coin {
  box-sizing: border-box;
  padding-left: 20px;
  width: 976px;
  height: 80px;
  background: #ffffff;
  display: flex;
  align-items: center;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
  margin: 10px 0px;
}

.single_coin img {
  margin-right: 20px;
}

.coin_title,
.coin_price,
.coin_change {
  width: 100px;
}

.coin_title,
.coin_price,
.coin_change {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
}
.coin_title h5,
.coin_price h5,
.coin_change h5 {
  margin: 0;
  color: #9896a1;
  font-size: 14px;
  font-weight: 500;
}
.coin_title p {
  color: #0a041c;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}
.coin_price p {
  color: #0a041c;
  font-weight: 600;
  margin: 0;
  font-size: 14px;
}
.coin_change p {
  margin: 0;
  display: flex;
  align-items: center;
}

.coin_change img {
  margin-left: 4px;
}

.down {
  color: red;
}
.up {
  color: green;
}

.chart {
  height: 32px;
  width: 148px;
}
</style>
