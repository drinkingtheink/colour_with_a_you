<template>
  <div id="app">
    <section class="color_selector_stage">
      <h1>Colour with a <span class="highlight">YOU</span></h1>
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
@import './style/_palette.scss';
@import './style/_mixins.scss';

$padding: 1rem;

#app {  
 .palette_stage {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
 }

 h1 {
  color: $yellow;
  margin: 0;
 }

 .color_selector_stage {
  width: 25vw;
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: $padding;
  z-index: 10;
 }

 .highlight {
  font-size: 150%;
  text-shadow: 5px 5px 0px darken($green, 10%), 
                 8px 8px 0px lighten($green, 5%);
 }
}
</style>
