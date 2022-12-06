<template>
  <main class="main">
    <header class="header">
      <input class="search" type="search" />
      <div class="buttons">
        <button class="btn">
          <img src="../images/bell.png" alt="icon bell" />
        </button>
        <button class="btn">
          <img class="btn" src="../images/menu.png" alt="icon menu" />
        </button>
      </div>
    </header>
    <section class="first_section">
      <div class="balance">
        <div class="title">
          <h3>Current Balance</h3>
          <button>
            <img src="../images/dots.png" alt="dots icon" />
          </button>
        </div>
        <h4>$21 432.23</h4>
        <div class="change">
          <img src="../images/arrow.png" alt="arrow" />
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
          <img src="../images/dots.png" alt="dots icon" />
        </div>
        <div class="chart">
          <canvas  id="myChart"></canvas>
        </div>
        <div class="inputs">
          <label for="this_month">
            <input class="input_radio" id="this_month" type="radio"> This month
          </label>
          <label for="last_month">
            <input class="input_radio" id="last_month" type="radio"> Last month
          </label>
        </div>
      </div>
    </section>
    <section class="tabs">
      <nav class="tabs_nav">
        <ul class="tabs_menu">
          <li>
            <router-link @click="store.changeTab('summary')" to="/overview/summary">Summary</router-link>
          </li>
          <li><router-link @click="store.changeTab('table')" to="/overview/table">Table</router-link></li>
          <li><router-link @click="store.changeTab('charts')" to="/overview/charts">Charts</router-link></li>
          <li><router-link @click="store.changeTab('reporting')" to="/overview/reporting">Reporting</router-link></li>
          <li><router-link @click="store.changeTab('analysis')" to="/overview/analysis">Analysis</router-link></li>
        </ul>
      </nav>
      <router-view />
    </section>
  </main>
</template>

<script>
import Chart from "chart.js/auto";
import { useTabStore } from "@/store";
import { onMounted } from "@vue/runtime-core";
export default {
  async setup() {
    const data = [];
    const store = useTabStore()

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
      // creating new chart
      const newChart = new Chart(chart1, {
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
              tension: 0.4,
            },
          ],
        },
      });
      newChart;
    });

    return {store};
  },
};
</script>

<style scoped>
.main {
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
}
.header {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buttons {
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  width: 232px;
}

.search,
.btn {
  background: #f7f7f9;
  height: 48px;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
}

.first_section {
  display: flex;
  align-items: center;
  margin-top: 35px;
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
  padding: 0 30px
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
  color: black;
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

.btn_report {
  background: white;
  color: #7445fb;
  width: 112px;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
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

.tabs {
  margin-top: 25px;
  box-sizing: border-box;
  width: 1040px;
  background: #f7f7f9;
  padding: 35px 32px;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
}

.tabs_nav {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #EBEBF3;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.tabs_menu {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.tabs_menu a {
  color: #9896a1;
  font-size: 16px;
  font-weight: 500;
  margin-left: 0;
  margin-right: 20px;
  text-decoration: none;
}

.tabs_menu a:hover, 
.tabs_menu a.router-link-active, 
.tabs_menu a.router-link-exact-active {
padding-bottom: 15px;
border-bottom: 4px solid #7445FB;
}

.chart {
  display: flex;
  justify-content:center;
  height: 220px;
  width: 498px;
  border-bottom: 1px solid #EBEBF3;
}
.inputs {
  margin-top: 4px;
}

.inputs label {
  font-size: 14px;
  font-weight: 400;
  color: #9896A1;
}

.input_radio {
  background: #D5D5D6;
  border-radius: 50%;
  width:8px;
  height: 8px;
  appearance: none;
}
.input_radio:checked {
  background: #7445FB;
 
}
</style>
