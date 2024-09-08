<template>
  <div
    id="header"
    :class="`Header wrap-x`"
  >
    <div
      class="logo"
      @mouseenter="() => { hoverLogo = true }"
      @mouseout="() => { hoverLogo = false }"
    >
      <img v-if="!hoverLogo" width="48" height="38" src="@/public/img/header-logo.svg" />
      <img v-if="hoverLogo" width="59" height="56" src="@/public/img/header-logo-hover.svg" />
    </div>

    <div class="separator"></div>

    <div class="items">
      <div
        v-for="item of menu"
        :key="`menu-header-item-${item.slug}`"
        class="item inline f-24 px-16 pointer"
        @click="go(item.slug)"
      >
        {{ item.title }}
      </div>
    </div>

    <div :class="`order`">
      <div class="order-button inline b-42 f-24 center bg-brand text-black px-4 mt-32 pointer">
        Заказать проект
      </div>
    </div>

    <div
      v-if="[ 'PHONE', 'SMARTPHONE' ].includes(appViewport)"
      class="icon ml-32"
      @click="() => { menuVisible = true }"
    >
      <Icon class="mt-32" type="MENU_OPEN" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { scrollTo } from '@/services/ServiceScroll';

const appViewport: Ref<string> = useState('appViewport');
const menu: Ref<{ title: string, slug: string }> = useState('menu');
const menuVisible: Ref<boolean> = useState('menuVisible');
const hoverLogo: Ref<boolean> = useState('hoverLogo', () => false);

function go(to: string) {
  scrollTo(to, 'content');
}
</script>

<style lang="scss">
@import '@/styles/style.scss';

#header {
  position: absolute;
  display: flex;
  width: 100%;
  background-color: transparent;
  background-image: url('@/public/img/header-bg-tabled.svg');
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;

  .logo {
    height: 102px;
    line-height: 102px;

    img {
      vertical-align: middle;
    }
  }

  .separator {
    flex-grow: 1;
  }

  .items {
    flex-grow: 1;

    .item {
      height: 102px;
      line-height: 102px;
    }
  }

  .order-button:hover {
    color: $color-brand;
    background-color: transparent;
    background-image: url('@/public/img/header-order-hoover-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.viewport-PHONE {
  #header {
    position: fixed;
    height: 102px;
    bottom: 0;
    background-image: url('@/public/img/header-bg-phone.svg');
    background-repeat: repeat-x;

    .items {
      display: none;
    }
    .order {
      display: none;
    }
  }
}
.viewport-SMARTPHONE {
  #header {
    position: fixed;
    height: 102px;
    bottom: 0;
    background-image: url('@/public/img/header-bg-phone.svg');
    background-repeat: repeat-x;

    .items {
      display: none;
    }
  }
}
.viewport-TABLED {
  #header {
    position: fixed;
    height: 102px;
    top: 0;
    background-image: none;
    background-image: url('@/public/img/header-bg-tabled.svg');
    background-repeat: repeat-x;
  }
}
.viewport-DESKTOP {
  #header {
    position: fixed;
    height: 102px;
    top: 0;
    background-image: none;
    background-image: url('@/public/img/header-bg-tabled.svg');
    background-repeat: repeat-x;
  }
}
</style>
