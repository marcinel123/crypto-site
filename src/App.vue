<template>
    <nav class="navigation">
      <router-link to="/overview">Overview</router-link>
      <router-link to="/buysell">Buy / Sell</router-link>
      <router-link to="/wallets">Wallets</router-link>
      <router-link to="/bundles">Bundles</router-link>
      <router-link to="/reporting">Reporting</router-link>
      <router-link to="/community">Community</router-link>
    </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
