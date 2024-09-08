<template>
  <div
    v-if="[ 'PHONE', 'SMARTPHONE' ].includes(appViewport)"
    id="menu"
    class="Menu fullscreen wrap-x"
    :class="{ 'hide': !menuVisible }"
  >
    <div class="wrap">
      <div class="close mt-20">
        <Icon
          class="icon pointer"
          type="MENU_CLOSE"
          @click="() => menuVisible = false"
        />
      </div>
      <div class="items">
        <div class="items-wrap py-20">
          <h3
            v-for="item of menu"
            :key="`menu-block-item-${item.slug}`"
            class="py-20 pointer"
            @click="go(item.slug)"
          >
            {{ item.title }}
          </h3>
        </div>
      </div>
      <div class="order">
        <div class="block b-42 f-24 center bg-brand text-black">
          Заказать проект
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { scrollTo } from '@/services/ServiceScroll';

const appWidth: Ref<number> = useState('appWidth');
const appHeight: Ref<number> = useState('appHeight');
const appViewport: Ref<string> = useState('appViewport');
const menu: Ref<{ title: string, slug: string }> = useState('menu');
const menuVisible: Ref<boolean> = useState('menuVisible');

function go(to: string) {
  menuVisible.value =false;
  scrollTo(to, 'content');
}
</script>

<style lang="scss">
@import '@/styles/style.scss';

#menu {
  background-color: $color-white;
  transition: 0.2s;

  .wrap {
    display: flex;
    flex-direction: column;
    height: calc(100% - 40px);
  }

  .close {
    flex-grow: 1;
    text-align: right;
  }

  .items-wrap {
    margin-top: auto;
  }
}
#menu.hide {
  left: 100%;
  transition: 0.3s;
}
</style>
