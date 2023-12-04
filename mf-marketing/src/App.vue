<template>
  <div>
    <promos/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import promos from "./promos.vue"
  
  export default defineComponent({ 
    components: {
      promos
    } 
  });
</script>