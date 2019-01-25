<template>
  <div class="color_selector">
    <p>Select a Color to Start</p>
    
    <button class="select_random_color" @click="getRandomColor()">
      Select One at Random
    </button>
  </div>
</template>

<script>
import randomColor from 'randomcolor'
export default {
  name: 'ColorSelector',
  data () {
    return {
      selectedColor: null
    }
  },
  methods: {
    getRandomColor () {
      let newColor = randomColor();
      this.selectedColor = newColor;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
