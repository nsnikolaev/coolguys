<template>
  <div class="IndexBrand fullheight">
    <img
      class="py-40"
      :class="`logo-${appViewport}`"
      width="100%"
      src="@/public/img/app-logo.svg"
    />
    <h3 :class="`wellcome-${appViewport}`">
      Мы креативное агентство,<br>специализируемся<br>на визуальной идентичности<br>и брендинге
    </h3>
  </div>
</template>

<script setup lang="ts">
const appViewport: Ref<string> = useState('appViewport');
</script>

<style lang="scss">
@import '@/styles/style.scss';

.IndexBrand {

  .logo-PHONE,
  .logo-SMARTPHONE {
    margin-top: 0;
  }
  .logo-TABLED {
    margin-top: 13vh;
  }
  .logo-DESKTOP {
    margin-top: 15vh;
  }

  .wellcome-PHONE,
  .wellcome-SMARTPHONE {
    margin-left: 0;
  }
  .wellcome-TABLED {
    margin-left: 16%;
  }
  .wellcome-DESKTOP {
    margin-left: 25%;
  }
}
</style>
