<template>
  <section class="tabs">
    <nav class="tabs_nav">
      <ul class="tabs_menu">
        <li>
          <router-link
            @click="store.changeTab('summary')"
            to="/overview/summary"
            >Summary</router-link
          >
        </li>
        <li>
          <router-link @click="store.changeTab('table')" to="/overview/table"
            >Table</router-link
          >
        </li>
        <li>
          <router-link @click="store.changeTab('charts')" to="/overview/charts"
            >Charts</router-link
          >
        </li>
        <li>
          <router-link
            @click="store.changeTab('reporting')"
            to="/overview/reporting"
            >Reporting</router-link
          >
        </li>
        <li>
          <router-link
            @click="store.changeTab('analysis')"
            to="/overview/analysis"
            >Analysis</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view />
  </section>
</template>

<script>
import { useTabStore } from "@/store";
export default {
  setup() {
    const store = useTabStore();

    return { store };
  },
};
</script>

<style scoped>

.tabs {
  margin-top: 25px;
  box-sizing: border-box;
  width: 1040px;
  max-height: 425px;
  background: #f7f7f9;
  padding: 35px 32px;
  padding-bottom: 0;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
  background-image: linear-gradient(#F7F7F9 70%, white);
}

.tabs_nav {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ebebf3;
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
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #0a041c;
  padding-bottom: 15px;
  border-bottom: 4px solid #7445fb;
}

@media (max-width: 480px) {
  .tabs {
  margin: 0;
  padding: 5px;
  width: 100%;
  height: 330px;
  background: #f7f7f9;
  overflow-x: hidden;
  overflow-y: auto;
  border: none;
  border-radius: none;
}
.tabs_nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.tabs_menu {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
}
</style>
