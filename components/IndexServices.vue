<template>
  <div class="IndexServices">
    <h2 class="pb-44">Услуги</h2>
    <div class="items pb-44">
      <div class="button">Название практики 1</div> /
      <div class="button active">Название практики 2</div> /
      <div class="button">Название практики 3</div> /
      <div class="button">Название практики 4</div> /
      <div class="button">Название практики 5</div> /
      <div class="button">Название практики 6</div> /
      <div class="button">Название практики 7</div> /
      <div class="button">Название практики 8</div>
    </div>
    <div class="info">
      <p>Встраиваемся во внутренние процессы компании и эффективно работаем вместе с продуктовой командой. Используем гибкую методологию, помогаем создавать MVP или добавить функциик уже существующему продукту.</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/styles/style.scss';

.IndexServices {
  .items {

    .button {
      display: inline-block;
      height: 4vw;
      padding-left: 12px;
      padding-right: 12px;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        color: $color-brand;
      }
    }
    .button.active {
      color: $color-black;
      background: $color-brand;
    }
  }
}

.viewport-PHONE {
  .IndexServices .items .button {
    font-size: 24px;
  }
  .IndexServices .info {
    width: 100%;
  }
}
.viewport-SMARTPHONE {
  .IndexServices .items .button {
    font-size: 24px;
  }
  .IndexServices .info {
    width: 100%;
  }
}
.viewport-TABLED {
  .IndexServices .items .button {
    font-size: 32px;
  }
  .IndexServices .info {
    width: 70%;
  }
}
.viewport-DESKTOP {
  .IndexServices .items .button {
    font-size: 2.1vw;
    line-height: 3vw;
  }
  .IndexServices .info {
    width: 60%;
  }
}
</style>
