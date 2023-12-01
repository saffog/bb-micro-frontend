<template>
  <div class="mt-10 text-3xl">
    <investments/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import investments from "./investments.vue"
  
  export default defineComponent({ 
    components: {
      investments
    } 
  });
</script>