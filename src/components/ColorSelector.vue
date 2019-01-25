<template>
  <div class="color_selector">
    <p>Select a Color to Start</p>
    
  </div>
</template>

<script>
import randomColor from 'randomcolor'
export default {
  name: 'ColorSelector',
  methods: {
    getRandomColor () {
      let newColor = randomColor();
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
