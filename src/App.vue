<template>
  <div class="container">
    <nav class="navigation">
      <div class="logo">
        <img src="./images/logo.png" alt="logo" />
        <h3>Payte</h3>
      </div>

      <router-link class="link" to="/overview">
        <img src="./images/Icon.svg" alt="icon" />
        Overview
      </router-link>

      <router-link class="link" to="/buysell">
        <img src="./images/buy.png" alt="icon" />
        Buy / Sell
      </router-link>
      <router-link class="link" to="/wallets">
        <img src="./images/wallet.png" alt="icon" />
        Wallets
      </router-link>
      <router-link class="link" to="/bundles">
        <img src="./images/bundles.png" alt="icon" />
        Bundles
      </router-link>
      <router-link class="link" to="/reporting">
        <img src="./images/reporting.png" alt="icon" />
        Reporting
      </router-link>
      <router-link class="link" to="/community">
        <img src="./images/community.png" alt="icon" />
        Community
      </router-link>
      <div class="favorites">
        <h3 class="fav">
          Favorites
          <img src="./images/dots.png" alt="icon" />
        </h3>
        <div></div>
      </div>
    </nav>
    <section class="content">
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.container {
  width: 1440px;
  font-family: "Source Sans Pro", sans-serif;
  display: flex;
  flex-direction: row;
}
.content{
  width: 1176px;
  display: flex;
  flex-direction: column;
}
.link {
  display: flex;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;
  height: 44px;
  width: 244px;
  background: #f7f7f9;
  margin: 3px;
  padding: 2px;
  font-size: 16px;
  font-weight: 600;
  color: hsla(255, 75%, 6%, 0.4);
}

.link img {
  width: 21px;
  height: 21px;
  margin: 15px;
}

.link:hover,
.link.router-link-active,
.link.router-link-exact-active {
  border: 1px solid rgb(227, 225, 225);
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  color: black;
  border-radius: 4px;
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.logo img {
  margin: 10px;
  max-height: 24px;
  width: auto;
}
.logo h3 {
  font-size: 24px;
}
.navigation {
  width: 264px;
  height: 900px;
  background: #f7f7f9;
  display: flex;
  flex-direction: column;
}

.navigation .fav {
  margin: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  
}
.favorites {
  font-size: 14px;
  margin-top: 10px;
  border-top: 1px solid rgb(227, 225, 225);
  color: hsla(255, 75%, 6%, 0.4);
}
</style>
