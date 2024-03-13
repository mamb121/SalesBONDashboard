<template>       
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
        </v-list>
</template>
<script lang="ts">
import {Options,Vue } from 'vue-class-component';

@Options({
  props: {
    drawerBranchFilter:Boolean
  }
})
export default class BranshFilter extends Vue {
    drawerBranchFilter!:boolean
}
</script>