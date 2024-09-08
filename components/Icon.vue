<template>
  <svg
    v-if="type === 'MENU_CLOSE'"
    class="Icon"
    width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.6169 34.5815L7.91846 4.883L4.38293 8.41853L34.0814 38.117L37.6169 34.5815Z" fill="black"/>
    <path d="M4.38306 34.5815L34.0815 4.883L37.6171 8.41853L7.91859 38.117L4.38306 34.5815Z" fill="black"/>
  </svg>
  <svg
    v-else-if="type === 'MENU_OPEN'"
    class="Icon"
    width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6H42V11H0V6Z" fill="black"/>
    <path d="M0 19H42V24H0V19Z" fill="black"/>
    <path d="M0 32H42V37H0V32Z" fill="black"/>
  </svg>
</template>

<script setup lang="ts">
type IconType = 'MENU_CLOSE' | 'MENU_OPEN';

const type: IconType = useAttrs().type;
</script>
