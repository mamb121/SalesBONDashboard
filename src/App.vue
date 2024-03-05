<template>
  <v-app id="inspire" >
    <v-layout>
    <v-navigation-drawer 
    class="px-0"
    expand-on-hover
    rail
    @click="rail = !rail"
    >
      <v-list>
        <v-list-item
            :prepend-avatar=avatar
            :title=name
            :subtitle=email
          ></v-list-item>
      </v-list>
        <v-divider></v-divider>
        <MenuView :routes="routes">
        </MenuView>
      </v-navigation-drawer>


    <v-app-bar dense :color="useDarkTheme ? 'dark' : 'white'" app>
      <v-toolbar-title>BON Sales Dashboard</v-toolbar-title>
        <v-btn icon @click="toggleTheme">
          <v-icon>mdi-lightbulb-on-outline</v-icon>
        </v-btn>
    </v-app-bar>
      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container :class="useDarkTheme ? '' : 'grey lighten-5'" fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
  </v-layout>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import MenuView from "@/views/MenuView.vue";
  import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
  import { useTheme } from 'vuetify'
    //import HomeView from "@/views/HomeView.vue";


    const theme = useTheme()

  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    localStorage.setItem("useDarkTheme", theme.global.name.value)
  }
  const drawer = ref(true)
</script>

<script type="text/typescript">
  export default {
  components: {
    MenuView,
   // HomeView
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
    data: () => ({ 
      drawer: false,
      rail: false,
      avatar:require('@/assets/avatar.png'),
      name:'mohammed',
      email:'mamb@bon.com.sa',
      mini_drawer:false
     }),
     created() {
    if (window.matchMedia) {
      this.$vuetify.theme.dark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
        this.$vuetify.theme.dark = e.matches;
      });
    }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
