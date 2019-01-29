<template>
  <div class="color_selector">
    <p>1. Select a Color to Start
    
      <button class="select_random_color" @click="getRandomColor()">
        <i class="fa" :class="ctaIconClass"></i>
        {{ currentColor ? 'Different One' : 'Pick Random Color' }}
      </button>

      <input class="hex_input" v-model="hexInput" @keydown="removeHashes()" :placeholder="hexPlaceholder" />
      <span class="hex_input_feedback" v-if="hexFeedback">{{ hexFeedback }}</span>
    </p>

    <ActiveColor v-show="currentColor"/>

  </div>
</template>

<script>
import ActiveColor from './ActiveColor.vue'
import { mapState, mapActions } from 'vuex'

const initialPlaceholder = 'Or add a hex here...'

export default {
  name: 'ColorSelector',
  components: {
    ActiveColor
  },
  data () {
    return {
      hexInput: null,
      hexPlaceholder: initialPlaceholder,
      hexIsValid: false,
      hexFeedback: null
    }
  },
  watch: {
    currentColor: function () {
      if (this.currentColor) {
        this.getPaletteByColor(this.currentColor)
        this.getScales(this.currentColor)
      }

      if(!this.currentColor) {
        this.resetHexSelection()
      }
    },
    hexInput: function () {
      if (!this.hexInput) {
        this.hexFeedback = null
      }
      // start digesting at 3 chars
      if (this.hexInput && this.hexInput.length > 2) {
        this.digestHexInput(this.hexInput)
      }
      // don't let users add more than 6 chars
      if (this.hexInput && this.hexInput.length > 6) {
        this.hexInput = this.hexInput.substring(0, 6);
      }
    },
    hexIsValid: function () {
      this.hexFeedback = null
    }
  },
  computed: {
    ...mapState(['currentColor', 'hexPattern']),
    ctaIconClass () {
      return this.currentColor ? 'fa-undo' : 'fa-bolt'
    }
  },
  methods: {
    ...mapActions(['getRandomColor', 'getPaletteByColor', 'getScales', 'updateCurrentColor']),
    digestHexInput (hex) {
      let formattedHex = `#${hex}`
      let isValid = this.hexPattern.test(formattedHex)
      if (isValid) {
        this.hexIsValid = true
        this.hexFeedback = null
        this.updateCurrentColor(formattedHex)
      } else {
        this.hexFeedback = 'Values should only be 3 or 6 characters and within the hex range'
      }
    },
    removeHashes () {
      // remove #'s - we'll handle those
      if (this.hexInput && this.hexInput.includes('#')) {
        let cleansedText = this.hexInput.replace('/#','')
        this.hexInput = cleansedText
      }
    },
    resetHexSelection () {
      this.hexInput = null
      this.hexIsValid = false
      this.hexFeedback = null
      this.hexPlaceholder = initialPlaceholder
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_palette.scss';

* {
  transition: all .2s;
}

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
      padding: .5rem 1rem 1rem 1rem;
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

  i {
    margin-right: .25em;
  }
}

input {
  display: block;
  width: 95%;
  background: transparent;
  border-bottom: 2px solid rgba(white, .3);
  padding: .5rem;
  margin-top: .5rem;
  border-radius: 4px;
  color: $dark_white;

  &:focus {
    background: rgba(white, .75);
    color: $color1;
  }
}

.hex_input_feedback {
  display: block;
  padding: .25rem 0;
  color: $rainbow5;
  font-size: 80%;
}

</style>
