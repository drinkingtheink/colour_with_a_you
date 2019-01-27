<template>
  <div class="color_selector">
    <p>1. Select a Color to Start
    
      <button class="select_random_color" @click="getRandomColor()">
        {{ currentColor ? 'Pick a Different Color' : 'Select One at Random' }}
      </button>

    </p>

    <ActiveColor v-show="currentColor"/>

    <p v-show="currentColor">2. Find a palette using this color

      <button class="select_random_color" @click="getPaletteByColor(currentColor)">
        Find a palette using 
        <span class="choice_display" :style="{ backgroundColor: currentColor }"></span>
      </button>
    </p>
  </div>
</template>

<script>
import ActiveColor from './ActiveColor.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ColorSelector',
  components: {
    ActiveColor
  },
  computed: {
    ...mapState(['currentColor', 'palettes'])
  },
  methods: {
    ...mapActions(['getRandomColor', 'getPaletteByColor'])
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_palette.scss';

.color_selector {
  p {
      background-color: rgba(0,0,0,.25);
      color: $yellow;
      padding: .5rem 1rem;
  }
}

button {
  background-color: $blue;
  transition: all .2s;
  margin-top: .5rem;
  color: white;

  &:hover {
    background-color: darken($blue, 10%);
  }
}

$choice_dimension: .5em;

.choice_display {
  display: inline-block;
  height: $choice_dimension;
  width: $choice_dimension;
  border: 2px solid $grey;
}

</style>
