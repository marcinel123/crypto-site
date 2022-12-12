<template>
  <div class="single_coin">
    <img
      :src="require(`../images/logo/${coin.id}.png`)"
      :alt="`${coin.symbol}`"
    />
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
    <div class="coin_buttons">
      <button class="sell">Sell</button>
      <button class="buy">Buy</button>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { onMounted } from "@vue/runtime-core";
export default {
  props: ["coin"],

  setup(props) {
    console.log(props.coin.quote.USD.percent_change_30d);
    const data = [];

    onMounted(() => {
      // just creating data for chart
      const newData = () => {
        let i;

        for (i = 0; i < 7; i++) {
          let day = {
            day: i + 1,
            value: Math.floor(Math.random() * 10),
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
          elements: {
                    point:{
                        radius: 0
                    }
                },
          scales: {
            x: {
              ticks: {
                display: false,
              },
              grid: {
                drawBorder: false,
                display: false,
              },
            },
            y: {
              ticks: {
                display: false,
              },
              grid: {
                drawBorder: false,
                display: false,
              },
            },
          },
          plugins: {
            tooltip: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
        },
        data: {
          labels: data.map((row) => row.day),
          datasets: [
            {
              
              borderColor: props.coin.quote.USD.percent_change_30d > 0 ? "#2DC78F" : "#EA4D4D",
              data: data.map((row) => row.value),
              tension: 0.8,
              borderWidth: 2,
            },
          ],
        },
      });
      newChart2;

      
      console.log(newChart2)
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
  margin-right: 60px;
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
  color: #EA4D4D;
}
.up {
  color: #2DC78F;
}

.chart {
  height: 65px;
  width: 180px;
  margin: 0 20px;
  border: none;
}

.coin_buttons {
  width: 120px;
  display: flex;
  margin-left: 60px;
}
.coin_buttons button {
  margin-left: 10px;
  width: 55px;
  height: 40px;
  border-radius: 4px;
}

.coin_buttons button:hover {
  background: rgb(208, 85, 85);
  border: 2px solid black;
}
.coin_buttons .sell {
  background: white;
  color: #7445fb;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #ebebf3;
}
.coin_buttons .buy {
  background: #7445fb;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
}
@media (max-width: 480px) {
  .single_coin {
  box-sizing: border-box;
  padding-left: 20px;
  width: 430px;
  height: 80px;
  background: #ffffff;
  display: flex;
  align-items: center;
  margin: 10px 0px;
}
}
</style>
