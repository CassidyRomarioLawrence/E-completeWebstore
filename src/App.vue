<template>
  <nav>
    <NavBar />
  </nav>
  <router-view/>
  <footer>
    <FooterC />
  </footer>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterC from './components/FooterC.vue';

export default{
  components:{
    NavBar,
    FooterC
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

#app {
  font-family: 'Poppins', sans-serif;
}

</style>
