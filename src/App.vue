<template>
  <div id="app">
    <section class="color_selector_stage">
      <h1 class="main_title">Colour with a <span class="highlight">YOU</span></h1>
      <ColorSelector/>
    </section>
    <section class="palette_stage">
      <p class="project_info">
        <a :href="repoLink" target="_blank">About this project</a>
        <a :href="portfolioLink" target="_blank">About the author</a>
      </p>
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
  },
  data () {
    return {
      repoLink: 'https://github.com/drinkingtheink/colour_with_a_you',
      portfolioLink: 'https://drinkingtheink.github.io/'
    }
  }
};
</script>

<style lang="scss">
@import './style/_base_styles.scss';
@import './style/_palette.scss';
@import './style/_mixins.scss';

$padding: 1rem;
$selector_width: 25vw;
$media_target: 900px;

#app {  
  display: flex;
  height: 100%;

  @media only screen  and (max-width : $media_target) {
    display: block;
  }

 .palette_stage {
  position: relative;
 }

 h1 {
  color: $color3;
  margin: 0;
  line-height: 1.1;
  text-shadow: 2px 2px 1px rgba(black, .4);

  &.main_title {
    color: $dark_white;

    @media only screen  and (max-width : $media_target) {
      font-size: 2.5rem;
    }
  }
 }

 .color_selector_stage {
  width: $selector_width;
  padding: $padding;

    @media only screen  and (max-width : $media_target) {
      width: 90%;
    }
 }

 .highlight {
  font-size: 150%;
  animation: textshadowGlow 5s ease infinite;
  color: white;
 }

 .palette_stage {
  width: 75vw;
  overflow-y: auto;
  overflow-x: no-scroll;

  @media only screen  and (max-width : $media_target) {
    width: 100%;
  }
 }
}

@keyframes textshadowGlow {
  0% {
    text-shadow: 0 0 15px $rainbow1;
  }
  25% {
    text-shadow: 0 0 25px $rainbow2;
  }
  50% {
    text-shadow: 0 0 18px $rainbow3;
  }
  75% {
    text-shadow: 0 0 30px $rainbow4;
  }
  100% {
    text-shadow: 0 0 20px $rainbow1;
  }
}

.project_info {
  display: flex;

  @media only screen  and (max-width : $media_target) {
    display: block;
    width: 95%;
  }

  a {
    display: block;
    font-size: 75%;
    padding: .5rem .25rem;
    text-align: center;
    background-color: rgba(black, .25);
    border-left: 0 solid $rainbow4;
    width: 49%;
    margin-right: .5rem;

    @media only screen  and (max-width : $media_target) {
      width: 100%;
      margin-bottom: .5rem;
    }

    &:hover {
      background-color: rgba(black, .75);
      border-left-width: 5px;
    }
  }
}

body {
  background-color: $color1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23464646' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
