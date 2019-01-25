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
@import url('https://fonts.googleapis.com/css?family=Anaheim|Khand');

$padding: 2rem;

/*** FOUNDATIONAL ***/

html,
body {
  height: 100%;
  width: 100%;
  position: relative;
  font-size: 16pt;
}

/*** TYPOGRAPHY ***/

h1,
h2,
h3,
h4 {
  font-family: 'Khand', sans-serif;
}

h1 {
  font-size: 2.25rem;
}

h2 {
  font-size: 1.75rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.25rem;
}

p,
li,
span,
a {
  font-family: 'Anaheim', sans-serif;
}

/*** LAYOUT ***/

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
