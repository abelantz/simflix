<template>
  <div id="app">
      <ul class="nav">
          <li><router-link :to="{name: 'home'}">SIMFLIX</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
    * {
        box-sizing: border-box;
        margin:0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #f3f3f3;
        font-size: 24px;
        height: 100vh;
    }
    .flex-center {
        display: flex;
        justify-content: center;
    }

    .nav{
        display: flex;
        list-style: none;
        padding:20px 0;
        margin:0;
        justify-content: center;
        background: #ffffff;
        border-bottom: 1px solid lightgray;
        margin-bottom: 50px;
        
    }
    .nav a{
        color: #636b6f;
        padding: 0 25px;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center
    }
</style>