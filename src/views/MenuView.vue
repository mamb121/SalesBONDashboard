<template>
    <v-list density="compact" nav>    
      <v-list-item v-for="r in routes" :route="r" :key="r.name"
        :prepend-icon=r.icon
        :title=r.title
        :to="r.path"
      ></v-list-item>    
    </v-list>
  </template>
  <script>
    export default {
    props: ["routes"],
    components: {
      //MenuView,
     // HomeView
    }
    }
  </script>
  