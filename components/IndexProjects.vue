<template>
  <div class="IndexProjects fullheight wrap-x wrap-full pb-102">
    <h2 class="pb-40">Проекты</h2>
    <div class="project">
      <img width="100%" src="@/public/img/projects-img-blanc.svg" />
      <p class="title">Наименование проекта – 2024</p>
      <p class="description">Наименование проекта – 2024</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/styles/style.scss';

.IndexProjects {
  background: #FFFFFF;

  .project {
    img {
      height: 50vw;
      background: rgba(#c5c5c5, 0.5);
    }
    .title {
      font-size: 32px;
    }
    .description {
      font-size: 24px;
    }
  }
}
</style>
