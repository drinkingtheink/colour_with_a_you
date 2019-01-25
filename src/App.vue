<template>
  <div id="app">
    <section class="color_selector_stage">
      <h1>Colour with a YOU</h1>
      <ColorSelector/>
    </section>
    <section class="palette_stage">
      <PaletteDisplay/>
    </section>
  </div>
</template>

<script>
import ColorSelector from './components/ColorSelector.vue';
import PaletteDisplay from './components/PaletteDisplay.vue';

export default {
  name: 'app',
  components: {
    ColorSelector,
    PaletteDisplay
  }
};
</script>

<style lang="scss">
@import './style/_base_styles.scss';

$padding: 1rem;

#app {  
 .palette_stage {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
 }

 .color_selector_stage {
  width: 25vw;
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(0,0,0,.05);
  padding: $padding;
  z-index: 10;
 }
}
</style>
