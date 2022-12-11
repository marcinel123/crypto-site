<template>
  <section class="first_section">
    <div class="balance">
      <div class="title">
        <h3>Current Balance</h3>
        <button>
          <img src="../../images/dots.png" alt="dots icon" />
        </button>
      </div>
      <h4><span>$</span>21 432.23</h4>
      <div class="change">
        <img src="../../images/arrow.png" alt="arrow" />
        <p>12% vs last month</p>
      </div>
      <div class="btn_section">
        <button class="btn_invest">Quick Invest</button>
        <button class="btn_report">Show Report</button>
      </div>
    </div>
    <div class="summary">
      <div class="title">
        <h3>Summary</h3>
        <img src="../../images/dots.png" alt="dots icon" />
      </div>
      <div class="chart">
        <canvas id="myChart"></canvas>
      </div>
      <div class="inputs">
        <label for="this_month">
          <input class="input" id="this_month" type="checkbox" checked /> This month
        </label>
        <label for="last_month">
          <input class="input" id="last_month" type="checkbox" /> Last month
        </label>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from "chart.js/auto";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
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

      const chart1 = document.getElementById("myChart");
      const gradientBg = chart1.create
      // creating new chart
      const newChart = new Chart(chart1, {
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
                display: false,
              },
            },
            y: {
              ticks: {
                display: true,
              },
              grid: {
                display: true,
                borderDash: [2, 1],
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
              fill: true,
              labels: ['5k', 'February', 'March', 'April', 'May', 'June'],
              data: data.map((row) => row.value),
              tension: 0.4,
              borderColor: "#7445FB",
            },
          ],
        },
      });
      newChart;
    });
  },
};
</script>

<style>
.first_section {
  display: flex;
  align-items: center;
  margin-top: 25px;
}
.balance {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #f7f7f9;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
  width: 509px;
  height: 336px;
  padding: 15px 20px;
  margin-right: 32px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.summary .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}
.title button {
  border: none;
  background: #f7f7f9;
}
.title h3 {
  font-size: 20px;
}
.balance h4 {
  margin: 5px 0;
  color: #0A041C;
  font-size: 56px;
}
.balance span {
  color: #9896A1;
  font-size: 56px;
}


.change {
  width: 160px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #2dc78f;
}
.change img {
  height: 18px;
  width: 18px;
}
.btn_section {
  margin-top: 60px;
  display: flex;
  align-items: center;
}
.btn_section button {
  border: none;
}
.btn_invest {
  background: #7445fb;
  color: white;
  width: 109px;
  height: 40px;
  margin-right: 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
}
.btn_invest:hover{
  background: rgb(208, 85, 85);
  border: 2px solid black;
}
.btn_report {
  background: white;
  color: #7445fb;
  width: 112px;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
}
.btn_report:hover{
  background: rgb(208, 85, 85);
  border: 2px solid black;
}
.summary {
  box-sizing: border-box;
  background: #f7f7f9;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
  width: 499px;
  height: 336px;
  padding-top: 15px;
  padding-bottom: 0;
}
.chart {
  display: flex;
  justify-content: center;
  height: 220px;
  width: 498px;
  border-bottom: 1px solid #ebebf3;
}
.inputs {
  margin-top: 7px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.inputs label {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #9896a1;
  margin-left: 10px;
}
.input {
  margin-right: 8px;
  background: #d5d5d6;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  appearance: none;
}
.input:checked {
  background: #7445fb;
}
@media (max-width: 480px) {
  .first_section {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }
.balance {
  margin: 0;
  order: 0;
  width: 100%;
  height: 300px;
  padding: 15px 20px;
}
.summary {
  order: 1;
  width: 100%;
  height: auto;
  margin: 0;
}
.chart {
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  border-bottom: 1px solid #ebebf3;
}

}
</style>
