<template>
  <div class="IndexWePerson">
    <div class="wrap">
      <div class="img">
        <img width="100%" src="@/public/img/projects-img-blanc.svg" />
      </div>
      <div class="info-wrap pl-32 mb-102">
        <div class="info mb-44">
          <div class="name">{{name}}</div>
          <div class="position">{{position}}</div>
        </div>
        <div>{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const name: string = useAttrs().name;
const position: string = useAttrs().position;
const text: string = useAttrs().text;
</script>

<style lang="scss">
@import '@/styles/style.scss';

.IndexWePerson .wrap {
  font-size: 20px;

  .img {
    display: inline-block;
    vertical-align: top;
    width: 30%;

    img {
      border-radius: 50%;
      background: rgba(#c5c5c5, 0.5);
    }
  }

  .info-wrap {
    display: inline-block;
    width: 70%;
  }
}

.viewport-PHONE {
  .IndexWePerson .wrap {
    font-size: 24px;

    .img {
      display: block;
      width: 70%;
      margin-bottom: 40px;
    }
    .info-wrap {
      display: block;
      padding-left: 0;
    }
  }
}
.viewport-SMARTPHONE {
  .IndexWePerson .wrap {
    font-size: 24px;
    
    .img {
      display: block;
      width: 50%;
      margin-bottom: 40px;
    }
    .info-wrap {
      display: block;
      padding-left: 0;
    }
  }}
.viewport-TABLED {
  .IndexWePerson .wrap {
    font-size: 2.1vw;
  }
}
.viewport-DESKTOP {
  .IndexWePerson .wrap {
    font-size: 2.1vw;
  }
}
</style>
