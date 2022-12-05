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
        <canvas id="myChart"></canvas>
      </div>
    </section>
    <section class="tabs">
      <nav class="tabs_nav">
        <ul class="tabs_menu">
          <li>
            <router-link to="/overview/summary">Summary</router-link>
          </li>
          <li><router-link to="/overview/table">Table</router-link></li>
          <li><router-link to="/overview/charts">Charts</router-link></li>
          <li><router-link to="/overview/reporting">Reporting</router-link></li>
          <li><router-link to="/overview/analysis">Analysis</router-link></li>
        </ul>
      </nav>
      <router-view />
    </section>
  </main>
</template>

<script>
import Chart from "chart.js/auto";
import { onMounted } from "@vue/runtime-core";
export default {
  async setup() {
    const data = [];

    onMounted(() => {
      // creating data for chart
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

    return {};
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
  justify-content: space-between;
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
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding: 15px 20px;
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
</style>
