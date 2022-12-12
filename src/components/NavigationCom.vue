<template>
  <nav class="navigation">
    <div class="logo">
      <img src="../images/logo.png" alt="logo" />
      <h3>Payte</h3>
    </div>

    <router-link class="link overview" to="/overview">
      <img src="../images/Icon.svg" alt="icon" />
      Overview
    </router-link>

    <router-link class="link" to="/buysell">
      <img src="../images/buy.png" alt="icon" />
      Buy / Sell
    </router-link>
    <router-link class="link" to="/wallets">
      <img src="../images/wallet.png" alt="icon" />
      Wallets
    </router-link>
    <router-link class="link" to="/bundles">
      <img src="../images/bundles.png" alt="icon" />
      Bundles
    </router-link>
    <router-link class="link" to="/reporting">
      <img src="../images/reporting.png" alt="icon" />
      Reporting
    </router-link>
    <router-link class="link" to="/community">
      <img src="../images/community.png" alt="icon" />
      Community
    </router-link>
    <div class="favorites">
      <h3 class="fav">
        Favorites
        <button><img src="../images/dots.png" alt="icon" /></button>
      </h3>
      <div class="fav_coins">
        <img class="logo" src="../images/logo_bitcoin.png" alt="bitcoin" />
        <div class="coin_title">
          <h5>BTC</h5>
          <p>Bitcoin</p>
        </div>
        <img src="../images/vector_bitcoin.png" alt="" />
      </div>
      <div class="fav_coins">
        <img class="logo" src="../images/logo_ripple.png" alt="bitcoin" />
        <div class="coin_title">
          <h5>XRP</h5>
          <p>Ripple</p>
        </div>
        <img src="../images/vactor_ripple.png" alt="ripple" />
      </div>
    </div>
    <div class="user_profile">
      <img src="../images/face.png" alt="user_image" />
      <div class="user_title">
        <h5>Marc Webber</h5>
        <p>marc@riot.com</p>
      </div>
      <button><img src="../images/dots.png" alt="icon" /></button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
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
.overview:hover,
.overview.router-link-active,
.overview.router-link-exact-active {
  background-color: white;
  background-image: url("../images/messages_logo.png");
  background-repeat: no-repeat;
  background-position: 95% 50%;
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
  margin-bottom: 10px;
  margin-left: 10px;
}
.logo img {
  margin: 10px;
  max-height: 24px;
  width: auto;
}
.logo h3 {
  font-size: 24px;
  color: #0a041c;
  font-weight: 600;
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
.fav button {
  border: none;
  background: #f7f7f9;
}
.fav_coins {
  margin: 30px 0;
  width: 250px;
  background: #f7f7f9;
  display: flex;
  align-items: center;
}
.fav_coins .logo {
  margin: 0 10px;
  width: 32px;
  height: 32px;
}
.coin_title h5 {
    color: #9896A1;
    font-weight: 400;
    font-size: 12px;
}
.coin_title p {
  font-size: 12px;
  font-weight: bold;
  color: #0a041c;
}
.coin_title {
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-right: 60px;
}
.coin_title h5,
p {
  margin: 0;
}
.user_profile {
  margin-left: 15px;
  margin-top: 245px;
  width: 250px;
  background: #f7f7f9;
  display: flex;
  align-items: center;
}

.user_profile img {
  margin-right: 15px;
}
.user_profile h5 {
  margin: 0;
  margin-bottom: 2px;
}
.user_profile p {
  margin: 0;
}
.user_profile button {
  margin-left: 45px;
  border: none;
  background: #f7f7f9;
}
@media (max-width: 480px) {
  .navigation {
    width: 50px;
    height: 940px;
    background: #f7f7f9;
    display: flex;
    flex-direction: column;
    padding-right: 3px;
  }
  .logo h3,
  .favorites,
  .user_profile {
    display: none;
  }
  .link {
    width: 45px;
  }
  .overview:hover,
  .overview.router-link-active,
  .overview.router-link-exact-active {
    background-image: none;
  }
}
</style>
