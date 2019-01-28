<template>
  <div class="color_selector">
    <p>1. Select a Color to Start
    
      <button class="select_random_color" @click="getRandomColor()">
        {{ currentColor ? 'Pick a Different Color' : 'Select One at Random' }}
      </button>

    </p>

    <ActiveColor v-show="currentColor"/>

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
  watch: {
    currentColor: function () {
      if (this.currentColor) {
        this.getPaletteByColor(this.currentColor)
      }
    }
  },
  computed: {
    ...mapState(['currentColor', 'palettes'])
  },
  methods: {
    ...mapActions(['getRandomColor', 'getPaletteByColor', 'getScales'])
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_palette.scss';

@keyframes gradientGlow {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

.color_selector {
  p {
      background-color: rgba(0,0,0,.25);
      color: $dark_white;
      padding: .5rem 1rem;
  }
}

$animationDuration: 6s;

button {
  transition: all .2s;
  margin-top: .5rem;
  color: white;
  text-shadow: 2px 2px 1px rgba(black, .4);
  background: linear-gradient(-45deg, $rainbow1, $rainbow2, $rainbow3, $rainbow4, $rainbow5);
  background-size: 400% 400%;
  -webkit-animation: gradientGlow $animationDuration ease infinite;
  -moz-animation: gradientGlow $animationDuration ease infinite;
  animation: gradientGlow $animationDuration ease infinite;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(black, .2);
    visibility: hidden;
    transition: all .2s;
  }

  &:hover {
    color: $grey;
    background: white;

    &:before {
      visibility: visible;
    }
  }
}

</style>
