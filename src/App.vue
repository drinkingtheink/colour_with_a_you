<template>
  <div id="app">
    <section class="color_selector_stage">
      <h1>Colour with a YOU</h1>
      <ColorSelector/>
    </section>
    <section class="palette_stage">
      
    </section>
  </div>
</template>

<script>
import ColorSelector from './components/ColorSelector.vue'

export default {
  name: 'app',
  components: {
    ColorSelector
  }
};
</script>

<style lang="scss">
$padding: 2rem;

#app {  
 .palette_stage {
  width: 100vw;
  height: 100vh;
  position: relative;
 }

 .color_selector_stage {
  width: 30vw;
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(0,0,0,.05);
  padding: $padding;
 }
}
</style>
