<template>
  <main class="main">
    <header class="header">
      <input class="search" type="search" placeholder="Search" />
      <div class="buttons">
        <button class="btn">
          <img src="../../images/bell.png" alt="icon bell" />
        </button>
        <button class="btn">
          <img class="btn" src="../../images/menu.png" alt="icon menu" />
        </button>
      </div>
    </header>
    <UpperSection />
    <TabsSection />
  </main>
</template>

<script>
import UpperSection from "./UpperSection.vue";
import TabsSection from "./TabsSection.vue";
export default {
  components: { UpperSection, TabsSection },
};
</script>

<style scoped>
.main {
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
}
.header {
  width: 1040px;
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
  background-color: #f7f7f9;
  background-image: url("../../images/loop.png");
  background-repeat: no-repeat;
  background-position: 5% 50%;
  padding-left: 30px;
  width: 232px;
  height: 48px;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
}

.search:focus {
  background-image: none;
}

.btn {
  background: #f7f7f9;
  height: 48px;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
}
</style>
