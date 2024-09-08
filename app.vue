<template>
  <div id="app" :class="`viewport-${appViewport}`">
    <div id="content" class="fullscreen scroll wrap-x wrap-y">
      <RouterView />
    </div>
    <Header />
    <Menu />
  </div>
</template>

<script setup lang="ts">
import menuJSON from '@/public/data/menu.json';
import { viewportByWidth } from "@/services/ServiceViewport";

// state App
const appViewport: Ref<string> = useState('appViewport', () => null);
// state Menu
const menu = useState('menu', () => menuJSON);
const menuVisible = useState('menuVisible', () => false);

function onResize() {
  appViewport.value = viewportByWidth(window.innerWidth);
  menuVisible.value = false;
};

onMounted(() => {
  window.addEventListener('resize', onResize);
  onResize();
});

onBeforeUnmount(() => {
  window.addEventListener('resize', onResize);
});
</script>

<style lang="scss">
@import '@/styles/style.scss';

html {
  background: $color-white;
  color: $color-black;
}

* {
  font-family: $font-medium;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  #content {
    background-image: url('@/public/img/app-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
