<template>
  <div class="main">
    <div class="container">
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.main {
margin: 0;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: black;
}

.container {
    display: grid;
    grid-template-columns: repeat(3,40px);
    grid-template-rows: repeat(3,40px);
    transform: rotate(45deg)
}

.container span {
    display: block;
    background: white;
    animation: loader 1s ease infinite;
}
span:nth-child(3) {
    animation-delay: 1s;
}
span:nth-child(2) {
    animation-delay: .9s;
}
span:nth-child(6) {
    animation-delay: .9s;
}
span:nth-child(1) {
    animation-delay: .8s;
}
span:nth-child(5) {
    animation-delay: .8s;
}
span:nth-child(9) {
    animation-delay: .8s;
}
span:nth-child(4) {
    animation-delay: .7s;
}
span:nth-child(8) {
    animation-delay: .7s;
}
span:nth-child(7) {
    animation-delay: .6s;
}
@keyframes loader {
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
}

</style>