<template>
  <div class="container">
    <nav class="navigation">
      <div class="logo">
        <img src="./images/logo.png" alt="logo">
        <h3>Payte</h3>
      </div>

      <router-link class="link" to="/overview">
        <img src="./images/overview.png" alt="icon">
        Overview
      </router-link>

      <router-link class="link"  to="/buysell">
        <img src="./images/buy.png" alt="icon">
        Buy / Sell
      </router-link>
      <router-link class="link" to="/wallets">
        <img src="./images/wallet.png" alt="icon">
        Wallets
      </router-link>
      <router-link class="link" to="/bundles">
        <img src="./images/bundles.png" alt="icon">
        Bundles
      </router-link>
      <router-link class="link" to="/reporting">
        <img src="./images/reporting.png" alt="icon">
        Reporting
      </router-link>
      <router-link class="link" to="/community">
        <img src="./images/community.png" alt="icon">
        Community
      </router-link>
    </nav>
  <router-view />
</div>
</template>

<script>
export default {
  name: "App",
};
</script>



<style scoped>
.container {
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  flex-direction: row;
}
.link{
  text-decoration: none;
  box-sizing: border-box;
  height: 44px;
  width: 244px;
  background: #F7F7F9;
  margin: 3px;
  padding: 2px;

}

.link:hover,
.link.router-link-active,
.link.router-link-exact-active {
  border: 1px solid rgb(227, 225, 225);
   background-color: white;
   cursor: pointer;
 }

.logo{
  display: flex;
}
.logo img {
  background: none;
}
.navigation {
  width: 264px;
  background: #F7F7F9;
  display: flex;
  flex-direction: column;
}



</style>
