<template>
  <div id="page-index">
    <NuxtPage />
    <a class="anchor-brand" name="brand"></a>
    <IndexBrand class="mb-102 top-margin" />
    <a class="anchor anchor-projects" name="projects"></a>
    <IndexProjects class="pb-102 top-margin" />
    <a class="anchor anchor-we" name="we"></a>
    <IndexWe class="top-margin" />
    <a class="anchor anchor-services" name="services"></a>
    <IndexServices class="mb-102 top-margin" />
  </div>
</template>

<script setup lang="ts">
import menu from '~/public/data/menu.json';
const appViewport: Ref<string> = useState('appViewport');
</script>

<style lang="scss">
@import '@/styles/style.scss';

.viewport-PHONE {
  .top-margin {
    display: block;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
.viewport-SMARTPHONE {
  .top-margin {
    display: block;
    padding-top: 44px;
    padding-bottom: 44px;
  }
}
.viewport-TABLED {
  .top-margin {
    display: block;
    padding-top: 142px;
  }
}
.viewport-DESKTOP {
  .top-margin {
    display: block;
    padding-top: 142px;
  }
}
</style>
