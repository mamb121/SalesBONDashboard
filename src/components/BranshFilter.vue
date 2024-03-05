<template>
<v-navigation-drawer
        location="right"
        v-model="drawer"
      >
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            subtitle="Logged in"
            title="Jane Smith"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
</template>
<script lang="ts">
import {Options,Vue } from 'vue-class-component';

@Options({
  props: {
    drawer:Boolean
  }
})
export default class BranshFilter extends Vue {
    drawer!:boolean
}
</script>