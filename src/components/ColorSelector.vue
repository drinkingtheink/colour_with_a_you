<template>
  <div class="color_selector">
    <p>Select a Color to Start</p>
    
    <button class="select_random_color" @click="getRandomColor()">
      Select One at Random
    </button>

    <ActiveColor v-show="selectedColor" :color="this.selectedColor"/>
  </div>
</template>

<script>
import randomColor from 'randomcolor'
import ActiveColor from './ActiveColor.vue'

export default {
  name: 'ColorSelector',
  components: {
    ActiveColor
  },
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
