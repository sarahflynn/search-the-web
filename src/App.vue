<template>
  <div id="app">
    <header>
     <h1>Book Search</h1>
     <router-link to="/list">List</router-link>

     <router-view></router-view>
    
      
    </header>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
