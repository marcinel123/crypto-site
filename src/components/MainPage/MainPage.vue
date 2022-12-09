<template>
  <main class="main">
    <header class="header">
      <input class="search" type="search" placeholder="Search" />
      <div class="buttons">
        <button class="btn">
          <span></span>
          <img src="../../images/bell.png" alt="icon bell" />
        </button>
        <button class="btn">
          <img class="btn menu" src="../../images/menu.png" alt="icon menu" />
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
  background-size: 12px 12px;
  background-repeat: no-repeat;
  background-position: 20px 18px;
  width: 232px;
  height: 48px;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
  padding-left: 42px;
  padding-top: 4px;
}
.search::placeholder{
  line-height: 24px;
  font-size: 14px;
  color: #9896A1;
}

.search:focus {
  background-image: none;
}

.search:focus::placeholder {
  color: transparent;
}

.buttons button {
  position: relative;
}

.buttons button:hover {
  border: 2px solid black;
}

.btn {
  background: #f7f7f9;
  height: 48px;
  width: 48px;
  border: 1px solid #f7f7f9;
  border-radius: 8px;
}
.btn span {
  border: 2px solid white;
  position: absolute;
  bottom: 38px;
  left: 38px;
  height: 12px;
  width: 12px;
  background: #EA4D4D;
  border-radius: 50%;
}
.menu {
  height: 40px;
  width: 30px;
}


@media (max-width: 480px) {
  .main {
    margin: 0;
    padding: 0;
    display: flex;
  flex-direction: column-reverse;
  }
  .header{
    display: none;
  }
}



</style>
